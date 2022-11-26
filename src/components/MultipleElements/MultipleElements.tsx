import { useState } from "react";
import { Body } from "../Body";
import { Footy } from "../Footy";
import { Nav } from "../Nav";
import { Render } from "../Render";
import { motion } from "framer-motion";

const MultipleElements = () => {
  const [condition1, setCondition1] = useState(true);
  const [condition2, setCondition2] = useState(true);
  const [condition3, setCondition3] = useState(true);

  const conditions = [condition1, condition2, condition3];

  return (
    <>
      <motion.div
        className="border dark:border-none rounded-lg overflow-hidden text-center my-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.3,
        }}
      >
        <Render when={conditions}>
          <Nav />
          <Body />
          <Footy />
        </Render>
      </motion.div>
      <motion.div
        className="rounded-lg overflow-hidden flex h-fit border dark:border-none dark:bg-slate-700"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.2,
          delay: 0.2,
        }}
      >
        <button
          className="flex-1 px-3 py-2 ease-in-out duration-200 hover:bg-slate-50 dark:hover:bg-slate-600"
          onClick={() => setCondition1((p) => !p)}
        >
          Nav
        </button>
        <button
          className="flex-1 px-3 py-2 ease-in-out duration-200 hover:bg-slate-50 dark:hover:bg-slate-600 border-x dark:border-x-slate-800"
          onClick={() => setCondition2((p) => !p)}
        >
          Body
        </button>
        <button
          className="flex-1 px-3 py-2 ease-in-out duration-200 hover:bg-slate-50 dark:hover:bg-slate-600"
          onClick={() => setCondition3((p) => !p)}
        >
          Footy
        </button>
      </motion.div>
    </>
  );
};
export default MultipleElements;
