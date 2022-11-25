import { useState } from "react";
import { Body } from "../Body";
import { Footy } from "../Footy";
import { Nav } from "../Nav";
import { Render } from "../Render";
import { motion } from "framer-motion";

const MultipleElements = () => {
  const initConditions = {
    Nav: true,
    Body: true,
    Footy: true,
  };

  const [conditions, setConditions] = useState(initConditions);
  return (
    <>
      <motion.div
        className="rounded-lg overflow-hidden text-center my-4"
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
        className="rounded-lg overflow-hidden flex h-fit"
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
          className="flex-1 px-3 py-2 border-x border-x-slate-800 bg-slate-700 ease-in-out duration-200 hover:bg-slate-600"
          onClick={() => setConditions((p) => ({ ...p, Nav: !p.Nav }))}
        >
          Nav
        </button>
        <button
          className="px-3 p-2 border-x border-x-slate-800 bg-slate-700 flex-1 ease-in-out duration-200  hover:bg-slate-600"
          onClick={() => setConditions((p) => ({ ...p, Body: !p.Body }))}
        >
          Body
        </button>
        <button
          className="px-3 p-2 border-x border-x-slate-800 bg-slate-700 flex-1 ease-in-out duration-200 hover:bg-slate-600"
          onClick={() => setConditions((p) => ({ ...p, Footy: !p.Footy }))}
        >
          Footy
        </button>
      </motion.div>
    </>
  );
};
export default MultipleElements;
