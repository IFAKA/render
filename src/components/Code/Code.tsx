import { MDContainer } from "../MDContainer";
import { motion } from "framer-motion";

const Code = ({ children }: { children: string }) => {
  return (
    <motion.div
      className="flex-1 mt-4 invert dark:invert-0"
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
      <MDContainer>{children}</MDContainer>
    </motion.div>
  );
};
export default Code;
