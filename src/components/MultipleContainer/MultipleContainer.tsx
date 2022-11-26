import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiCodeSSlashLine, RiLayout4Line } from "react-icons/ri";
import { MultipleCode } from "../MultipleCode";
import { MultipleElements } from "../MultipleElements";
import { Render } from "../Render";

const MultipleContainer = () => {
  const [code, setCode] = useState(false);

  const conditions = [!code, code];

  return (
    <motion.div
      className="p-4 my-2 sm:w-fit w-full rounded-xl border dark:border-none dark:bg-slate-800 flex flex-col justify-between"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.2,
      }}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-demibold text-xl mr-4">Multiple Elements</h2>
        <button
          className="p-2 dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-slate-50 rounded-full"
          onClick={() => setCode((p) => !p)}
        >
          <Render when={conditions}>
            <RiCodeSSlashLine />
            <RiLayout4Line />
          </Render>
        </button>
      </div>
      <AnimatePresence>
        <Render when={conditions}>
          <MultipleElements />
          <MultipleCode />
        </Render>
      </AnimatePresence>
    </motion.div>
  );
};
export default MultipleContainer;
