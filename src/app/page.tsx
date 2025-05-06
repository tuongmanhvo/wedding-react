'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import RSVPForm from "@/components/RSVPForm";
import Loimoi from '@/components/Loimoi';
import Dongy from '@/components/Dongy';

import * as motion from "motion/react-client"// do not remove this line

export default function Home() {
  const [textPosition, setTextPosition] = useState(200);
  const [innerHeight, setInnerHeight] = useState(600);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTextPosition(window.innerHeight / 5);
      setInnerHeight(window.innerHeight);
    }
  }, []);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 2700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <main className="flex flex-col items-center justify-center gap-[4px] h-screen w-full overflow-hidden">
        <div id="divName" className="flex items-center justify-center gap-[4px] w-full h-screen">
          <motion.div
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: textPosition }}
            transition={{ duration: 0.5 }}
          >
            Mạnh Tường
          </motion.div>
          <motion.div
            className="va text-center sm:text-left"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: textPosition }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            và
          </motion.div>
          <motion.div
            className="name"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: textPosition }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Thiên Kim
          </motion.div>
        </div>
        <motion.div
          initial={{ y: innerHeight }} // Start below the screen
          animate={{ x: "-50%", y: textPosition, rotate: -45 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ position: "relative", width: "100%", maxWidth: "400px", aspectRatio: "2 / 3" }}
        >
          <Image
            src="/images/Album 3/Frame 26.png" // Updated path to include leading slash
            alt="Moving Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>

        <motion.div
          initial={{ y: innerHeight }} // Start below the screen
          animate={{ x: "80%", y: -textPosition, rotate: 25 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ position: "relative", width: "100%", maxWidth: "400px", aspectRatio: "3 / 2" }}
        >
          <Image
            src="/images/Album 4/TK-album 4.png" // Updated path to include leading slash
            alt="Moving Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>

        <motion.div
          initial={{
            y: innerHeight,
            scale: 0.5,
            opacity: 0,
          }}
          animate={
            animate
              ? {
                y: "0%",
                scale: 1,
                opacity: 1,
              }
              : { y: -textPosition, opacity: 1 }
          }
          transition={{
            duration: 1.5,
            easing: "ease-in-out",
            delay: 2,
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover w-full h-full"
        >
          <Image
            src="/images/homepage/Frame 34.jpg"
            alt="Moving Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </main>

      <Loimoi />
      <Dongy />

      <div className="min-h-screen flex flex-col items-center justify-center" >
        <h2 className="rvspTitle " style={{ fontFamily: 'Times New Roman' }}>Xác nhận dự tiệc cưới</h2>
        <Image
          src="/images/homepage/Frame 15.png"
          alt="Image"
          className="relative w-50"
          width={250} // Added width
          height={250} // Added height
        />
        <h2 className="rvspName" style={{ fontFamily: 'Times New Roman' }}>Tường & Kim</h2>

        <RSVPForm />
      </div>
    </div>
  );
}
