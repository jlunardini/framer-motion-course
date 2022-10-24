import { motion } from "framer-motion";
import { useState } from "react";
import Step from "./Step";
export default function StepCard({}) {
  const [step, setStep] = useState(0);
  return (
    <motion.div layout className="bg-gray-100 rounded-md w-full max-w-lg p-12">
      <div className="flex justify-between items-center">
        <Step step={1} activeStep={step} />
        <Step step={2} activeStep={step} />
        <Step step={3} activeStep={step} />
        <Step step={4} activeStep={step} />
      </div>
      <motion.div
        layout
        className="mt-12 mb-8 text-gray-400 font-mono text-center md:text-left text-lg"
      >
        <motion.p className="text-2xl font-semibold" layout>
          Step {step}
        </motion.p>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-start md:justify-end mt-12 gap-4">
        <button
          disabled={step == 0}
          className="disabled:opacity-50  disabled:hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 bg-transparent border-2 text-gray-700 border-transparent rounded-full px-8 py-2 transition-all"
          onClick={() => setStep(step - 1)}
        >
          Back
        </button>
        <button
          onClick={() => setStep(step + 1)}
          disabled={step > 4}
          className="disabled:opacity-50 hover:text-white hover:bg-blue-400 bg-transparent border-2 text-blue-400 border-blue-400 rounded-full px-8 py-2 transition-all"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
