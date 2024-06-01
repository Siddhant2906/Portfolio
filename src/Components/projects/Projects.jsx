import { useRef } from 'react';
import './projects.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const items = [
    {
        id: 1,
        title: "Web-based Camera Application",
        img: "https://media.istockphoto.com/id/935620656/photo/video-camera-lens.jpg?s=1024x1024&w=is&k=20&c=1KtARnr7jsuJR4_ex1PlEhVSdlzyRWxBAU8LGMQIU8s=",
        desc: "Developed a React-based image editor with filters, crop, and rotate functionality. Utilized useState, useRef, and useEffect hooks for managing state, capturing images with the webcam, and updating UI elements dynamically.",
        deploy:"https://btp-woad.vercel.app/",
    },
    {
        id: 2,
        title: "Fitness Website - Fully Responsive Design",
        img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: " Developed a fully responsive fitness website using HTML, CSS, and JavaScript. Integrated dynamic UI elements and optimized for various devices to enhance user experience.",
        deploy:"https://siddhant2906.github.io/gsiddhant.github.io/",
        
    },
    {
        id: 3,
        title: "ClimaQuick Forecast",
        img: "https://i.pinimg.com/564x/92/ca/98/92ca98d8a47c0e6644506c0254da9855.jpg",
        desc: "Developed a weather app using React, integrating OpenWeatherMap API for real-time data, with dynamic icon updates based on weather conditions. Enhanced with CSS for responsive design.",
        deploy:"https://gsiddweatherprediction.netlify.app/",

    },
]

const Single = ({ item }) => {

    const ref = useRef();

    

    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["start start","end 50%"],
        opacity:0,
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imagecontainer" >
                        <img style={{opacity:opacity}} src={item.img} alt=""></img>
                    </div>

                    <motion.div className="textcontainer" style={{ x:y,opacity:opacity }} >
                   
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.deploy}>
                        <button>See demo</button>
                        </a>
                       
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
const Projects = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });



    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });


    return (
        <div className='projects' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>

                <motion.div style={{ scaleX }} className="progressBar">

                </motion.div>


            </div>


            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}

        </div>

    )
}

export default Projects