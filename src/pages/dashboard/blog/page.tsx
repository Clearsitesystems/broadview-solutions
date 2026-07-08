import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBlogArticles } from '@/hooks/useBlogStorage';
import { useBlogCategories } from '@/hooks/useBlogStorage';

export default function BlogAdminPage() {
  const { articles, loading, deleteArticle } = useBlogArticles();
  const { categories } = useBlogCategories();
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const filteredArticles = articles.filter((article) => {
    if (statusFilter !== 'all' && article.status !== statusFilter) return false;
    if (categoryFilter !== 'all' && article.category !== categoryFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.slug.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleDelete = useCallback(async (id: string) => {
    await deleteArticle(id);
    setDeleteConfirm(null);
  }, [deleteArticle]);

  const statusBadge = (status: string) => {
    const styles: Record<string, string> = {
      published: 'bg-emerald-900/30 text-emerald-400 border-emerald-500/30',
      draft: 'bg-amber-900/30 text-amber-400 border-amber-500/30',
      archived: 'bg-slate-700/40 text-slate-400 border-slate-500/30',
    };
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${styles[status] || styles.draft}`}>
        {status}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <i className="ri-loader-4-line animate-spin text-3xl text-[#2D5016]"></i>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Articles</h1>
          <p className="text-[#8A9BA8] text-sm mt-1">
            {articles.length} total &middot; {articles.filter((a) => a.status === 'published').length} published
          </p>
        </div>
        <Link
          to="/dashboard/blog/editor"
          className="inline-flex items-center space-x-2 bg-[#2D5016] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1E3A0F] transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line"></i>
          <span>New Article</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA8]"></i>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] outline-none text-sm cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] outline-none text-sm cursor-pointer"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl overflow-hidden">
        {filteredArticles.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016]/10 rounded-full mx-auto mb-4">
              <i className="ri-article-line text-3xl text-[#2D5016]"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {articles.length === 0 ? 'No articles yet' : 'No matching articles'}
            </h3>
            <p className="text-[#8A9BA8] text-sm mb-4">
              {articles.length === 0
                ? 'Get started by creating your first blog article.'
                : 'Try adjusting your filters or search query.'}
            </p>
            {articles.length === 0 && (
              <Link
                to="/dashboard/blog/editor"
                className="inline-flex items-center space-x-2 bg-[#2D5016] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1E3A0F] transition-colors cursor-pointer"
              >
                <i className="ri-add-line"></i>
                <span>Create Article</span>
              </Link>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#8A9BA8]/15">
                  <th className="text-left text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider px-5 py-3">Article</th>
                  <th className="text-left text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider px-5 py-3">Category</th>
                  <th className="text-left text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="text-left text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider px-5 py-3">Date</th>
                  <th className="text-right text-xs font-semibold text-[#8A9BA8] uppercase tracking-wider px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#8A9BA8]/10">
                {filteredArticles.map((article) => (
                  <tr key={article.id} className="hover:bg-[#1C2B2B]/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-start space-x-3">
                        {article.featured_image ? (
                          <img
                            src={article.featured_image}
                            alt={article.title}
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-[#8A9BA8]/20"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-[#2D5016]/20 flex items-center justify-center flex-shrink-0">
                            <i className="ri-article-line text-[#2D5016]"></i>
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white truncate">{article.title}</p>
                          <p className="text-xs text-[#8A9BA8] truncate">/{article.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-[#C0C8CC]">{article.category}</span>
                    </td>
                    <td className="px-5 py-4">
                      {statusBadge(article.status)}
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-[#8A9BA8]">
                        {article.published_at
                          ? new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                          : new Date(article.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => navigate(`/dashboard/blog/editor/${article.id}`)}
                          className="p-2 rounded-lg text-[#8A9BA8] hover:text-white hover:bg-[#2D5016]/20 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <i className="ri-edit-line"></i>
                        </button>
                        <a
                          href={`/blog/${article.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-[#8A9BA8] hover:text-white hover:bg-[#2D5016]/20 transition-colors cursor-pointer"
                          title="Preview"
                        >
                          <i className="ri-external-link-line"></i>
                        </a>
                        <button
                          onClick={() => setDeleteConfirm(article.id)}
                          className="p-2 rounded-lg text-[#8A9BA8] hover:text-red-400 hover:bg-red-900/20 transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 max-w-md w-full">
            <div className="w-12 h-12 flex items-center justify-center bg-red-900/20 rounded-full mx-auto mb-4">
              <i className="ri-delete-bin-line text-xl text-red-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-2">Delete Article?</h3>
            <p className="text-[#8A9BA8] text-sm text-center mb-6">
              This action cannot be undone. The article will be permanently removed from your blog.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2.5 rounded-lg bg-[#1C2B2B] border border-[#8A9BA8]/30 text-[#C0C8CC] font-medium hover:bg-[#1C2B2B]/80 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 px-4 py-2.5 rounded-lg bg-red-900/30 border border-red-500/30 text-red-400 font-medium hover:bg-red-900/50 transition-colors cursor-pointer"
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