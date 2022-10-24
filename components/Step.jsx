import { motion, AnimatePresence } from "framer-motion";

export default function Step({ step, activeStep }) {
  let status =
    activeStep === step
      ? "active"
      : activeStep < step
      ? "inactive"
      : "complete";

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          complete: {
            scale: 1.25,
          },
          active: {
            scale: 1,
            transition: {
              duration: 0.2,
              delay: 0,
            },
          },
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 bg-blue-300 rounded-full z-0"
      ></motion.div>
      <motion.div
        initial={false}
        transition={{ duration: 0.2 }}
        variants={{
          inactive: {
            backgroundColor: "#fff",
            borderColor: "#94A3B8",
            color: "#94A3B8",
          },
          active: {
            backgroundColor: "#fff",
            borderColor: "#60A5FA",
            color: "#60A5FA",
          },
          complete: {
            backgroundColor: "#60A5FA",
            borderColor: "#60A5FA",
            color: "#fff",
          },
        }}
        className="
	  h-12 w-12 z-10 flex bg-white rounded-full justify-center items-center border-2 relative"
      >
        {activeStep <= step && (
          <motion.span inital={false} className="text-2xl">
            {step}
          </motion.span>
        )}
        {activeStep > step && (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              exit={{ pathLength: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.2,
                type: "tween",
                ease: "easeOut",
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </motion.svg>
        )}
      </motion.div>
    </motion.div>
  );
}
