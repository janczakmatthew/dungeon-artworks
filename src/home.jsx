//Component imports
import GallerySwiper from "./components/gallery-swiper";
import HeroSection from "./components/hero-section";

//Image imports 
import heroImage from './assets/other/hero-image.png';

//Data imports
import artworks from './data/artworks.json'; // Importing the artworks data
import categories from './data/categories.json'; // Importing categories data

function Home() {
    return (
        <div>
            <div className='flex justify-center items-center h-screen -mt-[130px] mx-auto'>
                <div className="bg-cover bg-center w-full h-full flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${heroImage})` }}>
                    <div className='max-w-xl bg-black/50 p-10 text-center rounded-lg shadow-lg'>
                        <h1 className='text-5xl text-center font-bold pb-7'>Welcome to <br/> Dungeon Artworks</h1>
                        <p className='text-center text-xl'>Explore unique fantasy artwork from <br/> your favorite board game or video game.</p>
                    </div>
                </div>
            </div>
            <GallerySwiper
                galleryTitle='Shop By Category'
                galleryDescription='Explore our curated collections of fantasy and horror-themed artworks.'
                galleryData={categories}
                bgColor='bg-slate-900'
                hideBtn='false'
                textColor='' />

            <HeroSection
                bgColor='bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 animate-gradient-x'
                textColor=''
                customStyles='h-screen' />

            <GallerySwiper
                galleryTitle='Newest'
                galleryData={artworks}
                bgColor='bg-slate-900'
                textColor='text-white'
                hideBtn={true}
                customStyles='' />


        </div>

    );
}

export default Home;