import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StructuredData, { organizationSchema, websiteSchema } from '@/components/shared/StructuredData';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <StructuredData schemas={[organizationSchema, websiteSchema]} />
      <Navbar />
      <main className="flex-grow pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
