import { useState } from "react";
import { Body } from "../Body";
import { Render } from "../Render";
import { motion } from "framer-motion";

const SingleElement = () => {
  const initCondition = true;
  const [condition, setCondition] = useState(initCondition);

  return (
    <>
      <motion.div
        className="flex-1 my-4 flex items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.3,
        }}
      >
        <div className="rounded-xl w-full overflow-hidden text-center">
          <Render when={condition}>
            <Body />
          </Render>
        </div>
      </motion.div>
      <motion.button
        className="h-fit rounded-lg px-3 p-2 bg-slate-700 ease-in-out duration-200 hover:bg-slate-600"
        onClick={() => setCondition((p) => !p)}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.2,
          delay: 0.05,
        }}
      >
        Body
      </motion.button>
    </>
  );
};
export default SingleElement;
