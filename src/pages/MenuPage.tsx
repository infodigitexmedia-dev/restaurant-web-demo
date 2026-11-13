import React, { useEffect, useState } from 'react';
import { Calendar, Leaf, UtensilsCrossed } from 'lucide-react';
import { MenuCategory, PageId } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';
import { SafeImage } from '../components/SafeImage';

interface MenuPageProps {
  initialCategory?: string;
  onNavigate: (page: PageId) => void;
}

const CATEGORIES: MenuCategory[] = [
  'All',
  'Starters',
  'Burgers',
  'Pizza',
  'Pasta',
  'Main Course',
  'Beverages',
  'Coffee',
  'Desserts',
];

export const MenuPage: React.FC<MenuPageProps> = ({ initialCategory, onNavigate }) => {
  const validInitial = CATEGORIES.includes(initialCategory as MenuCategory)
    ? (initialCategory as MenuCategory)
    : 'All';

  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>(validInitial);
  const [dietFilter, setDietFilter] = useState<'All' | 'Vegetarian' | 'Non-Vegetarian'>('All');

  useEffect(() => {
    if (initialCategory && CATEGORIES.includes(initialCategory as MenuCategory)) {
      setSelectedCategory(initialCategory as MenuCategory);
    }
  }, [initialCategory]);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesDiet = dietFilter === 'All' || item.dietaryType === dietFilter;
    return matchesCat && matchesDiet;
  });

  const groupedCategories =
    selectedCategory === 'All'
      ? CATEGORIES.filter((c) => c !== 'All')
      : [selectedCategory];

  return (
    <div className="bg-[#F5EDE3] min-h-screen">
      {/* Editorial Dark Header */}
      <section className="bg-[#211710] text-[#F5EDE3] py-10 sm:py-14 lg:py-16 border-b border-[#E8D9C8]/12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A16D] uppercase mb-2.5">
              DIGITAL DINING MENU · DEMO SHOWCASE
            </p>
            <h1 className="font-serif text-page-fluid font-semibold text-[#FBF7F1] text-balance mb-3">
              Crafted for Every Palate
            </h1>
            <p className="text-sm sm:text-base text-[#E8D9C8]/85 max-w-2xl leading-relaxed">
              Browse our curated bistro dishes, wood-fired classics, specialty coffees, and desserts. Prices shown are illustrative demo figures for browsing only.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('book-table')}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#F5EDE3] text-[#211710] text-sm font-semibold hover:bg-[#FBF7F1] transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Reserve a Table</span>
          </button>
        </div>
      </section>

      {/* Filter Controls Bar (Non-sticky on mobile to preserve screen real estate; sticky on md+) */}
      <section className="bg-[#FBF7F1] border-b border-[#E8D9C8] md:sticky md:top-0 z-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 space-y-3.5 min-w-0">
          {/* Responsive Wrapping Category Chips */}
          <div
            className="menu-categories"
            role="tablist"
            aria-label="Menu categories"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-[#211710] text-[#FBF7F1]'
                      : 'bg-[#F5EDE3] text-[#76563F] hover:text-[#211710] hover:bg-[#E8D9C8]/70'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Dietary Filter & Dish Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto min-w-0 max-w-full">
              <span className="text-xs font-medium text-[#76563F] mr-1">Dietary:</span>
              {(['All', 'Vegetarian', 'Non-Vegetarian'] as const).map((diet) => (
                <button
                  key={diet}
                  type="button"
                  onClick={() => setDietFilter(diet)}
                  className={`flex-[0_1_auto] max-w-full min-h-[40px] px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                    dietFilter === diet
                      ? 'bg-[#E8D9C8] text-[#211710] border border-[#C5A16D]/50'
                      : 'bg-[#F5EDE3]/70 text-[#76563F] hover:bg-[#F5EDE3]'
                  }`}
                >
                  {diet === 'All' ? 'All Dishes' : diet}
                </button>
              ))}
            </div>

            <p className="text-xs text-[#76563F] tabular-nums">
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'} · Browse-only menu
            </p>
          </div>
        </div>
      </section>

      {/* Organized Menu Sections */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-14">
        {filteredItems.length === 0 ? (
          <div className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] p-8 sm:p-12 text-center">
            <UtensilsCrossed className="w-8 h-8 text-[#76563F] mx-auto mb-3" />
            <h2 className="font-serif text-2xl font-semibold text-[#211710] mb-2">
              No matching dishes in this filter
            </h2>
            <p className="text-sm text-[#76563F] mb-5">
              Try switching dietary preferences or viewing all menu categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setDietFilter('All');
              }}
              className="min-h-[44px] px-5 py-2.5 rounded-lg bg-[#211710] text-[#F5EDE3] text-sm font-semibold hover:bg-[#35251B]"
            >
              Reset Menu Filters
            </button>
          </div>
        ) : (
          groupedCategories.map((categoryName) => {
            const itemsInGroup = filteredItems.filter((item) => item.category === categoryName);
            if (itemsInGroup.length === 0) return null;

            return (
              <div key={categoryName}>
                <div className="flex items-baseline justify-between border-b border-[#E8D9C8] pb-3 mb-6">
                  <h2 className="font-serif text-section-fluid font-semibold text-[#211710]">
                    {categoryName}
                  </h2>
                  <span className="text-xs font-medium text-[#76563F] tabular-nums shrink-0 ml-2">
                    {itemsInGroup.length} {itemsInGroup.length === 1 ? 'Selection' : 'Selections'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {itemsInGroup.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-2xl bg-[#FBF7F1] border border-[#E8D9C8] shadow-xs overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-[#211710]">
                        <SafeImage
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 text-xs text-[#76563F] mb-2">
                            <span className="inline-flex items-center gap-1.5 font-medium">
                              <span
                                className={`w-2 h-2 rounded-xs ${
                                  item.dietaryType === 'Vegetarian'
                                    ? 'bg-[#3A6B46]'
                                    : 'bg-[#8F3A2B]'
                                }`}
                                aria-hidden="true"
                              />
                              {item.dietaryType}
                            </span>
                            <span className="font-semibold text-base text-[#211710] tabular-nums">
                              {item.demoPrice}
                            </span>
                          </div>

                          <h3 className="font-serif text-card-fluid font-semibold text-[#211710] mb-2">
                            {item.name}
                          </h3>

                          <p className="text-sm text-[#76563F] leading-relaxed mb-4">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#E8D9C8]/80 flex flex-wrap items-center justify-between gap-2 text-xs text-[#76563F]">
                          <span className="inline-flex items-center gap-1.5">
                            <Leaf className="w-3.5 h-3.5 text-[#76563F] shrink-0" />
                            <span>{item.dietaryNote}</span>
                          </span>
                          <span className="text-[11px] text-[#76563F]/85">
                            Allergens: {item.allergens.join(', ')}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })
        )}

        {/* Bottom Dining Prompt */}
        <div className="rounded-2xl bg-[#211710] text-[#F5EDE3] p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C5A16D] uppercase mb-1.5">
              DINE WITH US
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FBF7F1] mb-1">
              Have dietary preferences or planning a visit?
            </h2>
            <p className="text-sm text-[#E8D9C8]/80">
              Explore our interactive Guest Experience table guide or request a table reservation demo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('guest-experience')}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-lg border border-[#E8D9C8]/35 text-sm font-semibold text-[#F5EDE3] hover:bg-[#35251B] transition-colors whitespace-nowrap"
            >
              Guest Experience
            </button>
            <button
              type="button"
              onClick={() => onNavigate('book-table')}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-lg bg-[#F5EDE3] text-[#211710] text-sm font-semibold hover:bg-[#FBF7F1] transition-colors whitespace-nowrap"
            >
              Book a Table
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
