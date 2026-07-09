import { useState } from 'react';
import { useCrmJobs, useCrmClients, Job, JobStatus } from '@/hooks/useCrmStorage';
import { CrmUser } from '@/hooks/useCrmAuth';

interface Props { user: CrmUser; }

const statusColors: Record<string, string> = {
  active: 'bg-[#2D5016]/30 text-[#6DBF4A] border-[#6DBF4A]/30',
  completed: 'bg-[#8A9BA8]/20 text-[#8A9BA8] border-[#8A9BA8]/30',
  cancelled: 'bg-red-900/20 text-red-400 border-red-400/30',
  'on-hold': 'bg-amber-900/30 text-amber-400 border-amber-400/30',
};

const blank: Omit<Job, 'id' | 'createdAt'> = {
  clientId: '', clientName: '', title: '', description: '', serviceType: 'lawn-maintenance',
  status: 'active', billingType: 'recurring', price: 0, billingCycle: 'monthly',
  startDate: new Date().toISOString().slice(0, 10), endDate: null, notes: '', assignedTo: '',
};

export default function JobsPage({ user }: Props) {
  const { jobs, saveJob, deleteJob } = useCrmJobs();
  const { clients } = useCrmClients();
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [form, setForm] = useState<Omit<Job, 'id' | 'createdAt'>>(blank);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const visible = user.role === 'admin' ? jobs : jobs.filter((j) => j.assignedTo === user.id);
  const filtered = visible.filter((j) => {
    const s = search.toLowerCase();
    return (j.title.toLowerCase().includes(s) || j.clientName.toLowerCase().includes(s)) &&
      (filterStatus === 'all' || j.status === filterStatus);
  });

  const totalActive = visible.filter((j) => j.status === 'active').reduce((sum, j) => sum + j.price, 0);

  const openNew = () => {
    setSelectedJob(null);
    setForm({ ...blank, assignedTo: user.id });
    setIsModalOpen(true);
  };

  const openEdit = (job: Job) => {
    setSelectedJob(job);
    const { id: _id, createdAt: _c, ...rest } = job;
    setForm(rest);
    setIsModalOpen(true);
  };

  const set = (k: keyof typeof form, v: string | number | null) => setForm((p) => ({ ...p, [k]: v }));

  const handleClientChange = (clientId: string) => {
    const c = clients.find((cl) => cl.id === clientId);
    setForm((p) => ({ ...p, clientId, clientName: c?.name || '' }));
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.clientId) return;
    const now = new Date().toISOString();
    await saveJob({ ...form, id: selectedJob?.id || `job-${Date.now()}`, createdAt: selectedJob?.createdAt || now });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">Jobs &amp; Pricing</h1>
          <p className="text-[#8A9BA8] text-sm mt-0.5">{filtered.length} jobs · <span className="text-[#B8A882]">${totalActive.toLocaleString()}/mo active recurring</span></p>
        </div>
        <button onClick={openNew} className="flex items-center space-x-2 bg-[#2D5016] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1E3A0F] transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-add-line"></i><span>Add Job</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA8] text-sm"></i>
          <input type="text" placeholder="Search jobs..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2.5 bg-[#1A2424] border border-[#8A9BA8]/20 text-white rounded-lg outline-none text-sm placeholder-[#8A9BA8] focus:ring-2 focus:ring-[#2D5016]" />
        </div>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-4 py-2.5 bg-[#1A2424] border border-[#8A9BA8]/20 text-white rounded-lg outline-none text-sm cursor-pointer focus:ring-2 focus:ring-[#2D5016]">
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="on-hold">On Hold</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#8A9BA8]/15">
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider">Job / Client</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider hidden md:table-cell">Type</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider">Price</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider hidden lg:table-cell">Start</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#8A9BA8]/10">
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-5 py-12 text-center text-[#8A9BA8] text-sm">No jobs found</td></tr>
              )}
              {filtered.map((job) => (
                <tr key={job.id} className="hover:bg-[#1C2B2B] transition-colors">
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-white">{job.title}</p>
                    <p className="text-xs text-[#8A9BA8] mt-0.5">{job.clientName}</p>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-xs text-[#C0C8CC] capitalize">{job.billingType}</span>
                    {job.billingCycle && <span className="text-xs text-[#8A9BA8] ml-1">· {job.billingCycle}</span>}
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-bold text-[#B8A882]">${job.price.toLocaleString()}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border capitalize ${statusColors[job.status] || ''}`}>{job.status}</span>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <span className="text-xs text-[#8A9BA8]">{new Date(job.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center space-x-2 justify-end">
                      <button onClick={() => openEdit(job)} className="w-8 h-8 flex items-center justify-center rounded-lg text-[#8A9BA8] hover:text-white hover:bg-[#2D5016]/30 transition-colors cursor-pointer"><i className="ri-edit-line text-sm"></i></button>
                      {user.role === 'admin' && (
                        <button onClick={() => setDeleteConfirm(job.id)} className="w-8 h-8 flex items-center justify-center rounded-lg text-[#8A9BA8] hover:text-red-400 hover:bg-red-900/20 transition-colors cursor-pointer"><i className="ri-delete-bin-line text-sm"></i></button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Job Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 py-8 overflow-y-auto">
          <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl w-full max-w-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#8A9BA8]/15">
              <h2 className="text-lg font-semibold text-white">{selectedJob ? 'Edit Job' : 'Add Job'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 flex items-center justify-center text-[#8A9BA8] hover:text-white cursor-pointer rounded-lg hover:bg-[#1C2B2B]"><i className="ri-close-line text-xl"></i></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Job Title *</label>
                  <input value={form.title} onChange={(e) => set('title', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Client *</label>
                  <select value={form.clientId} onChange={(e) => handleClientChange(e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] cursor-pointer">
                    <option value="">Select client...</option>
                    {clients.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Service Type</label>
                  <select value={form.serviceType} onChange={(e) => set('serviceType', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] cursor-pointer">
                    <option value="lawn-maintenance">Lawn Maintenance</option>
                    <option value="seasonal-cleanup">Seasonal Cleanup</option>
                    <option value="snow-plowing">Snow Plowing</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Billing Type</label>
                  <select value={form.billingType} onChange={(e) => set('billingType', e.target.value as 'recurring' | 'one-time')} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] cursor-pointer">
                    <option value="recurring">Recurring</option>
                    <option value="one-time">One-Time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Price ($)</label>
                  <input type="number" min={0} value={form.price} onChange={(e) => set('price', parseFloat(e.target.value) || 0)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016]" />
                </div>
                {form.billingType === 'recurring' && (
                  <div>
                    <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Billing Cycle</label>
                    <select value={form.billingCycle || 'monthly'} onChange={(e) => set('billingCycle', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] cursor-pointer">
                      <option value="weekly">Weekly</option>
                      <option value="bi-weekly">Bi-Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="seasonal">Seasonal</option>
                      <option value="annual">Annual</option>
                    </select>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Status</label>
                  <select value={form.status} onChange={(e) => set('status', e.target.value as JobStatus)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] cursor-pointer">
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="on-hold">On Hold</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Start Date</label>
                  <input type="date" value={form.startDate} onChange={(e) => set('startDate', e.target.value)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">End Date</label>
                  <input type="date" value={form.endDate || ''} onChange={(e) => set('endDate', e.target.value || null)} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Description</label>
                  <textarea value={form.description} onChange={(e) => set('description', e.target.value)} rows={2} maxLength={500} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] resize-none" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Notes</label>
                  <textarea value={form.notes} onChange={(e) => set('notes', e.target.value)} rows={2} maxLength={500} className="w-full px-3 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/25 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#2D5016] resize-none" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-3 px-6 py-4 border-t border-[#8A9BA8]/15">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-lg border border-[#8A9BA8]/30 text-[#C0C8CC] text-sm hover:bg-[#1C2B2B] transition-colors cursor-pointer whitespace-nowrap">Cancel</button>
              <button onClick={handleSave} className="px-5 py-2.5 rounded-lg bg-[#2D5016] text-white text-sm font-medium hover:bg-[#1E3A0F] transition-colors cursor-pointer whitespace-nowrap">{selectedJob ? 'Save Changes' : 'Add Job'}</button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-white mb-2">Delete Job?</h3>
            <p className="text-sm text-[#8A9BA8] mb-6">This cannot be undone.</p>
            <div className="flex space-x-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 px-4 py-2.5 rounded-lg border border-[#8A9BA8]/30 text-[#C0C8CC] text-sm hover:bg-[#1C2B2B] cursor-pointer whitespace-nowrap">Cancel</button>
              <button onClick={() => { deleteJob(deleteConfirm); setDeleteConfirm(null); }} className="flex-1 px-4 py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 cursor-pointer whitespace-nowrap">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
