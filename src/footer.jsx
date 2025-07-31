function Footer() {
    return (
<footer>
    <div className="bg-gray-800 text-white p-4">
        <div className="container max-w-[1440px] mx-auto flex justify-between items-center">
            <p className="text-sm">© 2023 Dungeon Artworks. All rights reserved.</p>
            <nav className="space-x-4">         
                <a href="#privacy" className="hover:underline">Privacy Policy</a>
                <a href="#terms" className="hover:underline">Terms of Service</a>
                <a href="#contact" className="hover:underline">Contact Us</a>
            </nav>
        </div>
    </div>
</footer>
    );
}

export default Footer;