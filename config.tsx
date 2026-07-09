import { useState, useEffect } from 'react';
import { Client, ClientStatus } from '@/hooks/useCrmStorage';
import { CrmUser } from '@/hooks/useCrmAuth';
import { USERS } from '@/mocks/crmData';

interface Props {
  client: Client | null;
  currentUser: CrmUser;
  onSave: (client: Client) => void;
  onClose: () => void;
}

const blank: Omit<Client, 'id' | 'createdAt'> = {
  name: '', email: '', phone: '', address: '', propertyType: 'residential',
  status: 'active', startDate: new Date().toISOString().slice(0, 10),
  notes: '', assignedTo: '', leadId: null,
};

export default function ClientModal({ client, currentUser, onSave, onClose }: Props) {
  const [form, setForm] = useState<Omit<Client, 'id' | 'createdAt'>>(blank);

  useEffect(() => {
    if (client) {
      const { id: _id, createdAt: _c, ...rest } = client;
      setForm(rest);
    } else {
      setForm({ ...blank, assignedTo: currentUser.id });
    }
  }, [client, currentUser.id]);

  const set = (k: keyof typeof form, v: string | null) => setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) return;
    const now = new Date().toISOString();
    const saved: Client = {
      ...form,
      id: client?.id || `client-${Date.now()}`,
      createdAt: client?.createdAt || now,
    };
    onSave(saved);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 py-8 overflow-y-auto">
      <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl w-full max-w-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#8A9BA8]/15">
          <h2 className="text-lg font-semibold text-white">{client ? 'Edit Client' : 'Add Client'}</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-[#8A9BA8] hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-[#1C2B2B]">
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Full Name / Business *</label>
              <input value={form.name} onChange={(e) => set('name', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Phone *</label>
              <input value={form.phone} onChange={(e) => set('phone', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Email</label>
              <input value={form.email} onChange={(e) => set('email', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Address</label>
              <input value={form.address} onChange={(e) => set('address', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Property Type</label>
              <select value={form.propertyType} onChange={(e) => set('propertyType', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] cursor-pointer">
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="hoa">HOA</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Status</label>
              <select value={form.status} onChange={(e) => set('status', e.target.value as ClientStatus)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] cursor-pointer">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Start Date</label>
              <input type="date" value={form.startDate} onChange={(e) => set('startDate', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016]" />
            </div>
            {currentUser.role === 'admin' && (
              <div>
                <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Assigned To</label>
                <select value={form.assignedTo} onChange={(e) => set('assignedTo', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] cursor-pointer">
                  {USERS.map((u) => (
                    <option key={u.id} value={u.id}>{u.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Notes</label>
            <textarea value={form.notes} onChange={(e) => set('notes', e.target.value)} rows={3} maxLength={500} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] resize-none" />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-3 px-6 py-4 border-t border-[#8A9BA8]/15">
          <button onClick={onClose} className="px-4 py-2.5 rounded-lg border border-[#8A9BA8]/30 text-[#C0C8CC] text-sm hover:bg-[#1C2B2B] transition-colors cursor-pointer whitespace-nowrap">Cancel</button>
          <button onClick={handleSubmit} className="px-5 py-2.5 rounded-lg bg-[#2D5016] text-white text-sm font-medium hover:bg-[#1E3A0F] transition-colors cursor-pointer whitespace-nowrap">
            {client ? 'Save Changes' : 'Add Client'}
          </button>
        </div>
      </div>
    </div>
  );
}
