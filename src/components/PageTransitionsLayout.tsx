import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

// TYPES
interface ILayoutProps {
  children: ReactNode;
}

export const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        key={""}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        variants={{
          initialState: {
            opacity: 0,
            scale: 0.5,
            originX: "50%",
            originY: "50%",
          },
          animateState: {
            opacity: 1,
            scale: 1,
            originX: "50%",
            originY: "50%",
          },
          exitState: {
            opacity: 0,
            scale: 0.5,
            originX: "50%",
            originY: "50%",
          },
        }}
        className="min-h-screen w-full" // Feel free to add your classes here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
