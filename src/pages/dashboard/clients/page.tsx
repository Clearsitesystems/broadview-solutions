import { useState } from 'react';
import { useCrmClients, Client } from '@/hooks/useCrmStorage';
import { CrmUser } from '@/hooks/useCrmAuth';
import ClientModal from '../components/ClientModal';

interface Props {
  user: CrmUser;
}

export default function ClientsPage({ user }: Props) {
  const { clients, saveClient, deleteClient } = useCrmClients();
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const visible = user.role === 'admin' ? clients : clients.filter((c) => c.assignedTo === user.id);

  const filtered = visible.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search) ||
      c.address.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'all' || c.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const openNew = () => { setSelectedClient(null); setIsModalOpen(true); };
  const openEdit = (c: Client) => { setSelectedClient(c); setIsModalOpen(true); };

  const handleSave = async (client: Client) => {
    await saveClient(client);
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    await deleteClient(id);
    setDeleteConfirm(null);
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">Clients</h1>
          <p className="text-[#8A9BA8] text-sm mt-0.5">{filtered.length} clients</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center space-x-2 bg-[#2D5016] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1E3A0F] transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line"></i>
          <span>Add Client</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA8] text-sm"></i>
          <input
            type="text"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-[#1A2424] border border-[#8A9BA8]/20 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2.5 bg-[#1A2424] border border-[#8A9BA8]/20 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] outline-none text-sm cursor-pointer"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.length === 0 && (
          <div className="col-span-full bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl py-16 text-center text-[#8A9BA8] text-sm">
            No clients found
          </div>
        )}
        {filtered.map((client) => (
          <div key={client.id} className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5 hover:border-[#8A9BA8]/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-10 h-10 flex items-center justify-center bg-[#2D5016]/30 rounded-full flex-shrink-0">
                  <i className="ri-building-line text-[#6DBF4A]"></i>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm leading-tight truncate">{client.name}</p>
                  <p className="text-xs text-[#8A9BA8] capitalize mt-0.5">{client.propertyType}</p>
                </div>
              </div>
              <span className={`flex-shrink-0 ml-2 px-2 py-0.5 rounded-full text-xs font-medium border capitalize ${
                client.status === 'active'
                  ? 'bg-[#2D5016]/30 text-[#6DBF4A] border-[#6DBF4A]/30'
                  : 'bg-[#8A9BA8]/20 text-[#8A9BA8] border-[#8A9BA8]/30'
              }`}>
                {client.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-xs text-[#8A9BA8]">
                <div className="w-4 h-4 flex items-center justify-center"><i className="ri-phone-line"></i></div>
                <span>{client.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#8A9BA8]">
                <div className="w-4 h-4 flex items-center justify-center"><i className="ri-mail-line"></i></div>
                <span className="truncate">{client.email}</span>
              </div>
              <div className="flex items-start space-x-2 text-xs text-[#8A9BA8]">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"><i className="ri-map-pin-line"></i></div>
                <span className="truncate">{client.address}</span>
              </div>
            </div>

            {client.notes && (
              <p className="text-xs text-[#8A9BA8] bg-[#1C2B2B] rounded-lg px-3 py-2 mb-4 line-clamp-2">{client.notes}</p>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-[#8A9BA8]/10">
              <span className="text-xs text-[#8A9BA8]">Since {new Date(client.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => openEdit(client)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[#8A9BA8] hover:text-white hover:bg-[#2D5016]/30 transition-colors cursor-pointer"
                >
                  <i className="ri-edit-line text-sm"></i>
                </button>
                {user.role === 'admin' && (
                  <button
                    onClick={() => setDeleteConfirm(client.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-[#8A9BA8] hover:text-red-400 hover:bg-red-900/20 transition-colors cursor-pointer"
                  >
                    <i className="ri-delete-bin-line text-sm"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ClientModal
          client={selectedClient}
          currentUser={user}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-white mb-2">Delete Client?</h3>
            <p className="text-sm text-[#8A9BA8] mb-6">This will permanently remove this client record.</p>
            <div className="flex space-x-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 px-4 py-2.5 rounded-lg border border-[#8A9BA8]/30 text-[#C0C8CC] text-sm hover:bg-[#1C2B2B] transition-colors cursor-pointer whitespace-nowrap">Cancel</button>
              <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 px-4 py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
