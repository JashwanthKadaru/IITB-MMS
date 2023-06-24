import MenuCard from './Components/MenuCard' 
import MealCard from './Components/MealCard'
import './Home.css'
import SemCard from './Components/SemCard'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
  <div className='Home'>
    <div className='home-grid-layout'>
        <h1 className='page-path'> 
                <Link to='/' replace className='link'>Mess App</Link> 
                <span>&nbsp;&gt;</span><span>&gt;&nbsp;</span> 
                <Link to='/' replace className='link'>Home Page</Link> 
        </h1>


      <div className='grid-title-input'>
        <span className='mini-title'>
          <h2> Welcome Jashwanth Kadaru,</h2>
          <p> This is your home page. </p>
        </span>

        <p className='page-info'> View menu, make changes, and also see your semester bills here. Go to complaints section to provide your valuable feedback. Also, you can take a look at your track page for details on previous days and announcements to get to know about exciting updates in food menu.</p>

        <div className='input-div'>
          <label htmlFor='date-input'> Choose a day : </label>
          <input type='date' id='date-input'/>
        </div> 
      </div>
    </div>

    <div className='home-body'>
      <div className='grid-meal-card'>
        <MealCard date='21-06-2023' day='Wednesday'/>

        <button id='meal-update' type='button' onClick={(e) => console.log("button:" + e.target)}>
          update
        </button>

        <p className='message'> 
          {(false)?'please check your email' : 'succesfully updated' }
        </p>
      </div>

      <div className='grid-menu-card'> 
        <MenuCard title={'Lunch'} menuItems={[{head: 'Indian Bread', list: ['laachi paratha', 'wheat roti']},{head: 'Curries', list: ['Aloo Sabji', 'egg curry']},{head: 'Indian Bread', list: ['laachi paratha', 'wheat roti']},{head: 'Curries', list: ['Aloo Sabji', 'egg curry']},{head: 'Indian Bread', list: ['laachi paratha', 'wheat roti']},{head: 'Curries', list: ['Aloo Sabji', 'egg curry']},{head: 'Indian Bread', list: ['laachi paratha', 'wheat roti']},{head: 'Curries', list: ['Aloo Sabji', 'egg curry']},{head: 'Indian Bread', list: ['laachi paratha', 'wheat roti']},{head: 'Curries', list: ['Aloo Sabji', 'egg curry']}]}/>
      </div>

      <div className='grid-sem-bill-card'>
        <SemCard 
          title={'Semester 1'} 
          summary={
          {'summ': 
            [
              {
                title:'breakfast', t:10, T:100
              },
              
              {
                title:'lunch', t:10, T:100
              },
              
              {
                title:'snacks', t:10, T:100
              },
              
              {
                title:'dinner', t:10, T:100
              }
            ] 
            ,'Total': 2200,
            'Saved':200
          }
          }/>
      </div>
    </div>
  </div>)
}



export default Home
