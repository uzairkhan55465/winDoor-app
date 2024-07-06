import React from 'react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Slide1 from '../../assets/images/slide1.jpg';
import Slide2 from '../../assets/images/slide2.jpg';
import Slide3 from '../../assets/images/slide3.jpg';
import Windows from "../../assets/images/windows.png"
import Doors from "../../assets/images/doors.png"
import Construction from "../../assets/images/construction.jpg"
import Company from "../../assets/images/company.jpg"
import Tick from "../../assets/images/tick.png"
import Custom from "../../assets/images/custom.jpg"
import Bricks from "../../assets/images/bricks.jpg"
import Comma from "../../assets/images/comma.svg"
import T1 from "../../assets/images/t1.svg"
import T2 from "../../assets/images/t2.svg"
import T3 from "../../assets/images/t3.svg"
import Logo from "../../assets/images/Logo.png"
const HomePage = () => {
    const [selectedTab, setSelectedTab] = useState('windows');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');

        const handleClick = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            setMenuOpen(false);
        };

        links.forEach((link) => {
            link.addEventListener('click', handleClick);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleClick);
            });
        };
    }, []);
    const Herosettings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1, // Default to show 3 slides
        responsive: [
            {
                breakpoint: 1024, // lg and xl screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: '60px', // Adjust as needed
                }
            },
            {
                breakpoint: 768, // md screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: '40px', // Adjust as needed
                }
            },
            {
                breakpoint: 600, // sm screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 480, // xs screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                }
            }
        ]
    };
    const Discoversettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const Testimonialssettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default to show 3 slides on lg and xl
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // lg and xl screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1023, // lg and xl screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // md screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600, // sm screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480, // xs screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    

    const testimonials = [
        {
            image: Comma,
            content: 'WinDor is an exceptional company that delivers outstanding results. Their expertise and creativity make them a valuable partner. Highly recommended!',
            image2: T1,

        },
        {
            image: Comma,
            content: 'The team at WinDor went above and beyond with our expectations.',
            image2: T2
        },
        {
            image: Comma,
            content: 'WinDor is an absolute game changer! Their products are off the charts. I am blown away by their creativity and strategic thinking. Highly recommend their services!',
            image2: T3
        }
    ];
    const Discoverimages = [
        { src: Slide1, alt: 'Slide 1', caption: '' },
        { src: Slide2, alt: 'Slide 2', caption: '' },
        { src: Slide3, alt: 'Slide 3', caption: '' },
    ];


    const Heroimages = [
        { src: Slide1, alt: 'Slide 1' },
        { src: Slide2, alt: 'Slide 2' },
        { src: Slide3, alt: 'Slide 3' },
    ];
    const products = {
        windows: [
            { name: 'Casement Windows', type: 'Double glazed', price: '$55' },
            { name: 'Sliding Windows', type: 'Double glazed', price: '$55' },
            { name: 'Awning Windows', type: 'Double glazed', price: '$55' },
            { name: 'Bay Windows', type: 'Double glazed', price: '$55' },
        ],
        doors: [
            { name: 'Sliding Doors', type: 'Double glazed', price: '$55' },
            { name: 'French Doors', type: 'Double glazed', price: '$55' },
        ],
    };

    const ProductCard = ({ name, type, price }) => (
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <div className="bg-gray-200 w-full h-40 mb-4"></div>
            <h3 className="text-lg font-semibold mb-1">{name}</h3>
            <p className="text-gray-500 mb-2">{type}</p>
            <p className="text-red-500 text-xl font-bold mb-4">{price}</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Add to Cart</button>
        </div>
    );

    return (
        <>
            {/* header */}
            <nav className="w-full border-b border-[#BDBCBC]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="Logo" />
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="flex">
                            <a href="#products">
                                <button
                                    type="button"
                                    className="text-[#F30000] bg-transparent focus:outline-none font-medium rounded-sm text-lg px-7 py-1 text-center border-2 border-[#F30000]"
                                >
                                    Buy
                                </button>
                            </a>

                        </div>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={menuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 ps-2`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col px-4 items-center font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="#home"
                                    className="block pt-2 px-1 text-[#858484] hover:text-[#111111] hover:border-b-4 border-b-4 border-transparent hover:border-[#F30000] font-[700]"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#products"
                                    className="block pt-2 px-1 text-[#858484] hover:text-[#111111] hover:border-b-4 border-b-4 border-transparent hover:border-[#F30000] font-[700]"
                                >
                                    Windows
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#products"
                                    className="block pt-2 px-1 text-[#858484] hover:text-[#111111] hover:border-b-4 border-b-4 border-transparent hover:border-[#F30000] font-[700]"
                                >
                                    Doors
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#products"
                                    className="block pt-2 px-1 text-[#858484] hover:text-[#111111] hover:border-b-4 border-b-4 border-transparent hover:border-[#F30000] font-[700]"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="block pt-2 px-1 text-[#858484] hover:text-[#111111] hover:border-b-4 border-b-4 border-transparent hover:border-[#F30000] font-[700]"
                                >
                                    Services
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* heroSection */}
            <div className="relative max-w-screen-xl mx-auto my-8 overflow-hidden" id='home'>
                <Slider {...Herosettings}>
                    {Heroimages.map((image, index) => (
                        <div key={index} className="relative px-2">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-[57vh] md:h-[100vh] rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h1 className="text-white text-[50px] md:text-[120px] font-bold">WinDoor</h1>
                                <p className="text-white px-6 text-center text-[15px] sm:text-[16px] md:text-[19px] pb-8 font-medium">
                                    We deliver Windows and Doors throughout Canada
                                </p>
                                <div className="relative bg-white rounded-full shadow-md">
                                    <div className="absolute inset-y-0 left-0 flex justify-center items-center pl-[50px] md:pl-[80px] pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-black"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block w-[200px] md:w-[270px] p-4 pl-[80px] md:pl-[110px] text-sm text-black border border-white focus:ring-white focus:border-white dark:border-white dark:placeholder-black dark:text-black dark:focus:ring-black placeholder-black font-semibold text-[17px] dark:focus:border-white bg-white rounded-full shadow-md"
                                        placeholder="Search"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* categoryItems */}
            <div className='w-full border-2 border-[#00000040] shadow-md flex justify-center mt-16  py-3 mb-6'>
                <div className='me-16'>
                    <img src={Windows} alt='' className='w-[80px] h-[80px]' />
                    <h2 className='font-bold text-lg'>Windows</h2>
                </div>
                <div className='ms-16'>
                    <img src={Doors} alt='' className='w-[80px] h-[80px]' />
                    <h2 className='font-bold text-lg ps-4'>Doors</h2>
                </div>
            </div>
            {/* exploreNoewSection */}
            <div className="container mx-auto px-12 py-0 md:py-8 mt-2 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center lg:pr-8 ">
                        <h2 className="text-3xl lg:text-[42px] leading-[50px] text-[#3A3A3A] font-[700] mb-4">
                            Discover the Finest Canadian Windows and Doors
                        </h2>
                        <p className="text-base font-[500] lg:text-[16px] text-[#616161] mb-6">
                            Upgrade your home with our high-quality windows and doors, designed to withstand the Canadian climate and enhance your living space.
                        </p>
                        <div className='flex'>
                            <a
                                href="#products"
                                className="flex inline-block bg-red-600 text-white px-9 py-3  text-sm lg:text-base"
                            >
                                Explore Now
                            </a>
                        </div>

                    </div>
                    <div className="relative max-w-screen-xl mx-auto my-8 w-full overflow-hidden md:w-[95%]">
                        <Slider {...Discoversettings}>
                            {Discoverimages.map((image, index) => (
                                <div key={index} className="relative px-3">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full  h-[40vh] md:h-[60vh] object-cover rounded-lg shadow-lg"
                                    />

                                    {image.caption && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <h3 className="text-white text-lg lg:text-2xl font-bold">{image.caption}</h3>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            {/* discoverSection */}
            <div className="flex flex-col md:flex-row justify-between py-8 px-3 md:px-14 ">
                <div className='w-full md:w-[50%] px-10'>
                    <h1 className="text-[35px] md:text-[55px] md:leading-[70px] text-[#000000] font-[700] mb-4">
                        Discover the Finest Canadian Windows and Doors
                    </h1>

                </div>
                <div className="w-full md:w-[50%] px-10 pt-5">
                    <p className="text-[#312E2E] text-[20px] font-[500] ">
                        Upgrade your home with our high-quality windows and doors, designed to
                        withstand the Canadian climate and enhance your living space.
                    </p>
                    <div className='flex pt-8'>
                    <a href="#products">
                        <button className="bg-red-600 text-white font-bold py-2 px-7 rounded me-7">
                            Explore
                        </button>
                        </a>
                        <a href="#products">
                        <button className="bg-gray-100 text-gray-700 font-bold py-2 px-5 rounded border border-[#000000]">
                            Learn More
                        </button>
                        </a>
                    </div>

                </div>
            </div>
            {/* transformSection */}
            <div className='px-3 md:px-14 mt-8'>
                <img src={Construction} alt='' className='w-full h-[50vh] md:h-[100vh] object-fit' />
                <div className='py-5 flex flex-col items-center w-full'>
                    <h1 className='text-[#000000] text-center text-[35px] md:text-[55px] font-[700]  w-full md:w-[60%]'>Transform your home with WinDoor's premium windows and doors</h1>
                    <p className='text-[#000000] text-center text-[20px] font-[400] w-[70%] py-4'>Experience the perfect blend of style, durability, and energy efficiency with our wide range of
                        windows and doors.</p>
                </div>
                <div className='flex justify-center pt-2 pb-8'>
                <a href="#products">
                    <button className="bg-red-600 text-white font-bold py-2 px-7 rounded me-7">
                        Explore
                    </button>
                    </a>
                    <a href="#products">
                    <button className="bg-gray-100 text-gray-700 font-bold py-2 px-5 rounded border border-[#000000]">
                        Learn More
                    </button>
                    </a>
                </div>
            </div>
            {/* experienceSection */}
            <div className="flex flex-col md:flex-row items-center justify-between py-8 px-3 md:px-16 mt-5">
                <div className="w-full md:w-[55%]">
                    <h1 className="text-[35px] md:text-[55px] font-[700] mb-4 md:leading-[70px]">
                        <span className="text-red-600">Experience the Best</span> in Canadian Craftsmanship
                    </h1>
                    <p className="text-[20px] text-[#000000] font-[400] mb-4">
                        At WinDoor, we take pride in providing high-quality windows and doors that are built to last. Our products are crafted with precision and attention to detail, ensuring that every piece meets our rigorous standards of excellence.
                    </p>
                    <ul className="mb-4 mt-6">
                        <li className="flex items-start mb-2 text-[20px] text-[#000000] font-[400]">
                            <img src={Tick} alt='' className='w-7 h-7 me-3' />
                            Energy Efficient Designs
                        </li>
                        <li className="flex items-start mb-2 text-[20px] text-[#000000] font-[400]">
                            <img src={Tick} alt='' className='w-7 h-7 me-3' />
                            Enhance Your Home's Comfort and Efficiency
                        </li>
                        <li className="flex items-start mb-2 text-[20px] text-[#000000] font-[400]">
                            <img src={Tick} alt='' className='w-7 h-7 me-3' />
                            Save on Energy Bills with WinDoor Products
                        </li>
                    </ul>
                    <div className="flex space-x-4 mt-12">
                    <a href="#products">
                        <button className="bg-black text-white font-bold py-2 px-4 rounded">
                            Learn More
                        </button>
                        </a>
                        <a href="#products">
                        <button className="bg-white text-red-600 font-bold py-2 px-4 rounded border border-red-600 flex items-center">
                            Get Started
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        </a>
                    </div>
                </div>
                <div className="w-full mt-6 md:mt-0 md:w-[45%]">
                    <img src={Company} alt="Windows and doors" className="w-full h-auto rounded-md shadow-md" />
                </div>
            </div>
            {/* customizationSection */}
            <div className="flex flex-col md:flex-row justify-between py-8 px-3  md:px-12 ">
                <div className="w-full md:w-[50%] me-0 md:me-8">
                    <img src={Custom} alt="" className="w-full h-[54vh] md:h-[84vh] rounded-md shadow-md " />
                </div>
                <div className="w-full  md:w-[50%] mt-8 md:mt-0 mw-8">
                    <div className="border-l-4 border-black pl-4 mb-9">
                        <h2 className="text-[40px] font-[700] ">Customization Options</h2>
                        <p className="text-[#000000] text-[18px] font-[300]">
                            Choose from a wide range of customization options to create windows and doors that perfectly suit your style and preferences.
                        </p>
                    </div>
                    <div className=" pl-4 mb-9">
                        <h2 className="text-[40px] font-[700] ">Free Consultation</h2>
                        <p className="text-[#000000] text-[18px] font-[300]">
                            Get expert advice and guidance through a free consultation to help you make the best choices for your windows and doors.
                        </p>
                    </div>
                    <div className=" pl-4">
                        <h2 className="text-[40px] font-[700] ">Fast Delivery</h2>
                        <p className="text-[#000000] text-[18px] font-[300]">
                            Experience quick and efficient delivery of your customized windows and doors, ensuring a seamless installation process.
                        </p>
                    </div>
                </div>
            </div>
            {/* hightQualitySection */}
            <div className="flex flex-col md:flex-row items-center justify-between py-8 px-3 md:px-16 mt-5">
                <div className="w-full md:w-[55%] ">
                    <h1 className="text-[35px] md:text-[55px] font-[700] mb-4  md:leading-[70px]">
                        <span className="text-red-600">Discover</span> Our Wide Range of   <span className="text-red-600"> High-Quality Doors</span>

                    </h1>
                    <p className="text-[20px] text-[#000000] font-[400] mb-4">
                        At WinDoor, we offer a diverse selection of doors to suit any style and budget. From elegant entry doors to functional interior doors, we have the perfect solution for your home.
                    </p>
                    <div className="flex mb-4 mt-12">
                        <div className='me-3'>
                            <img src={Tick} alt='' className='w-7 h-7 me-3' />
                            <h1 className='text-[20px] font-[600]'>Energy Efficient Designs</h1>
                            <p>Make a lasting impression with our beautifully crafted entry doors that combine style and security.</p>
                        </div>


                        <div className='mx-6'>
                            <img src={Tick} alt='' className='w-7 h-7 me-3' />
                            <h1 className='text-[20px] font-[600]'>Interior Doors</h1>
                            <p className='text-[15px] font-[400]'>Enhance the aesthetics and functionality of your space with our wide range of interior doors.</p>
                        </div>

                    </div>

                </div>
                <div className="w-full md:w-[45%]  ms-0 md:ms-4">
                    <img src={Bricks} alt="" className="w-full h-auto rounded-lg shadow-md" />
                </div>
            </div>
            {/* testimonialSection */}
            <div className="container mx-auto py-8 overflow-hidden">
            <h1 className='text-[35px] md:text-[48px] font-[600] text-center pb-4'>TESTIMONIALS</h1>
            <Slider {...Testimonialssettings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-[320px] flex flex-col justify-center">
                            <div className="flex items-center mb-4">
                                <img src={testimonial.image} alt="Testimonial" className="w-12 h-12 rounded-full mr-4" />
                            </div>
                            <p className="text-gray-700 text-center">{testimonial.content}</p>
                            <div className='flex justify-between items-center mt-6'>
                                <img src={testimonial.image2} alt='' />
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
            {/* transformSection */}
            <div className='py-10'>
                <h1 className='text-[35px] md:text-[55px] font-[700] text-center'>Transform Your Home with WinDoor</h1>
                <p className='text-[20px] font-[400] text-center'>Discover our wide range of high-quality windows and doors.</p>
                <div className='flex justify-center w-full mt-8'>
                <a href="#products">
                    <button className="bg-red-600 text-white font-bold py-3 px-7 rounded me-7">
                        Schedule
                    </button>
                    </a>
                    <a href="#products">
                    <button className=" text-[#F30000] font-bold py-2 px-6 bg-white rounded border border-[#F30000]">
                        shop
                    </button>
</a>
                </div>
            </div>
              {/* productsSection */}
          <div className=" mx-auto py-12 px-3 md:px-16" id='products'>
                <h1 className="text-3xl md:text-[55px] font-semibold text-center mb-2">Products</h1>
                <p className="text-center text-gray-500 mb-8">Explore our wide range of windows and doors</p>
                <div className="flex justify-center mb-8">
                    <button
                        className={`px-4 py-2 mx-2 ${selectedTab === 'windows' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg`}
                        onClick={() => setSelectedTab('windows')}
                    >
                        Windows
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 ${selectedTab === 'doors' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg`}
                        onClick={() => setSelectedTab('doors')}
                    >
                        Doors
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {products[selectedTab].map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div> 
            {/* newsletter */}
            <div className="bg-[#2E2E2E]  py-14 px-3 md:px-16 ">
                <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 ">
                    <div className="flex  justify-center lg:justify-start">
                        <h2 className="text-[32px] font-semibold text-white">
                            Get Exclusive Offers
                        </h2>
                    </div>
                    <div>
                        <h3 className="text-[32px] text-center md:text-start font-bold text-white mb-4">
                            Sign up for our newsletter
                        </h3>
                        <p className="text-[20px] text-center md:text-start font-[500] text-white mb-6">
                            Subscribe to get the latest design news, articles, resources, and inspiration.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                className="p-3 w-full rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 12h14M12 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default HomePage;
