import Trick from '../Trick/Trick'
import './TrickContainer.css'


const TrickContainer = ({tricks})=> {

    const trickCards = tricks.map(trick => {
        return <Trick 
        id={trick.id}
        key={trick.id} 
        stance={trick.stance} 
        name={trick.name} 
        obstacle={trick.obstacle} 
        tutorial={trick.tutorial} />
    })

    return (
        <div className='main-cont'>
            {trickCards}
        </div>
    )
}


export default TrickContainer