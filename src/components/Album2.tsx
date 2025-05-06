import React from 'react';
import Image from "next/image";

const Album2 = () => {
    const images = [
        "/images/Album 2/DSC09291.jpg",
        "/images/Album 2/DSC09332.jpg",
        "/images/Album 2/DSC09351.jpg",
        "/images/Album 2/DSC09541.jpg",
        "/images/Album 2/DSC09610.jpg",
        "/images/Album 2/DSC09632.jpg",
        "/images/Album 2/MIN04338.jpg",
        "/images/Album 2/MIN04349.jpg",//header
        "/images/Album 2/MIN04459.jpg",
        "/images/Album 2/MIN04461.jpg",
        "/images/Album 2/MIN04514.jpg",
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
                <div key={index} className="relative w-full h-64">
                    <Image
                        src={src}
                        alt={`Album 2 - Image ${index + 1}`}
                        objectFit="cover"
                        className="rounded-lg shadow-md width-100% height-100%"
                        width={500} // Adjusted width for 1/3 of screen
                        height={500} // Adjusted height
                    />
                </div>
            ))}
        </div>
    );
};

export default Album2;