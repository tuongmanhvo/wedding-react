import Image from "next/image";
import RSVPForm from "@/components/RSVPForm";

import * as motion from "motion/react-client"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex items-baseline gap-[4px] row-start-2">

        <motion.div
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mạnh Tường
        </motion.div>
        <motion.div
          className="va text-center sm:text-left"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          và
        </motion.div>
        <motion.div
          className="name"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Thiên Kim
        </motion.div>

      </main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 margin-top-200">
          <RSVPForm />
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div> */}
      </div>
      {/* <motion.div
        className=" "
        initial={{ y: "200%" }}
        animate={{ x: "-50%", y: "100%", rotate: -45 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", width: "100%", maxWidth: "400px", aspectRatio: "2 / 3" }}
      >
        <Image
          src="images/Album 3/Frame 26.png" // Replace with the actual path to your image
          alt="Moving Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <motion.div
        className="absolute"
        initial={{ y: "100%" }}
        animate={{ x: "100%", y: "-20%", rotate: 25 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", width: "100%", maxWidth: "400px", aspectRatio: "3 / 2" }}
      >
        <Image
          src="images/Album 4/TK-album 4.png" // Replace with the actual path to your image
          alt="Moving Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div> */}

    </div>
  );
}
