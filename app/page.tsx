'use client'

import Fade from "@/components/Fade";
import GlassPane from "@/components/Glass";
import SelfPortrait from "@/images/SelfPortrait.jpeg";
import Image from "next/image";
import { motion } from "framer-motion"

export default function HomePage() {
  const tagInputs = ["Creator", "Developer", "Engineer"];

  return (
    <div className="w-full h-full">
      <div className="bg-forestbw bg-center bg-cover h-full w-full" />
      <div className="fixed mt-[50px] h-[calc(100%-50px)] w-full md:grid grid-cols-2 top-0 overflow-y-scroll">
        <div className="flex flex-col justify-center items-center px-10 py-10 md:h-full">
          <div className="md:text-7xl text-6xl">Jon Uriu</div>
          <div className="py-10">
            <Fade inputs={tagInputs} delay={2000} />
          </div>
          <motion.div
            className="md:p-10"
            initial={{ opacity: 0, x: "-100%"}}
            animate={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <GlassPane
              className="flex flex-col p-3 rounded-xl backdrop-blur-xs"
              paneColor="bg-black/50"
            >
              <div className="text-2xl">Welcome to my website!</div>
              <div className="py-2">Fun fact,</div>
              <div>
                The background images on this site are some of my favorite
                places to be! Let me know if you recognize them or if you enjoy
                them too!
              </div>
            </GlassPane>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col justify-center items-center px-10 md:py-10 gap-10 md:h-full "
          initial={{ opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ x: "-100%"}}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={SelfPortrait}
            priority
            width={500}
            height={700}
            alt="Jon Uriu Image"
            className="rounded-3xl w-[60%]"
          />
        </motion.div>
      </div>
    </div>
  );
}
