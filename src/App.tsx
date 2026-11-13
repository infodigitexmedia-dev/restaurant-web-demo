import { useEffect, useState } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommunityChannel, CommunityModal } from './components/CommunityModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { OffersPage } from './pages/OffersPage';
import { VipClubPage } from './pages/VipClubPage';
import { GuestExperiencePage } from './pages/GuestExperiencePage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BookTablePage } from './pages/BookTablePage';
import { ContactPage } from './pages/ContactPage';

const VALID_PAGES: PageId[] = [
  'home',
  'menu',
  'offers',
  'guest-experience',
  'vip-club',
  'reviews',
  'book-table',
  'contact',
];

function getInitialPageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPageFromHash);
  const [initialMenuCategory, setInitialMenuCategory] = useState<string>('All');
  const [communityModal, setCommunityModal] = useState<CommunityChannel>(null);
  const [stampsCompleted, setStampsCompleted] = useState<number[]>([1, 2]);

  useEffect(() => {
    const handleHashChange = () => {
      const next = getInitialPageFromHash();
      setCurrentPage(next);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, menuCategory?: string) => {
    if (menuCategory) {
      setInitialMenuCategory(menuCategory);
    } else if (page === 'menu') {
      setInitialMenuCategory('All');
    }
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleStamp = (stampNumber: number) => {
    setStampsCompleted((prev) =>
      prev.includes(stampNumber)
        ? prev.filter((n) => n !== stampNumber)
        : [...prev, stampNumber].sort((a, b) => a - b)
    );
  };

  const handleResetStamps = () => {
    setStampsCompleted([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EDE3] text-[#191512]">
      <Navbar currentPage={currentPage} onNavigate={(page) => handleNavigate(page)} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenCommunity={setCommunityModal}
            stampsCompleted={stampsCompleted}
            onToggleStamp={handleToggleStamp}
            onResetStamps={handleResetStamps}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            initialCategory={initialMenuCategory}
            onNavigate={(page) => handleNavigate(page)}
          />
        )}

        {currentPage === 'offers' && (
          <OffersPage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'vip-club' && (
          <VipClubPage
            onNavigate={(page) => handleNavigate(page)}
            onOpenCommunity={setCommunityModal}
            stampsCompleted={stampsCompleted}
            onToggleStamp={handleToggleStamp}
            onResetStamps={handleResetStamps}
          />
        )}

        {currentPage === 'guest-experience' && (
          <GuestExperiencePage onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage onOpenCommunity={setCommunityModal} />
        )}

        {currentPage === 'book-table' && <BookTablePage />}

        {currentPage === 'contact' && (
          <ContactPage onOpenCommunity={setCommunityModal} />
        )}
      </main>

      <Footer
        onNavigate={(page) => handleNavigate(page)}
        onOpenCommunity={setCommunityModal}
      />

      <CommunityModal
        channel={communityModal}
        onClose={() => setCommunityModal(null)}
      />
    </div>
  );
}
