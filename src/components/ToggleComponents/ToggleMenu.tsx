'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Links } from '@/Data/Data';

const ToggleMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prevOpen) => !prevOpen);
  };

  const pathname = usePathname();

  const isActive = (href: string) => (pathname === href ? 'active' : '');

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <>
      <button
        title="toggle"
        className="relative flex items-center justify-center w-12 h-12 rounded-full lg:hidden"
        onClick={toggleMenu}
      >
        <AnimatePresence mode="wait">
          {!showMenu ? (
            <motion.div
              key="menu"
              initial={{ rotate: 0, opacity: 1 }}
              animate={{ rotate: 360, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <HiMenuAlt3 className="text-3xl" />
            </motion.div>
          ) : (
            <motion.div
              key="close"
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <HiOutlineX className="text-3xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-[60vh] rounded-b-3xl py-10 origin-top bg-[whitesmoke] text-black z-[-10]"
          >
            <div className="flex h-full flex-col">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-roboto items-center gap-7"
              >
                {Links.map((links) => {
                  const isActiveLink = isActive(links.href);
                  return (
                    <motion.div key={links.id} className="overflow-hidden">
                      <motion.div
                        variants={mobileLinkVars}
                        className="text-4xl uppercase"
                      >
                        <Link
                          onClick={toggleMenu}
                          href={links.href}
                          className={`relative items-center flex hover:text-primary transition-all ${
                            isActiveLink ? 'text-primary' : ''
                          }`}
                        >
                          {links.title}
                        </Link>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ToggleMenu;
