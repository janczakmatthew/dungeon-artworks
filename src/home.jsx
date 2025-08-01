import GallerySwiper from "./components/gallery-swiper";

function Home() {
    return (
        <div>
            <div className='max-w-[1440px] flex justify-center items-center h-screen mx-auto'>
                <div>
                    <h1 className='text-5xl text-center font-bold py-8 px-4'>Welcome to Dungeon Artworks</h1>
                    <p className='text-center text-xl'>Explore unique fantasy artwork designed for tabletop adventures.</p>
                </div>
            </div>
            <section class="flex justify-center items-center bg-slate-900 text-stone-200 h-screen py-16 px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl font-bold mb-4">About Dungeon Artworks</h2>
                    <p class="text-gray-400 text-lg">We specialize in high-quality fantasy and dark-themed digital artwork tailored for games, books, and storytelling projects. Whether you're a writer, developer, or world-builder — we bring your vision to life.</p>
                </div>
            </section>

            <GallerySwiper galleryTitle='Newest Artwork' />


        </div>

    );
}

export default Home;