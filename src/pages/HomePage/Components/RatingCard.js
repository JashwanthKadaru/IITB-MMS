import './RatingCard.css'
import { FiStar } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
const RatingCard = ({srating, setRating}) => {
  const [star1, setStar1] = useState(1<=srating)
  const [star2, setStar2] = useState(2<=srating)
  const [star3, setStar3] = useState(3<=srating)
  const [star4, setStar4] = useState(4<=srating)
  const [star5, setStar5] = useState(5<=srating)

  const rating = (i) => {
    
    switch (i) {
      case 1: {
        setStar1(true)
        setStar2(false)
        setStar3(false)
        setStar4(false)
        setStar5(false)
        break
      }

      case 2: {
        setStar1(true)
        setStar2(true)
        setStar3(false)
        setStar4(false)
        setStar5(false)
        break
      }

      case 3: {
        setStar1(true)
        setStar2(true)
        setStar3(true)
        setStar4(false)
        setStar5(false)
        break
      }

      case 4: {
        setStar1(true)
        setStar2(true)
        setStar3(true)
        setStar4(true)
        setStar5(false)
        break
      }

      case 5: {
        setStar1(true)
        setStar2(true)
        setStar3(true)
        setStar4(true)
        setStar5(true)
        break
      }
    }
    setRating(i);
  }

  return (
    <div className='star-rating'>
      {!star1 ? (
        <FiStar
          className='star'
          id='star1'
          onClick={() => {
            rating(1)
          }}
        />
      ) : (
        <FaStar
          className='star'
          id='star1'
          style={{ color: 'gold' }}
          onClick={() => {
            rating(1)
          }}
        />
      )}
      {!star2 ? (
        <FiStar
          className='star'
          id='star2'
          onClick={() => {
            rating(2)
          }}
        />
      ) : (
        <FaStar
          className='star'
          id='star2'
          style={{ color: 'gold' }}
          onClick={() => {
            rating(2)
          }}
        />
      )}
      {!star3 ? (
        <FiStar
          className='star'
          id='star3'
          onClick={() => {
            rating(3)
          }}
        />
      ) : (
        <FaStar
          className='star'
          id='star3'
          style={{ color: 'gold' }}
          onClick={() => {
            rating(3)
          }}
        />
      )}
      {!star4 ? (
        <FiStar
          className='star'
          id='star4'
          onClick={() => {
            rating(4)
          }}
        />
      ) : (
        <FaStar
          className='star'
          id='star4'
          style={{ color: 'gold' }}
          onClick={() => {
            rating(4)
          }}
        />
      )}
      {!star5 ? (
        <FiStar
          className='star'
          id='star5'
          onClick={() => {
            rating(5)
          }}
        />
      ) : (
        <FaStar
          className='star'
          id='star5'
          style={{ color: 'gold' }}
          onClick={() => {
            rating(5)
          }}
        />
      )}
    </div>
  )
}

export default RatingCard
