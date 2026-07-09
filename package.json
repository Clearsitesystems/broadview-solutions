import { useState } from 'react';
import { useCrmLeads, Lead, LeadStatus } from '@/hooks/useCrmStorage';
import { CrmUser } from '@/hooks/useCrmAuth';
import LeadModal from '../components/LeadModal';

interface Props {
  user: CrmUser;
}

const statusOptions: { value: LeadStatus; label: string; color: string }[] = [
  { value: 'new', label: 'New', color: 'bg-[#B8A882]/20 text-[#B8A882] border-[#B8A882]/30' },
  { value: 'contacted', label: 'Contacted', color: 'bg-sky-900/30 text-sky-400 border-sky-400/30' },
  { value: 'proposal-sent', label: 'Proposal Sent', color: 'bg-amber-900/30 text-amber-400 border-amber-400/30' },
  { value: 'closed-won', label: 'Won', color: 'bg-[#2D5016]/30 text-[#6DBF4A] border-[#6DBF4A]/30' },
  { value: 'closed-lost', label: 'Lost', color: 'bg-red-900/20 text-red-400 border-red-400/30' },
];

function statusStyle(s: string) {
  return statusOptions.find((o) => o.value === s)?.color || 'bg-[#8A9BA8]/20 text-[#8A9BA8]';
}

export default function LeadsPage({ user }: Props) {
  const { leads, saveLead, deleteLead } = useCrmLeads();
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const visibleLeads = user.role === 'admin' ? leads : leads.filter((l) => l.assignedTo === user.id);

  const filtered = visibleLeads.filter((l) => {
    const matchSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search) ||
      l.address.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'all' || l.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const openNew = () => {
    setSelectedLead(null);
    setIsModalOpen(true);
  };

  const openEdit = (lead: Lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const handleSave = async (lead: Lead) => {
    await saveLead(lead);
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    await deleteLead(id);
    setDeleteConfirm(null);
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads</h1>
          <p className="text-[#8A9BA8] text-sm mt-0.5">{filtered.length} leads found</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center space-x-2 bg-[#2D5016] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1E3A0F] transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line"></i>
          <span>Add Lead</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA8] text-sm"></i>
          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-[#1A2424] border border-[#8A9BA8]/20 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2.5 bg-[#1A2424] border border-[#8A9BA8]/20 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] outline-none text-sm cursor-pointer"
        >
          <option value="all">All Statuses</option>
          {statusOptions.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#8A9BA8]/15">
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider">Name</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider hidden md:table-cell">Contact</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider hidden lg:table-cell">Service</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider hidden sm:table-cell">Date</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#8A9BA8]/10">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-[#8A9BA8] text-sm">
                    No leads found
                  </td>
                </tr>
              )}
              {filtered.map((lead) => (
                <tr key={lead.id} className="hover:bg-[#1C2B2B] transition-colors">
                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm font-medium text-white">{lead.name}</p>
                      <p className="text-xs text-[#8A9BA8] mt-0.5">{lead.source}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <p className="text-sm text-[#C0C8CC]">{lead.phone}</p>
                    <p className="text-xs text-[#8A9BA8]">{lead.email}</p>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <span className="text-sm text-[#C0C8CC] capitalize">{lead.serviceInterest.replace(/-/g, ' ')}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border capitalize ${statusStyle(lead.status)}`}>
                      {lead.status.replace(/-/g, ' ')}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span className="text-xs text-[#8A9BA8]">
                      {new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center space-x-2 justify-end">
                      <button
                        onClick={() => openEdit(lead)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-[#8A9BA8] hover:text-white hover:bg-[#2D5016]/30 transition-colors cursor-pointer"
                      >
                        <i className="ri-edit-line text-sm"></i>
                      </button>
                      {user.role === 'admin' && (
                        <button
                          onClick={() => setDeleteConfirm(lead.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg text-[#8A9BA8] hover:text-red-400 hover:bg-red-900/20 transition-colors cursor-pointer"
                        >
                          <i className="ri-delete-bin-line text-sm"></i>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead modal */}
      {isModalOpen && (
        <LeadModal
          lead={selectedLead}
          currentUser={user}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Delete confirm */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-white mb-2">Delete Lead?</h3>
            <p className="text-sm text-[#8A9BA8] mb-6">This action cannot be undone.</p>
            <div className="flex space-x-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2.5 rounded-lg border border-[#8A9BA8]/30 text-[#C0C8CC] text-sm hover:bg-[#1C2B2B] transition-colors cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 px-4 py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
