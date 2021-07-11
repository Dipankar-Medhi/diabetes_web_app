function Navbar() {
    return (
        <>
            <header>
                <div
                    class="  sm:mx-0 flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray-200"
                >
                    <a
                        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    >
                        <img src="../assets/img/logo.png" alt="" class="w-8" />
                        <span class="ml-3 text-xl">Tailwind-Elements</span>
                    </a>
                    <nav
                        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
                    >
                        <a class="mr-5 hover:text-gray-900">First Link</a>
                        <a class="mr-5 hover:text-gray-900">Second Link</a>
                        <a class="mr-5 hover:text-gray-900">Third Link</a>
                        <a class="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                </div>
            </header>
        </>

    )
}

export default Navbar
