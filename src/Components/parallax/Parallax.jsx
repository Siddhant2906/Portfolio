import './parallax.scss'

const Parallax = ({type}) => {
  return (
    <div className='parallax' style={{
        background:type==="DSA"?"linear-gradient(180deg, #0c0c1d, #111132)":"linear-gradient(180deg, #0c0c1d, #505064)"
    }}>
        <h1>{type==="DSA"?"My Problem solving skill":"My Projects"}</h1>
        <div className="mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  )
}

export default Parallax