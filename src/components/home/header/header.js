import '../../../App.css'
import {HiHome} from 'react-icons/hi'
import {IoClose, IoPersonOutline} from 'react-icons/io5'
import {CgFileDocument} from 'react-icons/cg'
import {BsBag} from 'react-icons/bs'
import {AiOutlineAppstore, AiOutlinePicture} from 'react-icons/ai'
import {BiMessageSquareDetail}from 'react-icons/bi'


const Header =() =>{
    
        var navMenu =document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

        // condition 
        if(navToggle){
            navToggle.addEventListener('click' ,()=>{
                navMenu.classList.add('show-menu')
            })
        }

        //  hide menu
        if(navClose){
            navClose.addEventListener('click' ,()=>{
                navMenu.classList.remove('show-menu')
            })
        }

        // remouve menu on icon click

        const navLink = document.querySelectorAll('.nav__link')

        function linkAction(){
            const navMenu =document.getElementById('nav-menu')

            navMenu.classList.remove('show-menu')
        }

        navLink.forEach(n => n.addEventListener('click' ,linkAction))



    return(
        <div className='header' id='header'>
            <nav className='nav container'>
                <a href='#' className='nav__logo'>  Mehdi </a>

                <div className='nav__menu' id='nav-menu'>
                    <ul className='nav__list grid'>

                        <li className='nav__item'>
                            <a href="#home" className='nav__link'>
                                <HiHome className='nav__icon'/>Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#about' className='nav__link'>
                                <IoPersonOutline className='nav__icon'/> About Me
                            </a>
                        </li>
                        
                        <li className='nav__item'>
                            <a href='#skills' className='nav__link'>
                                <CgFileDocument className='nav__icon'/>Skills
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#services' className='nav__link'>
                                <BsBag className='nav__icon'/> Services
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#Portfolio' className='nav__link'>
                                <AiOutlinePicture className='nav__icon'/>Portfolio
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#contact' className='nav__link'>
                                <BiMessageSquareDetail className='nav__icon'/> Contact Me
                            </a>
                        </li>
                    </ul>

                            {/* close button */}
                            <IoClose className='nav__close' id='nav-close' />
                    
                </div>

                <div className='nav__btns'>
                    <div className='nav__toggle' id='nav-toggle'>
                        <AiOutlineAppstore />
                    </div>
                </div>
                
                
            </nav>
        </div>
    )
}

export default Header