import { useState } from 'react'
import './MenuCard.css'
import RatingCard from './RatingCard'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
const MenuCard = ({title, menuItems}) => {
    const [rating, setRating] = useState(0)

    return (
        <div className="menu-card">
            <div className='menu-grid'>
                <h4> {title} </h4>

                <div className='menu-grid-layout'>
                    {
                        (menuItems)?                         menuItems.map((item) => {
                            return (
                                <div className='menu-grid-items-sub-list'>
                                 <h5> {item.head} </h5>

                                    {
                                        (item.list)? item.list.map((p) => {
                                           return( <p> {p} </p>)
                                        }): null
                                    }
                                </div>
                            )
                        }):null
                        
                    }
                </div>
            </div>

            <div className='rating-ribbon'>
                <span className='arrow-tile'>
                <FiArrowLeft/>
                </span>
                <RatingCard srating={rating} setRating={setRating}/>
                <span className='arrow-tile'>
                <FiArrowRight/>
                </span>
            </div>

            <a> submit rating </a>
        </div>
    )
}

export default MenuCard;  