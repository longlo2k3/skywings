import React,{useState,useEffect,useRef} from 'react'
import { motion } from 'framer-motion'
const Header = () => {
    const [isOpen,setIsOpen] = useState(false)
    const navBarRef = useRef()
    useEffect(()=>{
        const toggleMenu = () => {
            setIsOpen(open => !open)
        }
        navBarRef.current.addEventListener('click',toggleMenu)
        return () => {
            navBarRef.current.removeEventListener('click',toggleMenu)
        }
    },[])
    useEffect(()=>{
        const navBar = document.querySelector('.nav-bar')
        if(isOpen){
            navBarRef.current.textContent = 'close'
            navBar.classList.remove('close')
            navBar.classList.add('open')

        }else{
            navBarRef.current.textContent = 'menu'
            navBar.classList.remove('open')
            navBar.classList.add('close')
        }
    },[isOpen])
    return (
        <main>
            <motion.div className='section__header relative z-20 flex flex-row justify-between items-center px-2 py-[30px] lg:px-[200px] lg:bg-white bg-primarycolor overflow-hidden'
                initial={{opacity:0, y: -100}}
                whileInView={{opacity:1, y:0}}
                transition={{ 
                    duration: 0.5, 
                    delay: 0.4,
                    type: "spring",
                    stiffness: 120,
                    damping: 10
                }} 
            >
                <p className='text-2xl font-bold w-[112px] lg:text-black text-white'>Skywings</p>
                <div className='lg:text-[16px] lg:font-semibold lg:flex lg:flex-row lg:gap-[30px] hidden'>
                    <a className='p-text'>HOME</a>
                    <a className='p-text'>ABOUT</a>
                    <a className='p-text'>TOUR</a>
                    <a className='p-text'>PACKAGE</a>
                    <a className='p-text'>CONTACT</a>
                </div>
                <button className='lg:button-primary lg:bg-black lg:text-white lg:block hidden'>BOOK TRIP</button>
                <span ref={navBarRef}  class="span material-symbols-outlined lg:hidden text-white block">
                    menu
                </span>
            </motion.div>
            <div className='lg:hidden nav-bar absolute close text-[14px] z-20  top-[92px] bg-primarycolor font-semibold flex flex-col justify-center items-center gap-[30px] py-[20px] w-full h-fit'>
                    <a className='p-text2'>HOME</a>
                    <a className='p-text2'>ABOUT</a>
                    <a className='p-text2'>TOUR</a>
                    <a className='p-text2'>PACKAGE</a>
                    <a className='p-text2'>CONTACT</a>
            </div>
        </main>
    )
}

export default Header
