import React from 'react';
import Image from "next/image";
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

const PageAlbum4 = () => {
    return (
        <div className="flex flex-col -items-center -justify-center gap-1 md:gap-2 lg:gap-3" style={{ backgroundColor: '#FFFEFD' }}>
            <Link href="/#Album4" className="flex items-center justify-center gap-2 text-blue-500 fixed top-5 right-5 hover:underline">
                <FaHome className="text-2xl" />
                <span>Quay lại</span>
            </Link>

            <div className="flex flex-col items-center w-full -h-screen">
                <Image
                    src="/images/Album 4/MIN04815.jpg"
                    alt="Moving Image"
                    className="object-cover"
                    width={1920} // Added width property
                    height={1080} // Added height property
                />
            </div>
            <div className='flex flex-row gap-1 md:gap-2 lg:gap-3'>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 4/DSC09677.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 4/DSC09685.jpg"
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
                        src="/images/Album 4/MIN04663.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 4/DSC09774.jpg"
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
                            src="/images/Album 4/MIN04738.jpg"
                            alt="Moving Image"
                            className="object-cover"
                            width={1920} // Added width property
                            height={1080} // Added height property
                        />
                    </div>
                    <div className="">
                        <Image
                            src="/images/Album 4/MIN04713.jpg"
                            alt="Moving Image"
                            className="object-cover"
                            width={1920} // Added width property
                            height={1080} // Added height property
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 4/MIN04700.jpg"
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
                        src="/images/Album 4/DSC00025.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 4/MIN04903.jpg"
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
                        src="/images/Album 4/MIN04863.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 4/MIN04797.jpg"
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
                        src="/images/Album 4/MIN04851.jpg"
                        alt="Moving Image"
                        className="object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </div>
                <div className="w-1/2">
                    <Image
                        src="/images/Album 4/MIN04843.jpg"
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

export default PageAlbum4;