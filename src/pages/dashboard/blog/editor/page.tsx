import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlogArticles, type BlogArticle } from '@/hooks/useBlogStorage';
import { useBlogCategories } from '@/hooks/useBlogStorage';

const formattingTools = [
  { label: 'Bold', tag: 'strong', icon: 'ri-bold' },
  { label: 'Italic', tag: 'em', icon: 'ri-italic' },
  { label: 'H2', tag: 'h2', icon: 'ri-heading' },
  { label: 'H3', tag: 'h3', icon: 'ri-h-3' },
  { label: 'List', tag: 'ul', icon: 'ri-list-unordered' },
  { label: 'Link', tag: 'a', icon: 'ri-link' },
  { label: 'Quote', tag: 'blockquote', icon: 'ri-double-quotes-l' },
  { label: 'Image', tag: 'img', icon: 'ri-image-line' },
];

export default function BlogEditorPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { saveArticle, getArticle, loading: articlesLoading } = useBlogArticles();
  const { categories } = useBlogCategories();

  const [form, setForm] = useState<Partial<BlogArticle>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    category: 'Lawn Care',
    status: 'draft',
    seo_title: '',
    seo_description: '',
    author: 'Broadview Solutions',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  // Load existing article if editing
  useEffect(() => {
    if (!id) {
      setLoaded(true);
      return;
    }
    getArticle(id).then((article) => {
      if (article) {
        setForm({ ...article });
      }
      setLoaded(true);
    });
  }, [id, getArticle]);

  const updateField = useCallback((field: keyof BlogArticle, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === 'title' && !id) {
      setForm((prev) => ({ ...prev, slug: slugify(value) }));
    }
  }, [id]);

  const insertTag = useCallback((tag: string) => {
    const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = form.content || '';
    const selected = text.substring(start, end);
    let insertion = '';

    switch (tag) {
      case 'strong':
        insertion = `<strong class="text-white">${selected || 'bold text'}</strong>`;
        break;
      case 'em':
        insertion = `<em>${selected || 'italic text'}</em>`;
        break;
      case 'h2':
        insertion = `<h2 class="text-3xl font-bold text-white mt-12 mb-6">${selected || 'Heading'}</h2>`;
        break;
      case 'h3':
        insertion = `<h3 class="text-2xl font-bold text-white mt-8 mb-4">${selected || 'Subheading'}</h3>`;
        break;
      case 'ul':
        insertion = `<ul class="list-disc list-inside text-[#C0C8CC] space-y-2 mb-6 ml-4">\n  <li>${selected || 'List item'}</li>\n  <li>Another item</li>\n</ul>`;
        break;
      case 'a':
        insertion = `<a href="/" class="text-[#2D5016] hover:text-[#B8A882] transition-colors">${selected || 'Link text'}</a>`;
        break;
      case 'blockquote':
        insertion = `<blockquote class="border-l-4 border-[#2D5016] pl-6 py-2 my-6 text-[#C0C8CC] italic">${selected || 'Quote text'}</blockquote>`;
        break;
      case 'img':
        insertion = `<img src="https://readdy.ai/api/search-image?query=landscaping%20lawn%20care%20professional&width=800&height=500&seq=blogimg&orientation=landscape" alt="Description" class="w-full rounded-xl my-6" />`;
        break;
      default:
        insertion = `<${tag}>${selected || tag}</${tag}>`;
    }

    const before = text.substring(0, start);
    const after = text.substring(end);
    const newContent = before + insertion + after;
    setForm((prev) => ({ ...prev, content: newContent }));
    setTimeout(() => {
      textarea.focus();
      const newCursor = start + insertion.length;
      textarea.setSelectionRange(newCursor, newCursor);
    }, 0);
  }, [form.content]);

  const handleSave = async (targetStatus: 'draft' | 'published') => {
    if (!form.title?.trim()) {
      setError('Title is required');
      return;
    }
    if (!form.content?.trim()) {
      setError('Content is required');
      return;
    }
    setError('');
    setIsSaving(true);
    try {
      const article = await saveArticle({
        ...form,
        status: targetStatus,
      } as Partial<BlogArticle> & { title: string; content: string });
      navigate('/dashboard/blog');
    } catch (err) {
      setError('Failed to save article. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!loaded || articlesLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <i className="ri-loader-4-line animate-spin text-3xl text-[#2D5016]"></i>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">{id ? 'Edit Article' : 'New Article'}</h1>
          <p className="text-[#8A9BA8] text-sm mt-1">
            {id ? 'Update your blog post content and settings.' : 'Create a new blog post for your audience.'}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-4 py-2.5 rounded-lg bg-[#1C2B2B] border border-[#8A9BA8]/30 text-[#C0C8CC] font-medium hover:bg-[#1C2B2B]/80 transition-colors cursor-pointer"
          >
            <i className={`${showPreview ? 'ri-eye-off-line' : 'ri-eye-line'} mr-2`}></i>
            {showPreview ? 'Hide Preview' : 'Preview'}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-900/20 border border-red-500/40 text-red-400 px-4 py-3 rounded-lg text-sm flex items-center space-x-2">
          <i className="ri-error-warning-line text-lg"></i>
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5">
            <label className="block text-sm font-medium text-[#C0C8CC] mb-2">Article Title *</label>
            <input
              type="text"
              value={form.title || ''}
              onChange={(e) => updateField('title', e.target.value)}
              placeholder="Enter a compelling headline..."
              className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-lg font-semibold placeholder-[#8A9BA8]"
            />
          </div>

          {/* Slug */}
          <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5">
            <label className="block text-sm font-medium text-[#C0C8CC] mb-2">URL Slug</label>
            <div className="flex items-center">
              <span className="px-3 py-3 bg-[#1C2B2B] border border-r-0 border-[#8A9BA8]/30 text-[#8A9BA8] rounded-l-lg text-sm">/blog/</span>
              <input
                type="text"
                value={form.slug || ''}
                onChange={(e) => updateField('slug', e.target.value)}
                placeholder="article-slug"
                className="flex-1 px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-r-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
              />
            </div>
          </div>

          {/* Content Editor */}
          <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5">
            <label className="block text-sm font-medium text-[#C0C8CC] mb-2">Content *</label>
            {/* Formatting Toolbar */}
            <div className="flex flex-wrap gap-1 mb-3 pb-3 border-b border-[#8A9BA8]/15">
              {formattingTools.map((tool) => (
                <button
                  key={tool.tag}
                  onClick={() => insertTag(tool.tag)}
                  className="px-3 py-1.5 rounded-md bg-[#1C2B2B] border border-[#8A9BA8]/20 text-[#8A9BA8] hover:text-white hover:border-[#8A9BA8]/40 transition-colors text-xs font-medium cursor-pointer"
                  title={tool.label}
                >
                  <i className={`${tool.icon} mr-1`}></i>
                  {tool.label}
                </button>
              ))}
            </div>
            <textarea
              id="content-editor"
              value={form.content || ''}
              onChange={(e) => updateField('content', e.target.value)}
              placeholder="Write your article content here. Use HTML for formatting or click the toolbar buttons above."
              rows={20}
              className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8] font-mono leading-relaxed"
            />
            <p className="text-xs text-[#8A9BA8] mt-2">
              Write HTML content directly. Use the toolbar buttons to insert common formatting tags.
            </p>
          </div>

          {/* Excerpt */}
          <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5">
            <label className="block text-sm font-medium text-[#C0C8CC] mb-2">Excerpt</label>
            <textarea
              value={form.excerpt || ''}
              onChange={(e) => updateField('excerpt', e.target.value)}
              placeholder="Short summary for blog cards and SEO..."
              rows={3}
              maxLength={300}
              className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8] resize-none"
            />
            <p className="text-xs text-[#8A9BA8] mt-1">{(form.excerpt || '').length}/300 characters</p>
          </div>

          {/* Featured Image */}
          <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5">
            <label className="block text-sm font-medium text-[#C0C8CC] mb-2">Featured Image URL</label>
            <input
              type="text"
              value={form.featured_image || ''}
              onChange={(e) => updateField('featured_image', e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
            />
            {form.featured_image && (
              <img
                src={form.featured_image}
                alt="Preview"
                className="mt-3 w-full h-48 object-cover rounded-lg border border-[#8A9BA8]/20"
                loading="lazy"
              />
            )}
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Publish Actions */}
          <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5 space-y-3">
            <h3 className="font-semibold text-white text-sm">Publish</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#C0C8CC]">Status</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${
                form.status === 'published'
                  ? 'bg-emerald-900/30 text-emerald-400 border-emerald-500/30'
                  : 'bg-amber-900/30 text-amber-400 border-amber-500/30'
              }`}>
                {form.status || 'draft'}
              </span>
            </div>
            <button
              onClick={() => handleSave('draft')}
              disabled={isSaving}
              className="w-full px-4 py-2.5 rounded-lg bg-[#1C2B2B] border border-[#8A9BA8]/30 text-[#C0C8CC] font-medium hover:bg-[#1C2B2B]/80 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isSaving ? 'Saving...' : 'Save Draft'}
            </button>
            <button
              onClick={() => handleSave('published')}
              disabled={isSaving}
              className="w-full px-4 py-2.5 rounded-lg bg-[#2D5016] text-white font-medium hover:bg-[#1E3A0F] transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isSaving ? 'Publishing...' : (id ? 'Update & Publish' : 'Publish Now')}
            </button>
            <button
              onClick={() => navigate('/dashboard/blog')}
              className="w-full px-4 py-2.5 rounded-lg border border-transparent text-[#8A9BA8] font-medium hover:text-[#C0C8CC] transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>

          {/* Category */}
          <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5 space-y-3">
            <h3 className="font-semibold text-white text-sm">Category</h3>
            <select
              value={form.category || 'Lawn Care'}
              onChange={(e) => updateField('category', e.target.value)}
              className="w-full px-4 py-2.5 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] outline-none text-sm cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* SEO */}
          <div className="bg-[#1A2424] border border-[#8A9BA8]/15 rounded-xl p-5 space-y-4">
            <h3 className="font-semibold text-white text-sm">SEO Settings</h3>
            <div>
              <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">SEO Title</label>
              <input
                type="text"
                value={form.seo_title || ''}
                onChange={(e) => updateField('seo_title', e.target.value)}
                placeholder={form.title || 'SEO title'}
                className="w-full px-3 py-2 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Meta Description</label>
              <textarea
                value={form.seo_description || ''}
                onChange={(e) => updateField('seo_description', e.target.value)}
                placeholder="Brief description for search engines..."
                rows={3}
                maxLength={160}
                className="w-full px-3 py-2 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] outline-none text-sm placeholder-[#8A9BA8] resize-none"
              />
              <p className="text-xs text-[#8A9BA8] mt-1">{(form.seo_description || '').length}/160</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8A9BA8] mb-1.5">Author</label>
              <input
                type="text"
                value={form.author || ''}
                onChange={(e) => updateField('author', e.target.value)}
                placeholder="Author name"
                className="w-full px-3 py-2 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8">
          <div className="bg-[#1C2B2B] border border-[#8A9BA8]/20 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-[#1C2B2B] border-b border-[#8A9BA8]/20 px-6 py-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">Preview</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 rounded-lg text-[#8A9BA8] hover:text-white hover:bg-[#1A2424] transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            <div className="p-6 lg:p-10">
              <div className="mb-4">
                <span className="inline-block bg-[#2D5016]/20 text-[#2D5016] border border-[#2D5016] px-4 py-1 rounded-full text-sm font-semibold">
                  {form.category || 'Category'}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {form.title || 'Untitled Article'}
              </h1>
              <div className="flex items-center space-x-4 mb-8 text-[#8A9BA8]">
                <span>{form.author || 'Broadview Solutions'}</span>
                <span>&middot;</span>
                <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              {form.featured_image && (
                <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden mb-10 border border-[#8A9BA8]/20">
                  <img src={form.featured_image} alt={form.title || ''} className="w-full h-full object-cover" />
                </div>
              )}
              {form.excerpt && (
                <p className="text-xl text-[#C0C8CC] leading-relaxed mb-8 italic border-l-4 border-[#2D5016] pl-6">
                  {form.excerpt}
                </p>
              )}
              <div
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: form.content || '<p class="text-[#8A9BA8]">No content yet...</p>' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 80);
}