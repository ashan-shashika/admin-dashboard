import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlyoutMenuProps {
  buttonLabel: string;
  children: React.ReactNode;
}

const FlyoutMenu: React.FC<FlyoutMenuProps> = ({ buttonLabel, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the flyout when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/10 z-50"
        >
          <div className="py-2">{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FlyoutMenu;
