import React from 'react';
import Image from "next/image";
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

const PageAlbum3 = () => {
    return (
        <div className="flex flex-col -items-center -justify-center gap-1 md:gap-2 lg:gap-3" style={{ backgroundColor: '#FFFEFD' }}>
            <Link href="/#Album3" className="flex items-center justify-center gap-2 text-blue-500 fixed top-5 right-5 hover:underline">
                <FaHome className="text-2xl" />
                <span>Quay lại</span>
            </Link>

            <div className="flex flex-col items-center w-full -h-screen">
                <Image
                    src="/images/Album 3/MIN04198.jpg"
                    alt="Moving Image"
                    className="object-cover"
                    width={1920} // Added width property
                    height={1080} // Added height property
                />
            </div>

            <div className='flex flex-row gap-1 md:gap-2 lg:gap-3'>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 3/MIN04321.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className='flex flex-col w-1/2 gap-1 md:gap-2 lg:gap-3'>
                    <div className="">
                        <Image
                            src="/images/Album 3/MIN04202.jpg"
                            alt="Moving Image"
                            className="object-cover"
                            width={1920} // Added width property
                            height={1080} // Added height property
                        />
                    </div>
                    <div className="">
                        <Image
                            src="/images/Album 3/DSC09254.jpg"
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
                        src="/images/Album 3/DSC09211.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 3/DSC09215.jpg"
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
                        src="/images/Album 3/MIN04170.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 3/MIN04229.jpg"
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
                        src="/images/Album 3/DSC09272.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 3/DSC09191.jpg"
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

export default PageAlbum3;