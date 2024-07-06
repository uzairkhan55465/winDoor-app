import Logo from "../../assets/images/Logo.png"
const Footer = () => {
    return (


        <footer class="bg-[#2E2E2E] ">
            <div class="mx-auto w-full max-w-screen-xl ">
                <div class="grid grid-cols-2 gap-8 px-8 py-6 lg:py-8 md:grid-cols-4  border-b-2 border-[#FFFFFF] ">
                    <div>
                        <h2 class="mb-6 text-sm font-bold uppercase text-white">Company</h2>
                        <ul class="text-white  font-[500]">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">About</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Careers</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Brand Center</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-bold uppercase text-white">Help center</h2>
                        <ul class="mb-6 text-sm font-bold uppercase text-white">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Discord Server</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Twitter</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Facebook</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-bold uppercase text-white">Legal</h2>
                        <ul class="mb-6 text-sm font-bold uppercase text-white">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Licensing</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-bold text-white">Download</h2>
                        <ul class="mb-6 text-sm font-bold uppercase text-white">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">iOS</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Android</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Windows</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">MacOS</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="px-116 py-6 bg-[#2E2E2E]  md:flex md:items-center md:justify-between">
                    <img src={Logo} alt="" />
                    <span class="text-sm text-white ">© 2023 <a href="/">WinDoor</a>. All Rights Reserved.
                    </span>

                </div>
            </div>
        </footer>

    )
}
export default Footer