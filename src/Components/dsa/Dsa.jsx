import './dsa.scss';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Dsa = () => {

    const reference = useRef();

    useGSAP(
        () => {
            // ✅ safe, created during execution, selector text scoped

            var tl1 = gsap.timeline({
                scrollTrigger:{
                    trigger:".container",
                    scroller:"body",
                    // markers:"false",
                    start:"top 50%",
                    end:"top -70%",
                    scrub:1.5,
                    
                },
            });

          
          
          

            tl1.from("#elem1" , {
                x: -300,
                opacity: 0,
                duration: 1
            },"level1")

            tl1.from("#elem2" , {
                x: 300,
                opacity: 0,
                duration: 1
            },"level1")

            tl1.from("#elem3" , {
                x: -300,
                opacity: 0,
                duration: 1
            },"level2")


            tl1.from("#elem4" , {
                x: 300,
                opacity: 0,
                duration: 1
            },"level2")

            tl1.from("#elem5" , {
                x: -300,
                opacity: 0,
                duration: 1
            },"level3")

            tl1.from("#elem6" , {
                x: 300,
                opacity: 0,
                duration: 1
            },"level3")

        });








    return (
        <div className='container' >
            <div className="elem" id="elem1" ref={reference}>
                <h1>Solved 1000+ DSA problems</h1>
            </div>
            <div className="elem" id="elem2">
                <h1>Among top 7% leetcoders in the world</h1>
            </div>
            <div className="elem" id="elem3">
                <div id="part1">
                    <h2>1806 Rated on leetcode</h2>
                </div>

                <div id="part2">
                    <img src="/leetcode1.png"></img>
                </div>
            </div>
            <div className="elem" id="elem4">
                <div id="part1">

                    <ul>
                        <li>All time under 50 rank in college</li>
                        <li>250+ solved</li>
                        <li>Batch Rank in Top 5</li>
                        <li>1000 points</li>
                    </ul>
                </div>

                <div id="part2">
                    <img src="/gfglogo.png"></img>
                </div>
            </div>
            <div className="elem" id="elem5">
                <div id="part1">
                    <h2>3 star on Codechef</h2>
                </div>

                <div id="part2">
                    <img src="/codechef1_logo.png"></img>
                </div>
            </div>
            <div className="elem" id="elem6">
                <div id="part1">
                    <h2>1150 rating on codeforces</h2>
                    <h2>300 solved questions</h2>
                </div>

                <div id="part2">
                    <img src="/cf.png"></img>
                </div>
            </div>
        </div>
    )
}

export default Dsa