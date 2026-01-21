"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Navbar } from "../Navbar";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/a-propos" },
  {
    name: "Programmes",
    path: "/programmes",
    dropdown: [
      { name: "Tous les programmes", path: "/programmes" },
      { name: "ABM Tech Club", path: "/programmes/tech-club" },
      { name: "ABM Élite Internationale", path: "/programmes/elite-internationale" },
      { name: "Un Élève, Un Ordinateur", path: "/programmes/un-eleve-un-ordinateur" },
      { name: "ABM Education Award", path: "/programmes/education-award" },
      { name: "Bourse Denis Mukwege", path: "/programmes/bourse-mukwege" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 hero-gradient backdrop-blur-md shadow-(--shadow-md) transition-all duration-300 ${isScrolled ? "border-b border-white/10" : ""
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-(--shadow-gold) group-hover:scale-105 transition-transform">
                <Image
                  src={"/images/logo.png"}
                  className="rounded-xl"
                  alt="ABM"
                  width={48}
                  height={48}
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg text-white/90 hover:text-white">
                  ABM-EDUCATION
                </span>
                <p className="text-xs text-white/70">Africa Bright Minds</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <Navbar/>


            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button asChild className="btn-gold gap-2">
                <Link href="/partenariats">
                  <Heart className="w-4 h-4" />
                  Faire un don
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 lg:hidden pt-20"
          >
            <div className="absolute inset-0 bg-background/98 backdrop-blur-md" />
            <nav className="relative h-full overflow-y-auto px-4 py-6">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.path}
                      className={`block px-4 py-3 hover:bg-gray-400/50 rounded-lg text-lg transition-colors ${isActive(link.path)
                        ? "bg-secondary text-secondary-foreground font-semibold"
                        : "text-foreground hover:bg-muted"
                        }`}
                    >
                      {link.name}
                    </Link>

                    {link.dropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {link.dropdown.slice(1).map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            className={`block px-4 py-2 hover:bg-gray-400/50 rounded-lg text-sm transition-colors ${isActive(item.path)
                              ? "bg-muted font-semibold"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                              }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 px-4">
                <Button asChild className="w-full btn-gold gap-2">
                  <Link href="/partenariats">
                    <Heart className="w-4 h-4" />
                    Faire un don
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
