"use client";
import { AnimatePresence,easeInOut,motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Transisi = ({children}) => {
    const pathName = usePathname();
    return <AnimatePresence>  
        <div key={pathName}>
            <motion.div
            initial={{opacity : 1}}
            animate={{opacity : 0, transition:{delay : 1, duration : 0.4, ease : "easeInOut"}}}
            className="h-screen w-screen fixed bg-[#99582a] top-0 pointer-events-none"
            />
        {children}    
        </div>
        </AnimatePresence>
}

export  default Transisi;   