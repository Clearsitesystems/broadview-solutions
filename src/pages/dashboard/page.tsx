import { useCrmLeads, useCrmClients, useCrmJobs } from '@/hooks/useCrmStorage';
import { CrmUser } from '@/hooks/useCrmAuth';
import { Link } from 'react-router-dom';

interface Props {
  user: CrmUser;
}

export default function DashboardOverview({ user }: Props) {
  const { leads } = useCrmLeads();
  const { clients } = useCrmClients();
  const { jobs } = useCrmJobs();

  const myLeads = user.role === 'admin' ? leads : leads.filter((l) => l.assignedTo === user.id);
  const myClients = user.role === 'admin' ? clients : clients.filter((c) => c.assignedTo === user.id);
  const myJobs = user.role === 'admin' ? jobs : jobs.filter((j) => j.assignedTo === user.id);

  const newLeads = myLeads.filter((l) => l.status === 'new').length;
  const activeClients = myClients.filter((c) => c.status === 'active').length;
  const activeJobs = myJobs.filter((j) => j.status === 'active').length;
  const totalRevenue = myJobs
    .filter((j) => j.status === 'active' || j.status === 'completed')
    .reduce((sum, j) => sum + j.price, 0);

  const recentLeads = myLeads.slice(0, 5);
  const recentJobs = myJobs.slice(0, 5);

  const statusColors: Record<string, string> = {
    new: 'bg-[#B8A882]/20 text-[#B8A882]',
    contacted: 'bg-sky-900/30 text-sky-400',
    'proposal-sent': 'bg-amber-900/30 text-amber-400',
    'closed-won': 'bg-[#2D5016]/30 text-[#6DBF4A]',
    'closed-lost': 'bg-red-900/20 text-red-400',
    active: 'bg-[#2D5016]/30 text-[#6DBF4A]',
    completed: 'bg-[#8A9BA8]/20 text-[#8A9BA8]',
    cancelled: 'bg-red-900/20 text-red-400',
    'on-hold': 'bg-amber-900/30 text-amber-400',
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Welcome back, {user.name.split(' ')[0]}
        </h1>
        <p className="text-[#8A9BA8] text-sm mt-1">Here's what's happening with your leads and clients today.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'New Leads', value: newLeads, icon: 'ri-user-received-2-line', color: 'text-[#B8A882]', bg: 'bg-[#B8A882]/10', link: '/dashboard/leads' },
          { label: 'Active Clients', value: activeClients, icon: 'ri-group-line', color: 'text-[#6DBF4A]', bg: 'bg-[#2D5016]/20', link: '/dashboard/clients' },
          { label: 'Active Jobs', value: activeJobs, icon: 'ri-briefcase-line', color: 'text-sky-400', bg: 'bg-sky-900/20', link: '/dashboard/jobs' },
          { label: 'Total Value', value: `$${totalRevenue.toLocaleString()}`, icon: 'ri-money-dollar-circle-line', color: 'text-[#B8A882]', bg: 'bg-[#B8A882]/10', link: '/dashboard/jobs' },
        ].map((stat) => (
          <Link
            key={stat.label}
            to={stat.link}
            className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5 hover:border-[#8A9BA8]/30 transition-all cursor-pointer group"
          >
            <div className={`w-10 h-10 flex items-center justify-center ${stat.bg} rounded-lg mb-4`}>
              <i className={`${stat.icon} ${stat.color} text-xl`}></i>
            </div>
            <div className="text-2xl font-bold text-white group-hover:text-[#C0C8CC] transition-colors">{stat.value}</div>
            <div className="text-sm text-[#8A9BA8] mt-1">{stat.label}</div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent leads */}
        <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#8A9BA8]/15">
            <h2 className="font-semibold text-white text-sm">Recent Leads</h2>
            <Link to="/dashboard/leads" className="text-xs text-[#2D5016] hover:text-[#B8A882] transition-colors cursor-pointer">View all →</Link>
          </div>
          <div className="divide-y divide-[#8A9BA8]/10">
            {recentLeads.length === 0 && (
              <div className="px-5 py-8 text-center text-[#8A9BA8] text-sm">No leads yet</div>
            )}
            {recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-[#1C2B2B] transition-colors">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">{lead.name}</p>
                  <p className="text-xs text-[#8A9BA8] truncate">{lead.serviceInterest.replace(/-/g, ' ')} · {lead.source}</p>
                </div>
                <span className={`ml-3 flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[lead.status] || ''}`}>
                  {lead.status.replace(/-/g, ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent jobs */}
        <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#8A9BA8]/15">
            <h2 className="font-semibold text-white text-sm">Jobs & Pricing</h2>
            <Link to="/dashboard/jobs" className="text-xs text-[#2D5016] hover:text-[#B8A882] transition-colors cursor-pointer">View all →</Link>
          </div>
          <div className="divide-y divide-[#8A9BA8]/10">
            {recentJobs.length === 0 && (
              <div className="px-5 py-8 text-center text-[#8A9BA8] text-sm">No jobs yet</div>
            )}
            {recentJobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-[#1C2B2B] transition-colors">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">{job.title}</p>
                  <p className="text-xs text-[#8A9BA8] truncate">{job.clientName} · {job.billingType}</p>
                </div>
                <div className="ml-3 flex-shrink-0 text-right">
                  <p className="text-sm font-semibold text-[#B8A882]">${job.price.toLocaleString()}</p>
                  <span className={`text-xs font-medium capitalize ${statusColors[job.status] || ''}`}>
                    {job.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pipeline summary */}
      <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5">
        <h2 className="font-semibold text-white text-sm mb-4">Lead Pipeline</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { label: 'New', status: 'new', color: 'bg-[#B8A882]' },
            { label: 'Contacted', status: 'contacted', color: 'bg-sky-400' },
            { label: 'Proposal Sent', status: 'proposal-sent', color: 'bg-amber-400' },
            { label: 'Won', status: 'closed-won', color: 'bg-[#6DBF4A]' },
            { label: 'Lost', status: 'closed-lost', color: 'bg-red-400' },
          ].map((stage) => {
            const count = myLeads.filter((l) => l.status === stage.status).length;
            return (
              <div key={stage.status} className="bg-[#1C2B2B] rounded-lg p-3 text-center">
                <div className={`w-2 h-2 rounded-full ${stage.color} mx-auto mb-2`}></div>
                <div className="text-xl font-bold text-white">{count}</div>
                <div className="text-xs text-[#8A9BA8] mt-0.5">{stage.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
