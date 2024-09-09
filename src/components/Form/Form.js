import { useState } from "react"


const Form = ({addTrick})=> {

    // Create a controlled Form component to create a trick

    //The Stance input should be a select dropdown and should contain options 'Regular' and 'Switch'
    //The Name of Trick input should be a text input
    //The Obstacle input should be a select dropdown and should contain options 'Flatground', 'Ledge', 'Rail', 'Stairs', and 'Pool'
    //The Link to Tutorial input should be a text input
    //The newly added trick should immediately show on the page without the page refreshing.
    const [stance, setStance] = useState('')
    const [nameTrick, setNameTrick] = useState('')
    const [obstacle, setObstacle] = useState('')
    const [link, setLink] = useState('')

    const sendItBtn = (e)=> {
        e.preventDefault()
        const newTrick = {
            stance: stance,
            name: nameTrick,
            obstacle: obstacle,
            tutorial: link,
            id: Date.now,
        }
        addTrick(newTrick)

        setStance('')
        setNameTrick('')
        setObstacle('')
        setLink('')

    }

    return (
        <div>
            <form>
                {/* <label for='stance'>Choose your Stance</label> */}
                <select name="stance" id="stance" value={stance} onChange={(e)=> setStance(e.target.value)}>
                {/* <label htmlFor='stance'>Choose your Stance</label> */}
                    <option value='regular'>Regular</option>
                    <option value='switch'>Switch</option>
                </select>
                <input
                    type="text"
                    value={nameTrick}
                    onChange={(e)=> setNameTrick(e.target.value)}
                />
                <select value={obstacle} onChange={(e)=> setObstacle(e.target.value)}>
                    <option value='flatground'>Flatground</option>
                    <option value='ledge'>Ledge</option>
                    <option value='rail'>Rail</option>
                    <option value='stairs'>Stairs</option>
                    <option value='pool'>Pool</option>
                </select>
                <input 
                    type="text"
                    value={link}
                    onChange={(e)=> setLink(e.target.value)}
                />
                <button onClick={e => sendItBtn(e)}>Send It</button>
            </form>
        </div>
    )
}

export default Form;