import React, { useState } from 'react'
import Header from '../Home/Header'
import img1 from '../../assets/images/contact1.png'
import art1 from '../../assets/images/art1.webp'
import art2 from '../../assets/images/art2.webp'
import art3 from '../../assets/images/art3.webp'
import vector from '../../assets/images/Vector.svg'
import post2 from '../../assets/images/Post2.webp'
import post3 from '../../assets/images/Post3.webp'
import icon1 from '../../assets/images/filtration.svg'
import arrow from '../../assets/images/crossArrow.svg'


const features = [
    {
        icon: icon1, // Replace with the path to your icon
        title: "HEPEX™ Zero Leak Airflow System",
        description:
            "Ensures uniform air distribution, prevents leaks with negative pressure chambers, and minimizes vibration transfer.",
    },
    {
        icon: icon1, // Replace with the path to your second icon
        title: "Advanced Filtration Technology",
        description:
            "Utilizes high-efficiency particulate air (HEPA) filters to ensure 99.99% particle capture.",
    },
    {
        icon: icon1, // Replace with the path to your third icon
        title: "Energy Efficient Design",
        description:
            "Optimized to consume minimal energy while providing maximum performance.",
    },
    {
        icon: icon1, // Replace with the path to your icon
        title: "HEPEX™ Zero Leak Airflow System",
        description:
            "Ensures uniform air distribution, prevents leaks with negative pressure chambers, and minimizes vibration transfer.",
    },
    {
        icon: icon1, // Replace with the path to your second icon
        title: "Advanced Filtration Technology",
        description:
            "Utilizes high-efficiency particulate air (HEPA) filters to ensure 99.99% particle capture.",
    },
    {
        icon: icon1, // Replace with the path to your third icon
        title: "Energy Efficient Design",
        description:
            "Optimized to consume minimal energy while providing maximum performance.",
    },
    {
        icon: icon1, // Replace with the path to your third icon
        title: "Energy Efficient Design",
        description:
            "Optimized to consume minimal energy while providing maximum performance.",
    },
    {
        icon: icon1, // Replace with the path to your second icon
        title: "Advanced Filtration Technology",
        description:
            "Utilizes high-efficiency particulate air (HEPA) filters to ensure 99.99% particle capture.",
    },
    {
        icon: icon1, // Replace with the path to your third icon
        title: "Energy Efficient Design",
        description:
            "Optimized to consume minimal energy while providing maximum performance.",
    },
    {
        icon: icon1, // Replace with the path to your third icon
        title: "Energy Efficient Design",
        description:
            "Optimized to consume minimal energy while providing maximum performance.",
    },
];

const cardsData = [
    {
        title: "Falcon",
        image: art2, // Replace `art2` with the path to your image
        subtitle: "Class II, Type A2 Biosafety Cabinet",
        description: "Perfect for academic and laboratory settings",
        buttonText: "Visit Product",
    },
    {
        title: "Velocity",
        image: art1, // Replace `art1` with the path to your image
        subtitle: "Class II, Main A2 Biosafety Cabinet",
        description: "Perfect for academic and laboratory settings",
        buttonText: "Visit Product",
    },
    {
        title: "Harmony",
        image: art3, // Replace `art3` with the path to your image
        subtitle: "Class II, Type B2 Biosafety Cabinet",
        description: "Ideal for safely handling minute quantities of volatile chemicals & trace amounts of radionuclides",
        buttonText: "Visit Product",
    },
    {
        title: "Infinity",
        image: art1, // Replace `art4` with the path to your image
        subtitle: "Class II, Main B2 Biosafety Cabinet",
        description: "Ideal for safely handling minute quantities of volatile chemicals & trace amounts of radionuclides",
        buttonText: "Visit Product",
    },

];

const AllProductPage = () => {
    const [showAll, setShowAll] = useState(false);

    const handleReadMore = () => {
        setShowAll(true);
    };


    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

            <div className=''>
                <div className='p-5 md:w-[80%] mx-auto md:flex justify-between items-center'>
                    <div>
                        <h1 className='text-3xl md:text-5xl font-medium text-center md:text-start my-3 md:mb-8 text-[#1782C5] leading-10 md:leading-tight md:w-[250px]'>Airbio Biosafety Cabinets</h1>
                        <div className='flex items-center justify-center gap-3 md:gap-5'>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Precision</p>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Sterility</p>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Efficiency</p>
                        </div>
                    </div>
                    <div>
                        <img src={img1} alt="" className='md:h-[404px] md:w-auto' />
                    </div>
                </div>
                
                {/* all cabinets */}
                <div>
                    <div>
                        <div className="gap-3 p-5 flex flex-col my-5 items-center">
                            <h1 className="p-2 px-4 text-2xl mt-8 border border-[#C0C0C0] rounded-full font-medium inline-block text-center">
                                All Biosafety Cabinets
                            </h1>
                            <p className=" text-sm text-[#1E1E1E] text-center">
                                AirBio Bio Safety Cabinets deliver unmatched reliability and protection for laboratory workflows.
                            </p>
                        </div>
                        <div className='pl-5 md:pl-10'>
                            <div className="flex overflow-x-scroll scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full  gap-4 md:gap-10 py-4 mx-auto">
                                {cardsData.map((card, index) => (
                                    <div key={index}>
                                        {/* Card Content */}
                                        <div className="min-w-[318px] h-auto md:w-[300px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                                            <h2 className="text-[16px] p-[4px] px-4 border-[#1782C5] text-[#1782C5] border rounded-[50px]">
                                                {card.title}
                                            </h2>
                                            <img
                                                src={card.image}
                                                alt={`Card ${index + 1}`}
                                                className="w-auto h-[302px] md:w-[221px] object-cover"
                                            />
                                        </div>

                                        {/* Card Details */}
                                        <div className="py-2 flex flex-col justify-center  items-center md:items-start">
                                            <h1 className="font-medium md:text-start text-lg">{card.subtitle}</h1>
                                            <p className="text-[#1782C5] text-center mb-3 md:text-start h-[50px]">{card.description}</p>
                                            <button className="px-4 py-1 bg-black hover:bg-[#1782C5] text-white flex justify-center items-center gap-2 rounded-[50px] mt-5 border border-[#CDCDCD]">
                                                {card.buttonText}
                                                <img src={vector} alt="vector icon" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
                                
                {/* features */}
                <div className="my-10 p-5 md:my-16 md:py-5">
                    <h1 className="text-2xl font-medium text-center my-5 pb-5">
                        Key Features of <span className="text-[#1782C5]">AirBio Bio Safety Cabinets</span>
                    </h1>

                    <div className="grid grid-cols-1 md:max-w-[97%] mx-auto md:grid-cols-3 gap-8 md:wp-5 ">
                        {features
                            .filter((_, index) => showAll || index < 6)
                            .map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex w-full max-w-[350px] md:max-w-[370px] bg-[#F8F8F8] py-5 rounded-xl mx-auto"
                                >
                                    <div className="pl-3 md:pl-4 w-[25%] py-1 px-2">
                                        <img src={feature.icon} alt={feature.title} className="w-14 h-14" />
                                    </div>
                                    <div className="pr-3 w-[75%] ">
                                        <h1 className="font-medium mb-4">{feature.title}</h1>
                                        <p className="text-sm text-[#1E1E1E] text-opacity-75">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {/* Show the button only on mobile screens */}
                    {!showAll && (
                        <div className="flex justify-center items-center mt-5">
                            <button className="bg-white flex justify-between items-center gap-3 hover:bg-black hover:text-white w-auto h-[38px] px-2 pl-3 bg-transparent border-[#1782C5] rounded-full border"
                             onClick={handleReadMore}>
                                Read more
                                <div className='bg-[#1782C5]  flex items-center justify-center text-white w-[28px] h-[28px] p-2 rounded-full'>
                                    <img src={arrow} className='' alt="Down arrow icon" />
                                </div>
                            </button>
                        </div>
                    )}

                </div>



                <div className='my-10 p-5'>
                    <div className='bg-[#F8F8F8] md:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg'>
                        <div className='md:w-[40%]'>
                            <img src={post3} alt="" className='w-[300px] h-auto  md:h-[300px] md:w-[318px] object-cover rounded-xl' />
                        </div>

                        <div className='md:w-[60%] md:mr-8 '>
                            <h1 className='text-xl text-center md:text-start md:text-3xl font-medium mb-5'>About <span className='text-[#1782C5]'>AirBio Biosafety Cabinets</span> </h1>
                            <p className='text-justify text-[14px] text-opacity-75'><span className='font-medium'>AirBio Biosafety Cabinets (BSCs)</span> are precision-engineered laboratory workspaces designed for the safe handling of potentially hazardous or contaminated materials. By combining unidirectional airflow from the top with air inflow from the surrounding room, these cabinets create a dynamic air barrier that protects both users and their materials from contamination. <br />They are available in two variants - <span className='font-medium'>Class II A2</span >and <span className='font-medium'>Class II B2</span>.</p>
                        </div>
                    </div>
                </div>

                <div className='my-10 p-5'>
                    <div className='bg-[#F8F8F8] md:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg'>
                        <div className='md:w-[40%]'>
                            <img src={post2} alt="" className='w-[300px] h-auto  md:h-[300px] md:w-auto object-cover' />
                        </div>

                        <div className='md:w-[60%] md:mr-8 '>
                            <h1 className='text-xl text-center md:text-start md:text-3xl font-medium mb-5'>Tailored to Meet <span className='text-[#1782C5]'>Biosafety</span> Needs</h1>

                            <p className='text-justify text-[14px] text-opacity-75'>Biosafety Cabinets come in various classes, each catering to specific bio-containment requirements. Within these classes, the cabinets differ based on how air is recirculated or exhausted. Regardless of the type, all AirBio BSCs leverage <span className='font-medium'>High Efficiency Particulate Air (HEPA)</span> or <span className='font-medium'>Ultra Low Particulate Air (ULPA)</span> filters to maintain a sterile workspace.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProductPage
