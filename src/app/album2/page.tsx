import React from 'react';
import Image from "next/image";
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

const PageAlbum2 = () => {
    return (
        <div className="flex flex-col -items-center -justify-center gap-1 md:gap-2 lg:gap-3" style={{ backgroundColor: '#FFFEFD' }}>
            <Link href="/#Album2" className="flex items-center justify-center gap-2 text-blue-500 fixed top-5 right-5 hover:underline">
                <FaHome className="text-2xl" />
                <span>Quay lại</span>
            </Link>

            <div className="flex flex-col items-center w-full -h-screen">
                <Image
                    src="/images/Album 2/MIN04349.jpg"
                    alt="Moving Image"
                    className="object-cover"
                    width={1920} // Added width property
                    height={1080} // Added height property
                />
            </div>

            <div className='flex flex-row gap-1 md:gap-2 lg:gap-3'>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 2/MIN04514.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className='flex flex-col w-1/2 gap-1 md:gap-2 lg:gap-3'>
                    <div className="">
                        <Image
                            src="/images/Album 2/DSC09351.jpg"
                            alt="Moving Image"
                            className="object-cover"
                            width={1920} // Added width property
                            height={1080} // Added height property
                        />
                    </div>
                    <div className="">
                        <Image
                            src="/images/Album 2/DSC09291.jpg"
                            alt="Moving Image"
                            className="object-cover"
                            width={1920} // Added width property
                            height={1080} // Added height property
                        />
                    </div>
                </div>

            </div>


            <div className='flex flex-row gap-1 md:gap-2 lg:gap-3'>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 2/MIN04338.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 2/DSC09332.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
            </div>

            <div className='flex flex-row gap-1 md:gap-2 lg:gap-3'>
                <div className='flex flex-col w-1/2 gap-1 md:gap-2 lg:gap-3'>
                    <div className="">
                        <Image
                            src="/images/Album 2/DSC09541.jpg"
                            alt="Moving Image"
                            className="object-cover"
                            width={1920} // Added width property
                            height={1080} // Added height property
                        />
                    </div>
                    <div className="">
                        <Image
                            src="/images/Album 2/DSC09632.jpg"
                            alt="Moving Image"
                            className="object-cover"
                            width={1920} // Added width property
                            height={1080} // Added height property
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 2/DSC09610.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
            </div>

            <div className='flex flex-row gap-1 md:gap-2 lg:gap-3'>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 2/MIN04459.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 2/MIN04461.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
            </div>
        </div>
    );
};

export default PageAlbum2;