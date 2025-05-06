import React from 'react';
import Image from "next/image";

const Album4 = () => {
    const images = [
        "/images/Album 4/DSC00025.jpg",
        "/images/Album 4/DSC09677.jpg",
        "/images/Album 4/DSC09685.jpg",
        "/images/Album 4/DSC09774.jpg",
        "/images/Album 4/MIN04663.jpg",
        "/images/Album 4/MIN04700.jpg",
        "/images/Album 4/MIN04713.jpg",
        "/images/Album 4/MIN04738.jpg",
        "/images/Album 4/MIN04797.jpg",
        "/images/Album 4/MIN04815.jpg",
        "/images/Album 4/MIN04843.jpg",
        "/images/Album 4/MIN04851.jpg",
        "/images/Album 4/MIN04863.jpg",
        "/images/Album 4/MIN04903.jpg",
        "",
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

export default Album4;