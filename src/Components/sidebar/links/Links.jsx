import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.5 }
  }
};

const Links = ({ open }) => {
  const items = ["Homepage", "Coding", "Portfolio", "Contact", "About"];

  return (
    <motion.div
      className="links"
      variants={variants}
      initial="closed"
      animate={open ? "open" : "closed"}
    >
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;