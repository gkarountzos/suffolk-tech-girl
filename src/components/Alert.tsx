"use client";

import { useState } from "react";
import { AlertCircleIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SupportAlert() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-8 left-8 z-50 flex items-center"
    >
      <motion.div
        animate={isHovered ? { y: 0 } : { y: [0, -8, 0] }}
        transition={{
          duration: 2,
          repeat: isHovered ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary shadow-lg"
      >
        <AlertCircleIcon className="h-8 w-8 text-background" />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 left-4 w-64 rounded-none border-2 border-primary p-4 text-sm text-primary shadow-xl bg-background"
            style={{ pointerEvents: "none" }}
          >
            <span className="font-semibold">
              Support for Windows 10 ends on 14th October 2025.
            </span>{" "}
            Continuing to use Windows 10 past this date will leave your device
            open to viruses. <span className="font-semibold">I can help.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
