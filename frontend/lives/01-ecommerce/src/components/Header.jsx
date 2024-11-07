function Header() {
    return (
        <header className="flex w-full justify-between py-8 px-4 max-w-screen-xl mx-auto">
            <img src="#" alt="Logo"/>

            <nav>
                <ul className="flex gap-2">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/store">Loja</a>
                    </li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <ul className="flex gap-2 md:gap-4">
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
            </ul>
        </header>
    )
}

export default Header;