import Image from "next/image";

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
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        initial={{ y: "100%" }}
        animate={{x:-150, y: "40%",rotate:-45 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="images/Album 3/Frame 26.png" // Replace with the actual path to your image
          alt="Moving Image"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        initial={{ y: "100%" }}
        animate={{x:200, y: "20%",rotate:25 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="images/Album 4/TK-album 4.png" // Replace with the actual path to your image
          alt="Moving Image"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
        />
      </motion.div>
    </div>
  );
}
