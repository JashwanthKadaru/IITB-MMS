import './MealCard.css'
import Toggle from './Toggle'
const MealCard = ({date, day}) => {
    return (
        <div className="meal-card">
            <div className='card-head'>
            <h3> Date: {date}</h3>
            <p> {day}</p>
            </div>

            <div className='card-body'>
            <Toggle key={1} id={'breakfast'}/>
            <Toggle key={2} id={'lunch'}/>
            <Toggle key={3} id={'snacks'}/>
            <Toggle key={4} id={'dinner'}/>
            </div>
        </div>
    )
}

export default MealCard;