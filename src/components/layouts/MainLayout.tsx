import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

function MainLayout() {
  return (
    <div className="wrapper">
      <Header />

      <main className="flex-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
