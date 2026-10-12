'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { JOURNAL_ARTICLES } from '@/data/journal';
import { Search, Clock, ArrowRight, User, RotateCcw } from 'lucide-react';

export default function JournalIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'History and Heritage',
    'Destination Guides',
    'Architecture',
    'Culture and Traditions',
    'Travel Planning',
    'Responsible Travel'
  ];

  const featuredArticle = JOURNAL_ARTICLES[0];
  const regularArticles = JOURNAL_ARTICLES.slice(1);

  const filteredArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#141814] text-white pt-24 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141814] via-transparent to-[rgba(20,24,20,0.6)]" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
            Essays, Archives & Guides
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-tight">
            The Heritage Travel Journal
          </h1>
          <p className="text-base sm:text-lg text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            In-depth historical writing, architectural field notes, and thoughtful cultural perspectives written by our Sri Lankan travel specialists.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBE5DA]/70 border border-[#DCD4C6] rounded-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#77756D]" />
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs pl-10 pr-4 py-2.5 text-xs text-[#252720] placeholder-[#77756D] focus:ring-1 focus:ring-[#6C7357]"
              />
            </div>

            {(searchQuery || selectedCategory !== 'All') && (
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="inline-flex items-center gap-1.5 text-xs text-[#6C7357] hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div className="space-y-2 border-t border-[#DCD4C6]/60 pt-4">
            <span className="text-[10px] uppercase tracking-widest text-[#77756D] font-semibold block">
              Filter By Journal Category:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-xs transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#252720] text-[#F5F1E9] font-medium'
                      : 'bg-[#F5F1E9] text-[#77756D] hover:text-[#252720] border border-[#DCD4C6]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED LEAD ARTICLE (WHEN NO SEARCH FILTER ACTIVE) */}
      {!searchQuery && selectedCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#DCD4C6] pb-4 mb-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88C5A] font-semibold block">
              Featured Long-Form Essay
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EBE5DA]/40 border border-[#DCD4C6] rounded-xs p-6 sm:p-10">
            <div className="lg:col-span-7 relative aspect-16/10 overflow-hidden rounded-xs bg-stone-200">
              <img
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute top-3 left-3 bg-[#252720]/80 text-[#F5F1E9] text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-xs backdrop-blur-xs">
                {featuredArticle.category}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-[10px] text-[#77756D] font-mono">
                <Clock className="w-3 h-3 text-[#A88C5A]" />
                <span>{featuredArticle.readTime}</span>
                <span>•</span>
                <span>By {featuredArticle.author.name}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#252720] leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#77756D] font-light leading-relaxed">
                {featuredArticle.summary}
              </p>
              <div className="pt-2">
                <Link
                  href={`/journal/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 bg-[#252720] text-[#F5F1E9] hover:bg-[#34372C] text-xs uppercase tracking-wider font-medium px-5 py-2.5 rounded-xs transition shadow-sm"
                >
                  <span>Read Lead Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#DCD4C6]">
          <p className="text-xs text-[#77756D] font-mono">
            Showing {filteredArticles.length} Journal Articles
          </p>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="py-24 text-center space-y-3">
            <h3 className="text-xl font-serif text-[#252720]">No articles found</h3>
            <p className="text-xs text-[#77756D]">Try searching for other keywords or clear category filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-[#F5F1E9] border border-[#DCD4C6] rounded-xs overflow-hidden flex flex-col justify-between group hover:shadow-lg transition"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#252720]/80 text-[#F5F1E9] text-[10px] font-mono px-2 py-0.5 rounded-xs backdrop-blur-xs">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#77756D] font-mono">
                      <Clock className="w-3 h-3 text-[#A88C5A]" />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.publishedDate}</span>
                    </div>
                    <h3 className="text-xl font-serif font-medium text-[#252720] group-hover:text-[#6C7357] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#77756D] font-light line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DCD4C6]/60 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#77756D] font-light">
                      By {article.author.name}
                    </span>
                    <Link
                      href={`/journal/${article.slug}`}
                      className="inline-flex items-center gap-1 uppercase tracking-wider font-medium text-[#252720] group-hover:text-[#6C7357] transition"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
