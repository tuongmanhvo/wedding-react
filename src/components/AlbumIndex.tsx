import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const AlbumIndex = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center flex-col w-full gap-20 lg:gap-10 py-30" style={{ backgroundColor: '#FFFEFD' }}>
            <div className='flex items-center justify-center flex-col w-full gap-20 lg:flex-row lg:gap-10'>

                <div className="flex flex-col gap-3 font-bold">
                    <span className="text-4xl text-center md:text-left lg:text-left" style={{ fontFamily: 'Times New Roman' }}>KHOẢNG KHẮC</span>
                    <span className="text-4xl text-center md:text-left lg:text-left" style={{ fontFamily: 'Times New Roman' }}>AN YÊN</span>
                </div>
                <div className="flex flex-col justify-center gap-4 mx-4 lg:items-end">
                    <span>Bộ ảnh này ghi lại những khoảng khắc dịu dàng,</span>
                    <span>nơi ánh mắt trao nhau nhiều hơn vạn lời nói.</span>
                    <span>Một chương mở đầu ngọt ngào cho hành trình dài mang tên <span className='font-bold'>&quot;Chúng Mình&quot;</span>.</span>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-5 md:gap-10 lg:gap-15'>

                <div id="Album1" className='w-full aspect-square overflow-hidden md:w-[300px] lg:w-[600px] cursor-pointer' onClick={() => router.push('/album1')}>
                    <Image
                        src="/images/Album 1/DSC09054.jpg"
                        alt="Moving Image"
                        className="w-full h-full object-cover rounded-lg" // Added rounded corners
                        width={600} // Fixed width
                        height={600} // Fixed height
                        objectFit="cover"
                    />
                </div>
                <div id="Album2" className='w-full aspect-square overflow-hidden md:w-[300px] lg:w-[600px] cursor-pointer' onClick={() => router.push('/album2')}>
                    <Image
                        src="/images/Album 2/MIN04349.jpg"
                        alt="Moving Image"
                        className="w-full h-full object-cover rounded-lg" 
                        width={300} 
                        height={300}
                        objectFit="cover"
                    />
                </div>
                <div id="Album3" className='w-full aspect-square overflow-hidden md:w-[300px] lg:w-[600px] cursor-pointer' onClick={() => router.push('/album3')}>
                    <Image
                        src="/images/Album 3/DSC09191.jpg"
                        alt="Moving Image"
                        className="w-full h-full object-cover rounded-lg" 
                        width={300} 
                        height={300}
                        objectFit="cover"
                    />
                </div>
                <div id="Album4" className='w-full aspect-square overflow-hidden md:w-[300px] lg:w-[600px] cursor-pointer' onClick={() => router.push('/album4')}>
                    <Image
                        src="/images/Album 4/TK-album 4.png"
                        alt="Moving Image"
                        className="w-full h-full object-cover rounded-lg" 
                        width={300} 
                        height={300}
                        objectFit="cover"
                    />
                </div>

            </div>
        </div>

    );
};

export default AlbumIndex;