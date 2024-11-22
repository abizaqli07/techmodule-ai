"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type Session } from "next-auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Button } from "~/components/ui/button";

const NavContainerAnimate = {
  offscreen: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.7,
      type: "tween",
      ease: "easeInOut",
    },
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      type: "tween",
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const NavLinkAnimate = {
  offscreen: {
    y: 400,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

interface NavbarProps {
  session: Session | null;
}

const Navbar = ({ session }: NavbarProps) => {

  const [active, setActive] = useState(false);

  const handleActive = (active: boolean) => {
    setActive(!active);
  };

  return (
    <div className={`fixed top-0 z-50 w-full`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          {/* <Image src="/logo.png" alt="Logo" height={90} width={90} /> */}
          <div className="text-xl font-bold">Techmodule.AI</div>
        </Link>
        <div className="items-center gap-6 md:flex">
          <div>
            {session == null ? (
              <Button size={"lg"} onClick={() => void signIn()} className="">
                Sign In
              </Button>
            ) : (
              <Link href={"/dashboard/user"}>
                <Button>Dashboard</Button>
              </Link>
            )}
          </div>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              className="fixed left-0 right-0 top-0 flex h-screen w-screen flex-col items-center gap-12 bg-white pt-36"
              variants={NavContainerAnimate}
              initial="offscreen"
              animate="onscreen"
              exit="offscreen"
            >
              <div
                className="text-primary-dark absolute right-8 top-8 cursor-pointer text-3xl font-bold transition-colors duration-200 ease-out hover:text-primary sm:right-12"
                onClick={() => handleActive(active)}
              >
                <FaArrowRightFromBracket />
              </div>

              <div className="flex flex-col items-center justify-center gap-6 text-center text-lg font-light text-white">
                <motion.div
                  variants={NavLinkAnimate}
                  onClick={() => handleActive(active)}
                >
                </motion.div>
                <motion.div
                  variants={NavLinkAnimate}
                  onClick={() => handleActive(active)}
                >
                  <div>
                    {session == null ? (
                      <Button size={"lg"} onClick={() => void signIn()} className="">
                        Sign In
                      </Button>
                    ) : (
                      <Link href={"/dashboard/user"}>
                        <Button size={"lg"}>Dashboard</Button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
