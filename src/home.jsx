import Card from "./components/card";

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
            <section id="gallery" class="flex justify-center items-center bg-gray-950 py-16 px-6 text-stone-200 h-screen">
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-3xl font-bold mb-8 text-center">Featured Art</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card
                            title="The Silent Nurse"
                            image="/img/the-silent-nurse/8 x 10.jpg"
                            description='Inspired by the haunting presence of The Nurse from Dead by Daylight, "The Silent Nurse" is a gothic horror art piece that captures the eerie stillness and tragic elegance of one of the game’s most iconic killers. This stained glass-style silhouette evokes the oppressive atmosphere of haunted hospitals and cursed cathedrals — a perfect tribute to the silent dread she brings to every trial.' 
                            price="6.00"
                        />
                        <Card 
                            title="The Samurai" 
                            image="/img/the-samurai-oni/8 x 10.jpg" 
                            description="This digital art print features a fearsome samurai warrior with a stained-glass glow and a haunting presence — inspired by Dead by Daylight’s Oni and classic horror-meets-feudal design. It’s a bold, atmospheric piece that combines tradition with terror. Perfect for horror game fans, lovers of Japanese mythology, or anyone wanting a statement piece that blends beauty with dread."
                            price={"6.00"}
                        />
                        <Card 
                            title="Dark Knight Silhouette"
                            image="/img/dark-knight-silhouette/8 x 10.jpg"
                            description="A dark and mysterious lair inhabited by a fearsome dragon."
                            price="6.00"
                        />
                    </div>
                </div>
            </section>

        </div>

    );
}

export default Home;