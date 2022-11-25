import { MDContainer } from "../MDContainer";
import { motion } from "framer-motion";

const SingleCode = () => {
  return (
    <motion.div
      className="flex-1 mt-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.3,
      }}
    >
      <MDContainer>
        {
          "```\nconst condition = boolean\n\n<Render when={condition}>\n  <Body />\n</Render>\n```"
        }
      </MDContainer>
    </motion.div>
  );
};
export default SingleCode;
