import './intro.scss'
import {motion} from 'framer-motion'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const textVariants={
    initial:{
       x : -500,
       opacity:0
    },
    animate:{
        x : 0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
};

const sliderVariants={
    // initial:{
    //    x : 0,
    // },
    // animate:{
    //     x : "-750%",
    //     transition:{
    //         duration:20,
    //         repeatType:"mirror",
    //         repeat:Infinity,
    //     }
    // },

    initial: {
        x: "100%", // Start outside the container to the right
      },
      animate: {
        x: "-400%", // Move the text completely to the left
        transition: {
          duration: 18, // Adjust the duration as needed
        //   ease: "linear", // Use a linear transition for smooth continuous movement
          repeatType:"linear",
          repeat: Infinity, // Repeat infinitely
        
        },
      },
};


const Intro = () => {


    
    useGSAP(
        () => {
            // ✅ safe, created during execution, selector text scoped

          

          
          
          

            gsap.from(".imagecontainer " , {
                
                opacity: 0,
                duration: 3,
                // stagger:2,
            },)


        });


    return (
        <div className='intro'>

            <motion.div className="wrapper" variants={textVariants} initial="initial" animate="animate">
                <motion.div className="textContainer" variants={textVariants}>
                    <motion.h1 variants={textVariants}>FRONTEND DEVELOPER</motion.h1>
                    <motion.h2 variants={textVariants}>SIDDHANT GUPTA</motion.h2>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See the latest work</motion.button>
                        <motion.button className="two" variants={textVariants}>Contact me</motion.button>
                    </motion.div>
                </motion.div>

            </motion.div>

             <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                  React Javascript HTML CSS
             </motion.div>

            <div className="imagecontainer">
                <img src="./profile.jpeg" alt="" />
            </div>

        </div>
    )
}

export default Intro