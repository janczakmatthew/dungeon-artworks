import './App.css';
import Header from './header';
import Footer from './footer'; // Assuming you have a Footer component
import Home from './home'; // Importing the Home component

function App() {
  return (
    <div>
      <Header />
      {/* Other components and content go here */}
      <main className="bg-gray-950 text-white min-h-screen">
        <Home />
      </main>
      <Footer/>
    </div>

  );
}

export default App;
