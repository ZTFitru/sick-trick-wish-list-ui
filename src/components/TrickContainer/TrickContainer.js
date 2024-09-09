import Trick from '../Trick/Trick'
import './TrickContainer.css'


const TrickContainer = ({tricks})=> {

    const trickCards = tricks.map(trick => {
        return <Trick 
        key={trick.id} 
        stance={trick.stance} 
        name={trick.name} 
        obstacle={trick.obstacle} 
        tutorial={trick.tutorial}
        id={trick.id} />
    })

    return (
        <div className='main-cont'>
            {trickCards}
        </div>
    )
}


export default TrickContainer