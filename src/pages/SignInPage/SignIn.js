import './SignIn.css'
import {Link} from 'react-router-dom'
const SignIn = ({ isLogged, setIsLogged }) => {
  setIsLogged(true)
  return (
      <div className='SignIn'>
        <div className='signin-grid-layout'>
            <h1 className='page-path'> 
                    <Link to='./' replace className='link'>Mess App</Link> 
                    <span>&nbsp;&gt;</span><span>&gt;&nbsp;</span> 
                    <Link to='./' replace className='link'>Hosme Page</Link> 
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
      </div>
  )
}

export default SignIn
