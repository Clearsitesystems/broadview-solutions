# Broadview Solutions Blog System

## 1. Project Description
A content-rich blog system integrated into the existing Broadview Solutions landscaping company website. The blog will feature seasonal lawn care tips, service guides, and community content to drive SEO traffic and establish authority in the Elkhart County lawn care market.

## 2. Page Structure
- `/blog` — Public blog listing page with category filters and search
- `/blog/:slug` — Public blog article detail page with rich content
- `/dashboard/blog` — Admin blog management (CRUD articles, categories, analytics)
- `/dashboard/blog/editor` — Rich text article editor

## 3. Core Features
- [ ] Public blog listing with category filtering
- [ ] Public blog article detail with rich content rendering
- [ ] Admin blog CRUD (create, read, update, delete articles)
- [ ] Rich text editor for article content
- [ ] Article SEO metadata management
- [ ] Category/tag management
- [ ] Article status (draft/published/archived)
- [ ] Admin route protection with existing CRM auth

## 4. Data Model Design

### Table: blog_articles
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| slug | text | URL-friendly identifier |
| title | text | Article headline |
| excerpt | text | Short preview text |
| content | text | Full article HTML content |
| featured_image | text | Hero image URL |
| category | text | Article category |
| status | enum | draft / published / archived |
| seo_title | text | Custom SEO title |
| seo_description | text | Meta description |
| author | text | Author name |
| published_at | timestamptz | Publication date |
| created_at | timestamptz | Auto-created |
| updated_at | timestamptz | Auto-updated |

### Table: blog_categories
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| name | text | Category name |
| slug | text | URL slug |
| description | text | Category description |

## 5. Backend / Third-party Integration Plan
- **Supabase**: Database storage for articles and categories, Auth for admin users
- **Storage**: Supabase Storage for article images
- **Rich Text**: Lexical editor for content creation

## 6. Development Phase Plan

### Phase 1: Frontend Blog Pages (No Supabase Required)
- Goal: Build public-facing blog list and detail pages with mock data
- Deliverable: `/blog` and `/blog/:slug` pages working with rich content

### Phase 2: Admin Panel Integration
- Goal: Build blog CRUD inside the existing dashboard
- Deliverable: `/dashboard/blog` with article list, create, edit, delete

### Phase 3: Supabase Backend
- Goal: Connect Supabase, create tables, migrate from mock to real data
- Deliverable: Articles stored in Supabase, images in Storage

### Phase 4: Rich Text Editor & Polish
- Goal: Add Lexical editor, final SEO optimization, analytics
- Deliverable: Full-featured editor, published blog with real articles