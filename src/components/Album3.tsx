import React from 'react';
import Image from "next/image";

const Album3 = () => {
    const images = [
        "/images/Album 3/DSC09191.jpg",
        "/images/Album 3/DSC09211.jpg",
        "/images/Album 3/DSC09215.jpg",
        "/images/Album 3/DSC09254.jpg",
        "/images/Album 3/DSC09272.jpg",
        "/images/Album 3/Frame 26.png",
        "/images/Album 3/MIN04170.jpg",
        "/images/Album 3/MIN04198.jpg",
        "/images/Album 3/MIN04202.jpg",
        "/images/Album 3/MIN04229.jpg",
        "/images/Album 3/MIN04321.jpg",
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

export default Album3;