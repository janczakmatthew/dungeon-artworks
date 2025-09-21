export default function HeroSection({bgColor, textColor, customStyles}) {
    return (
        <section className={`flex flex-col justify-center items-center ${bgColor} ${textColor} py-16 px-6 ` + customStyles}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">About Dungeon Artworks</h2>
                <p className="text-gray-400 text-lg">
                    We specialize in high-quality fantasy and dark-themed digital artwork tailored for games, books, and storytelling projects. Whether you're a writer, developer, or world-builder — we bring your vision to life.
                </p>
            </div>
        </section>
    );
}