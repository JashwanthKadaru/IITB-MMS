import './Announcements.css'
import {Link} from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
import Announcement from './Components/Announcement'
const Announcements = () => {
  return (
    <div className="announcements">
          <div className='announcements-grid-layout'>
              <h1 className='page-path'> 
                <Link to='/' replace className='link'>Mess App</Link> 
                <span>&nbsp;&gt;</span><span>&gt;&nbsp;</span> 
                <Link to='/Announcements' replace className='link'>announcements Page</Link> 
              </h1>

              <div className='grid-title-input'>  
                  <span className='mini-title'>
                    <h2> Welcome to Announcements,</h2>
                    <p> Stay tuned for exciting new updates from food comittee </p>
                  </span>

                  <p className='page-info'> View menu, make changes, and also see your semester bills here. Go to announcements section to provide your valuable feedback. Also, you can take a look at your track page for details on previous days and announcements to get to know about exciting updates in food menu.</p> 
              </div>
          </div>

          <div className='announcements-body'>
              <button className='announcements-button' id='b1' type='button' value={''} onClick={(e) => {console.log(e)}}> Today </button>
              <button className='announcements-button' id='b2' type='button' value={''} onClick={(e) => {console.log(e)}}> This week </button>
              <button className='announcements-button' id='b3' type='button' value={''} onClick={(e) => {console.log(e)}}> All </button>
              <button className='announcements-button' id='b4' type='button' value={''} onClick={(e) => {console.log(e)}}> Marked </button>

              <div className='announcements-list'>
                  <Announcement/>
                  <Announcement/>
                  <Announcement/> 
              </div>
          </div>
    </div>
  )
}

export default Announcements
