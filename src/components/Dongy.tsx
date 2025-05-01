import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { FaMapMarkerAlt } from 'react-icons/fa';
// import * as motion from "motion/react-client"// do not remove this line

const Dongy = () => {
    // const [timeLeft, setTimeLeft] = useState('');
    const [dayLeft, setDayLeft] = useState('');
    const [hourLeft, setHourLeft] = useState('');
    const [minLeft, setMinLeft] = useState('');
    const [secondLeft, setSecondLeft] = useState('');

    useEffect(() => {
        const targetDate = new Date('2025-05-18T00:00:00+07:00'); // Indochina Time Zone
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                // setTimeLeft('The day has arrived!');
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                const formatWithTwoDigits = (value: number) => value.toString().padStart(2, '0');

                setDayLeft(formatWithTwoDigits(days));
                setHourLeft(formatWithTwoDigits(hours));
                setMinLeft(formatWithTwoDigits(minutes));
                setSecondLeft(formatWithTwoDigits(seconds));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id='dongy' className="min-h-screen w-full flex flex-col items-center justify-center gap-10" >

            <div id="dongyHinh" className="flex flex-col items-center w-full -h-screen">
                <Image
                    src="/images/homepage/Frame 35.png"
                    alt="Moving Image"
                    className="w-full h-screen object-cover"
                    width={1920} // Added width property
                    height={1080} // Added height property
                />
                <Image
                    src="/images/homepage/Frame 15.png"
                    alt="Image"
                    className="relative w-50"
                    width={250} // Added width
                    height={250} // Added height
                    style={{ transform: 'translateY(-50%)' }} // Move up 50% of its height
                />
            </div>
            <span className="text-4xl text-center leading-relaxed">VÂNG, CHÚNG MÌNH ĐỒNG Ý</span>
            <span className="text-2xl font-bold">18.05.2025</span>
            <div className='flex flex-row items-center justify-center gap-10'>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <span className='bg-white w-full text-center'>{dayLeft}</span><span>Ngày</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <span className='bg-white w-full text-center'>{hourLeft}</span><span>Giờ</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <span className='bg-white w-full text-center'>{minLeft}</span><span>Phút</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <span className='bg-white w-full text-center'>{secondLeft}</span><span>Giây</span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">

                <span className="text-2xl font-bold">Tại Amor Resort</span>
                <span className="text-xl text-center leading-relaxed">61A Nguyễn Văn Đậu, Phường 6, Quận Bình Thạnh, Thành phố Hồ Chí Minh</span>
                <div className="flex items-center justify-center">
                    <a href="https://www.google.com/maps?q=61A Nguyễn Văn Đậu, Phường 6, Quận Bình Thạnh, Thành phố Hồ Chí Minh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:underline">
                        <FaMapMarkerAlt className="text-2xl" />
                        <span>Mở Bản Đồ</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Dongy;