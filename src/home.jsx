//Component imports
import GallerySwiper from "./components/gallery-swiper";
import HeroSection from "./components/hero-section";

//Data imports
import artworks from './data/artworks.json'; // Importing the artworks data
import categories from './data/categories.json'; // Importing categories data

function Home() {
    return (
        <div>
            <div className='max-w-[1440px] flex justify-center items-center h-screen -mt-[130px] mx-auto'>
                <div className="bg-[url('homepage-hero.jpg')] bg-cover bg-center w-full h-full flex flex-col justify-center items-center text-white p-8">
                    <div className='max-w-xl bg-black/50 text-center p-10 rounded-lg shadow-lg'>
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
                textColor='' />

            <HeroSection
                bgColor=''
                textColor=''
                customStyles='h-screen' />

            <GallerySwiper
                galleryTitle='Newest'
                galleryData={artworks}
                bgColor='bg-slate-900'
                textColor='text-white'
                customStyles='' />


        </div>

    );
}

export default Home;