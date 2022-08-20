

import { motion } from "framer-motion";
import { classNames } from "../lib/cssTools";

const PageSection = ({
    title,
    description,
    subtitle,
    buttonLabel,
    image,
    reversed,
}) => {
    return (
        <section
            className={classNames(
                "p-12 gap-12 flex justify-around flex-col",
                (reversed ? "md:flex-row-reverse" : "md:flex-row"),
        )}
        >
            <div className="rounded-lg flex items-center shadow-2xl" style={{backgroundColor: "rgba(225, 225, 225, 0.3)"}}>
                {/* Text container within parent div */}
                <div className="mx-3 flex items-center flex-col">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <h3 className="text-xl mt-6 font-bold text-zinc-700">
                        {subtitle}
                    </h3>
                    <p className="text-zinc-900 text-md">{description}</p>
                    <motion.button
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}} 
                        className='p-6 mt-8 rounded-xl px-16 text-2xl text-slate-800 font-bold bg-blue-100'>{buttonLabel}</motion.button>
                </div>
            </div>
            <motion.button
                whileHover={{scale:1.05}}
                whileTap={{scalle:0.95}}>
                    <img
                        src={image}
                        alt={title}
                        className="max-w-[500px] shadow-2xl rounded-lg"
                    />
            </motion.button>
        </section>
    );
};

export default PageSection;