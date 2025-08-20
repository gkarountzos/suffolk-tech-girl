import FancyButton from "@/components/ui/FancyButton";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";

interface IFooterProps {
  isInView: boolean;
}

export function Footer({ isInView }: IFooterProps) {
  return (
    <motion.footer
      className="py-6 border-t border-foreground/10"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Serving Suffolk County & Surrounding Areas</span>
            </div>
          </div>
          <div>
            crafted by{" "}
            <Link
              href="https://github.com/gkarountzos"
              target="_blank"
              className="text-primary font-bold"
            >
              gkarountzos
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
