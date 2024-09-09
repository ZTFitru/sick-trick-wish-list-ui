import './Trick.css'

const Trick = ({name, stance, obstacle, tutorial, id})=> {

    return (
        <div className='box-cont'>
            <p>{stance} {name}</p>
            <p>Obstacle: {obstacle}</p>
            <p>Link to Tutorial: {tutorial}</p>
        </div>
    )
}

export default Trick;