"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../public/logomain.png"
import Button from './Button'
import { motion, AnimatePresence } from 'framer-motion'

const linkVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,

    },
  }),
};

const menuVariants = {
  hidden: { 
    opacity: 0, 
    y: -20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
  },
  exit: { 
    opacity: 0, 
    y: -20,
  },
} as const;

const navLinks = [
  { href: "/vehicles", label: "Vehicles" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <div className='md:px-20 z-50 absolute w-full px-4 md:px-0'>
        <div className={`flex justify-between items-center ${scrolled ? 'bg-black/20 backdrop-blur-sm rounded-full px-6 mt-2 fixed transition-all ease-in-out duration-300 mx-auto left-0 right-0 w-9/10' : ''} `}>
            <Link href={"/"} className="">
            <Image src={logo} alt='logo' width={1000} height={1000} className='object-co  w-2/3 bg'/>
            </Link>

            <motion.ul 
              className='md:flex text-white hidden'
              initial="hidden"
              animate="visible"
            >
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    className='px-4 py-2 font-medium relative group'
                  >
                    <Link href={link.href}>{link.label}</Link>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-white"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </motion.li>
                ))}
            </motion.ul>

            <Button text='Make Appointment' color='white' className='text-black bg-white md:block hidden'/>

            {/* Hamburger icon — mobile only */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden flex flex-col gap-1.5 relative w-8 h-8 items-center justify-center '
            >
              <motion.span 
                className='h-0.5 w-6 bg-white'
                animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className='h-0.5 w-6 bg-white'
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className='h-0.5 w-6 bg-white'
                animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              variants={menuVariants} 
              initial="hidden" 
              animate="visible" 
              exit="exit"
              className='md:hidden fixed top-24 left-0 right-0 bg-black/30 backdrop-blur-md z-40 mx-8 rounded-2xl'
            >
              <motion.ul className='flex flex-col items-cente gap-6 py-8 px-6 bg-amber-00'>
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link 
                      href={link.href}
                      className='text-white text-lg font-medium'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <div className='pb-6 px-6 flex justify-cente'>
                <Button 
                  text='Make Appointment' 
                  color='white' 
                  className='text-black bg-white w-fit'
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}
