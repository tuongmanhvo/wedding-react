import React from 'react';
import Image from "next/image";
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

const PageAlbum1 = () => {
    return (
        <div className="flex flex-col -items-center -justify-center gap-1 md:gap-2 lg:gap-3" style={{ backgroundColor: '#FFFEFD' }}>
            <Link href="/#Album1" className="flex items-center justify-center gap-2 text-blue-500 fixed top-5 right-5 hover:underline">
                <FaHome className="text-2xl" />
                <span>Quay lại</span>
            </Link>
            
            <div className="flex flex-col items-center w-full -h-screen">
                <Image
                    src="/images/Album 1/DSC09054.jpg"
                    alt="Moving Image"
                    className="object-cover"
                    width={1920} // Added width property
                    height={1080} // Added height property
                />
            </div>

            <div className='flex flex-row gap-1 md:gap-2 lg:gap-3'>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 1/DSC08399.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="flex flex-col w-1/2 gap-1 md:gap-2 lg:gap-3">
                    <div className='flex flex-row gap-1 md:gap-2 lg:gap-3'>
                        <div className="w-1/2 ">
                            <Image
                                src="/images/Album 1/MIN04026.jpg"
                                alt="Moving Image"
                                className="object-cover"
                                width={1920} // Added width property
                                height={1080} // Added height property
                            />
                        </div>
                        <div className="w-1/2 ">
                            <Image
                                src="/images/Album 1/DSC09108.jpg"
                                alt="Moving Image"
                                className="object-cover"
                                width={1920} // Added width property
                                height={1080} // Added height property
                            />
                        </div>
                    </div>
                    <div className="">
                        <Image
                            src="/images/Album 1/MIN04057.jpg"
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
                        src="/images/Album 1/DSC08844.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 1/DSC08854.jpg"
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
                            src="/images/Album 1/MIN04071.jpg"
                            alt="Moving Image"
                            className="object-cover"
                            width={1920} // Added width property
                            height={1080} // Added height property
                        />
                    </div>
                    <div className="">
                        <Image
                            src="/images/Album 1/MIN04063.jpg"
                            alt="Moving Image"
                            className="object-cover"
                            width={1920} // Added width property
                            height={1080} // Added height property
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 1/MIN03818.jpg"
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
                        src="/images/Album 1/DSC08995.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 1/DSC09000.jpg"
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
                        src="/images/Album 1/MIN03950.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className='flex flex-col w-1/2 gap-1 md:gap-2 lg:gap-3'>
                    <div className="">
                        <Image
                            src="/images/Album 1/DSC08805.jpg"
                            alt="Moving Image"
                            className="object-cover"
                            width={1920} // Added width property
                            height={1080} // Added height property
                        />
                    </div>
                    <div className="">
                        <Image
                            src="/images/Album 1/MIN04090.jpg"
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
                        src="/images/Album 1/DSC09089.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 1/DSC08893.jpg"
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

export default PageAlbum1;