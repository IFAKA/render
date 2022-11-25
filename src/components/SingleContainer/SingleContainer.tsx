import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiCodeSSlashLine, RiLayout4Line } from "react-icons/ri";
import { Render } from "../Render";
import { SingleCode } from "../SingleCode";
import { SingleElement } from "../SingleElement";

const SingleContainer = () => {
  const [code, setCode] = useState(false);

  const conditions = {
    SingleElement: !code,
    SingleCode: code,
    RiCodeSSlashLine: !code,
    RiLayout4Line: code,
  };

  return (
    <motion.div
      className="p-4 my-2 sm:w-fit w-full rounded-xl bg-slate-800 flex flex-col justify-between"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.2,
        delay: 0.3,
      }}
    >
      <div className="flex items-center justify-between h-fit">
        <h2 className="font-demibold text-xl mr-4">Single Element</h2>
        <button
          className="p-2 flex justify-center items-center dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full"
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
          <SingleElement />
          <SingleCode />
        </Render>
      </AnimatePresence>
    </motion.div>
  );
};
export default SingleContainer;
