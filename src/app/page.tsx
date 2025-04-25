import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-[4px] row-start-2 items-center sm:items-start">
        <motion.div
          className="name"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mạnh Tường 1
        </motion.div>
        <motion.div
          className="va text-center sm:text-left"
          initial={{ opacity: 0, y: -20 }}
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
    </div>
  );
}
