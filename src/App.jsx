import './App.css';
import Header from './header';
import Footer from './footer'; // Assuming you have a Footer component
import { Outlet } from 'react-router-dom';

import ScrollToTop from './components/scroll-to-top'; // Import the ScrollToTop component

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      {/* Other components and content go here */}
      <main className="bg-gray-950 text-white min-h-screen pt-[130px] ">
        <Outlet />
      </main>
      <Footer/>
    </div>

  );
}

export default App;
