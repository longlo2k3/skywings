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
            <motion.div className='section__header relative z-20 flex flex-row justify-around items-center px-2 py-[30px] gap-6 md:bg-white bg-primarycolor overflow-hidden'
                initial={{opacity:0, y: -100}}
                whileInView={{opacity:1, y:0}}
                transition={{ 
                    duration: 0.5, 
                    delay: 0.4,
                    type: "spring",
                    stiffness: 120,
                    damping: 10
                }} 
                viewport={{once:true}}
            >
                <p className='text-2xl font-bold md:text-black text-white'>Skywings</p>
                <div className='md:text-[16px] md:font-semibold md:flex md:flex-row md:gap-[30px] hidden'>
                    <a className='p-text'>HOME</a>
                    <a className='p-text'>ABOUT</a>
                    <a className='p-text'>TOUR</a>
                    <a className='p-text'>PACKAGE</a>
                    <a className='p-text'>CONTACT</a>
                </div>
                <button className=' md:button-primary md:bg-black md:text-white md:block hidden'>BOOK TRIP</button>
                <span ref={navBarRef}  class="span material-symbols-outlined md:hidden text-white block">
                    menu
                </span>
            </motion.div>
            <div className='md:hidden nav-bar absolute close text-[14px] z-20  top-[92px] bg-primarycolor font-semibold flex flex-col justify-center items-center gap-[30px] py-[20px] w-full h-fit'>
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
