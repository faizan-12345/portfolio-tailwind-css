import React from 'react';
import Image from 'next/image';
import f1 from "../Assests/f1.jpg";
import f2 from "../Assests/f2.jpg";
import f6 from "../Assests/f6.jpg";
import github1 from "../Assests/github1.jpg";
import Link from 'next/link';

const Page = () => {
    return (
        <footer className="bg-gray-800 text-white py-20 px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Portfolio Section */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-4 text-yellow-500">Portfolio</h3>
                    <p className="text-sm mb-4">
                        Thank you for visiting my personal portfolio website. Connect with me over socials.
                    </p>
                    <div className="text-sm mb-4">
                        <p>Phone: +92 3XXXXXXX</p>
                        <p>Email: abc@gmail.com</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
                            <Image src={f1} alt="Facebook" />
                        </a>
                        <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
                            <Image src={f2} alt="Facebook" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
                            <Image src={f6} alt="LinkedIn" />
                        </a>
                        <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white overflow-hidden transform transition-transform duration-300 hover:scale-110">
                            <Image src={github1} alt="GitHub" />
                        </a>
                    </div>
                </div>

                {/* Useful Links Section */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-4 text-yellow-500">Useful Links</h3>
                    <ul>
                        <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
                        <li><Link href="/About" className="hover:text-yellow-500">About</Link></li>
                        <li><Link href="/Education" className="hover:text-yellow-500">Education</Link></li>
                        <li className="hover:text-yellow-500">Services</li>
                        <li className="hover:text-yellow-500">Terms of services</li>
                        <li className="hover:text-yellow-500">Privacy policy</li>
                    </ul>
                </div>

                {/* Our Services Section */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-4 text-yellow-500">Our Services</h3>
                    <ul>
                        <li className="mb-2">Web Design</li>
                        <li className="mb-2">Web Development</li>
                        <li className="mb-2">Product Management</li>
                        <li className="mb-2">Marketing</li>
                        <li className="mb-2">Graphic Design</li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-4 text-yellow-500">Our Newsletter</h3>
                    <p className="text-sm mb-4">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="text-sm mb-6">Lorem, ipsum dolor.</p>
                    <button className="bg-yellow-500 text-white py-3 px-6 rounded-full font-bold transition-colors duration-300 hover:bg-yellow-600">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="text-center mt-16 text-sm text-gray-400">
                <p>&copy; 2025 Your Portfolio. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Page;
