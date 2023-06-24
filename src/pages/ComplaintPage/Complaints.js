import { FaPlus, FaSearch } from 'react-icons/fa'
import {MdOutlineSearch} from 'react-icons/md'
import './Complaints.css'
import Complaint from './Components/Complaint'
import { Navigate, useNavigate, Link } from 'react-router-dom'
const Complaints = () => {
  const navigate = useNavigate()
  return( 
      <div className="complaints">
          <div className='complaints-grid-layout'>
              <h1 className='page-path'> 
                <Link to='/' replace className='link'>Mess App</Link> 
                <span>&nbsp;&gt;</span><span>&gt;&nbsp;</span> 
                <Link to='/Complaints' replace className='link'>Complaints Page</Link> 
              </h1>

              <div className='grid-title-input'>  
                  <span className='mini-title'>
                    <h2> Welcome to Complaints Section,</h2>
                    <p> Don't like what you eat? &nbsp; Raise a ticket right now. </p>
                  </span>

                  <p className='page-info'> View menu, make changes, and also see your semester bills here. Go to complaints section to provide your valuable feedback. Also, you can take a look at your track page for details on previous days and announcements to get to know about exciting updates in food menu.</p>

                  <div className='new-complaint'>
  
                    <Link to='/Complaints/new-complaint' className='link' id='plus'> <label htmlFor='plus'> New complaint </label> <FaPlus id='icon'/> </Link>                     
                  </div> 
              </div>
          </div>

          <div className='complaints-body'>

            <div className='main-section'> 
              
              <div className='search-bar'>
              
                <span className='search-by-head search-span'>
                  <label htmlFor='search-by-head'> Search by words : </label>
                  <input id='search-by-head' type='text' value='' onChange={(e) => {console.log(e.target)}}></input>
                  <MdOutlineSearch id='icon'/>
                </span>

                <span className='search-by-date search-span'>
                  <MdOutlineSearch id='icon'/>
                  <label htmlFor='search-by-date' id='l1'> Search by Date </label>

                  <label htmlFor='from-date'id='l2'> from : </label>
                  <input id='from-date' type='date' value='' onChange={(e) => {console.log(e.target)}}/>

                  <label htmlFor='to-date' id='l3'> to : </label>
                  <input id='to-date' type='date' value='' onChange={(e) => {console.log(e.target)}}/>
                </span>
              
              </div>

              <div className='complaints-view'>
                  <Complaint mainhead={'The First Post'} date={'2023-06-23'} day={'Thursday'} postee={'Anirudh .K'} preview={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt. sit amet sit amet sit amet sit sit amet sit amet'}/>

                  <Complaint mainhead={'The Second Post Lorem sit amet sit amet sit sit amet sit amet sit sit amet sit amet sit'} date={'2023-06-23'} day={'Thursday'} postee={'Anirudh .K'} preview={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt. sit amet sit amet sit amet sit sit amet sit amet'}/>

                  <Complaint mainhead={'The Third Post Lorem '} date={'2023-06-23'} day={'Thursday'} postee={'Anirudh .K'} preview={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt. sit amet sit amet sit amet sit sit amet sit amet'}/>

                  <Complaint mainhead={'The Third Post Lorem '} date={'2023-06-23'} day={'Thursday'} postee={'Anirudh .K'} preview={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt. sit amet sit amet sit amet sit sit amet sit amet'}/>

                  <Complaint mainhead={'The Third Post Lorem '} date={'2023-06-23'} day={'Thursday'} postee={'Anirudh .K'} preview={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt. sit amet sit amet sit amet sit sit amet sit amet'}/>

                  <Complaint mainhead={'The Third Post Lorem '} date={'2023-06-23'} day={'Thursday'} postee={'Anirudh .K'} preview={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt. sit amet sit amet sit amet sit sit amet sit amet'}/>
              </div>            
            </div> 

          </div>
    </div>
  )
}

export default Complaints
