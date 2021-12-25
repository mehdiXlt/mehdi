import { IoIosArrowDown } from "react-icons/io"
import { BsBraces } from "react-icons/bs"
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {HiOutlineColorSwatch} from 'react-icons/hi'
import "../../../App.css"

const Skills =() =>{
    const skillsContent =document.getElementsByClassName('skills__content'),
    skillsHeader =document.querySelectorAll('skills__header')

    function ToggleSkilles(){
        var itemClass = this.parentNode.className

        for ( let i=0 ; i< skillsContent.length ; i++){
            skillsContent[i].className='skills__content skills__header'
        }
        if(itemClass ==='skills__content skills__colose'){
            this.parentNode.className ='skills__content'
        }
    }

    skillsHeader.forEach((e)=>{
        e.addEventListener('click' ,ToggleSkilles)
    })
    
        
    return(
        <section className='skills section' id="skills">
            <h2 className='section__title bounce'> Skills</h2>
            <span className='section__subtitle'>My Technical level </span>


            <div className='skills__container container grid'>
                <div className='skills__line'>
                    {/* ===== FrontEnd ===== */}
                    <div className='skills__content skills__open'>
                        <div className='skills__header'>
                            <BsBraces className='skills__icon'/>
                            <div>
                                <h1 className='skills__title '>Frontend developer</h1>
                                <span className='skills__subtitle'>Judge by yourself</span>
                            </div>

                            <IoIosArrowDown className='skills__arrow'/>
                        </div>


                        <div className='skills__list grid'>

                            <div className='skills__data'>
                                <div className='skills__title'>
                                    <div className='skills__name'>HTML</div>
                                    <span className='skills__number'>80%</span>
                                </div>
                                <div className='skills__bar'>
                                    <div className='skills__percentage skills__html'></div>
                                </div>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__title'>
                                    <div className='skills__name'>CSS</div>
                                    <span className='skills__number'>80%</span>
                                </div>
                                <div className='skills__bar'>
                                    <div className='skills__percentage skills__css'></div>
                                </div>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__title'>
                                    <div className='skills__name'>JavaScript</div>
                                    <span className='skills__number'>60%</span>
                                </div>
                                <div className='skills__bar'>
                                    <div className='skills__percentage skills__js'></div>
                                </div>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__title'>
                                    <div className='skills__name'>React js</div>
                                    <span className='skills__number'>80%</span>
                                </div>
                                <div className='skills__bar'>
                                    <div className='skills__percentage skills__react'></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='skills__content skills__close'>
                        <div className='skills__header'>
                            <MdOutlineMiscellaneousServices className='skills__icon'/>

                            <div>
                                <h1 className='skills__title'>Backend Developer</h1>
                                <span className='skills__subtitle'>Take a Look</span>
                            </div>

                            <IoIosArrowDown className='skills__arrow'/>
                        </div>


                        <div className='skills__list grid'>
                            <div className='skills__data'>
                                <div className='skills__title'>
                                    <h3 className='skills__name'>Node Js</h3>
                                    <span className='skills__number'> 70%</span>
                                </div>

                                <div className='skills__bar'>
                                    <div className='skills__percentage skills__node'></div>
                                </div>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__title'>
                                    <h3 className='skills__name'>Express</h3>
                                    <span className='skills__number'> 75%</span>
                                </div>

                                <div className='skills__bar'>
                                    <div className='skills__percentage skills__express'></div>
                                </div>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__title'>
                                    <h3 className='skills__name'>MongoDB</h3>
                                    <span className='skills__number'> 80%</span>
                                </div>

                                <div className='skills__bar'>
                                    <div className='skills__percentage skills__mongo'></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='skills__content skills__close'>
                        <div className='skills__header'>
                            <HiOutlineColorSwatch className='skills__icon'/>

                            <div>
                                <h1 className='skills__title'>Design</h1>
                                <span className='skills__subtitle'>More then 2 years</span>
                            </div>

                            <IoIosArrowDown className='skills__arrow'/>
                        </div>

                        <div className='skills__list grid'>

                            <div className='skills__data'>
                                <div className='skills__title'>
                                    <h3 className='skills__name'>Illustrator</h3>
                                    <span className='skills__number'>90%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__illustrator'></span>
                                </div>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__title'>
                                    <h3 className='skills__name'>Photoshop</h3>
                                    <span className='skills__number'>70%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__ps'></span>
                                </div>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__title'>
                                    <h3 className='skills__name'>Figma</h3>
                                    <span className='skills__number'>70%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__figma'></span>
                                </div>
                            </div>


                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>

        
)}

export default Skills