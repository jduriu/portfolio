'use client'
import { AnimatePresence, motion } from 'framer-motion'


export default function PanAnimation(
  {children, motionVariant, duration, delay=undefined, trigger=undefined}
  ) {

  const motionVariants = {
    leftToRight: {
      xInitial: "-100%",
      xExit: "100%",
      yInitial: "0%",
      yExit: "0%",
    },
    rightToLeft: {
      xInitial: "100%",
      xExit: "-100%",
      yInitial: "0%",
      yExit: "0%",
    },
    leftToLeft: {
      xInitial: "-100%",
      xExit: "-100%",
      yInitial: "0%",
      yExit: "0%",
    },
    rightToRight: {
      xInitial: "100%",
      xExit: "100%",
      yInitial: "0%",
      yExit: "0%",
    },
    topToBottom: {
      xInitial: "0%",
      xExit: "0%",
      yInitial: "100%",
      yExit: "-100%",
    },
    bottomToTop: {
      xInitial: "0%",
      xExit: "0%",
      yInitial: "-100%",
      yExit: "100%",
    },
    leftToTop: {
      xInitial: "-100%",
      xExit: "0%",
      yInitial: "0",
      yExit: "-100%",
    },
  }
  const motionProps = motionVariants[motionVariant]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={trigger}
        className="h-full w-full"
        initial={{opacity: 0, x: motionProps.xInitial, y: motionProps.yInitial}}
        animate={{ opacity: 1, x:"0%", y:"0%"}}
        exit={{opacity: 0, x: motionProps.xExit, y: motionProps.yExit}}
        transition={{ duration: duration, delay: delay}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
