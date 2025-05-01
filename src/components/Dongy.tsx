import React from 'react';
import Image from "next/image";
import * as motion from "motion/react-client"// do not remove this line

const Dongy = () => {
    return (
        <div id='dongy' className="min-h-screen w-full flex flex-col items-center justify-center" >
            <div id="dongyHinh" className="w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-screen "
                >
                    <Image
                        src="/images/homepage/Frame 35.png"
                        alt="Moving Image"
                        className="w-full h-full object-cover"
                        width={1920} // Added width property
                        height={1080} // Added height property
                    />
                </motion.div>
            </div>
        </div>

    );
};

export default Dongy;