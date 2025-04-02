"use client";
import { AnimatePresence, motion } from "framer-motion";
import Filter from "../molecules/filter";
import { use } from "react";
import { FilterContext } from "@/context/filter";
import { cn } from "@/lib/utils";

export default function SlideInFilter() {
  const filterContext = use(FilterContext);
  return (
    <AnimatePresence>
      {filterContext.isFilterOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: filterContext.isFilterOpen ? 1 : 0,
            scale: filterContext.isFilterOpen ? 1 : 0.95,
          }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          transition={{ duration: 0.3 }}
          className={cn(
            "h-screen z-20 fixed overflow-hidden bg-gray-300/60 w-full left-0 top-0 p-2 flex justify-end",
            filterContext.isFilterOpen
              ? "pointer-events-auto"
              : "pointer-events-none"
          )}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: filterContext.isFilterOpen ? 0 : "100%" }}
            transition={{ type: "tween", duration: 0.4, delay: 0.1 }}
            exit={{ x: "100%", transition: { duration: 0.3 } }}
            className="w-fit"
          >
            <Filter />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
