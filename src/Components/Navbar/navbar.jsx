import './navbar.scss'
import {motion} from "framer-motion"
const Navbar = () => {
     return (
         <div className='navbar'>
            {/* {sidebaaar} */}
            <div className='wrapper'>

                <motion.span 
                initial = {{opacity:0,scale:0.5}} 
                animate={{opacity:1,scale:1}}
                transition={{duration:0.6}} >
                    Sidd's Galaxy</motion.span>

                <div className='social'>
                    <a href='https://leetcode.com/u/gsiddhant_2906/'><img src="/leetcode1.png" alt=''/></a>
                    <a href='https://www.linkedin.com/in/siddhant-gupta-37a38a212/'><img src='/linkedin-2.png' /></a>
                    <a href='https://github.com/Siddhant2906'><img src='/github_logo.png' /></a>
                    <a href='https://codeforces.com/profile/gsiddhant2906'><img src='/cf.png' /></a>
                    {/* <img src="myapp\public\LeetCode_Sharing.png" alt=''/> */}
                </div>

            </div>
         </div>
     );
}

export default Navbar