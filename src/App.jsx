import './App.css';
import Header from './header';

function App() {
  return (
    <div>
      <Header />
      {/* Other components and content go here */}
      <main className="bg-gray-950 text-white min-h-screen">
        <div className='max-w-[1440px] flex justify-center items-center h-screen mx-auto'>
          <div>
            <h1 className='text-5xl text-center font-bold py-8 px-4'>Welcome to Dungeon Artworks</h1>
            <p className='text-center text-xl'>Explore unique fantasy artwork designed for tabletop adventures.</p>
          </div>
        </div>
      </main>
    </div>

  );
}

export default App;
