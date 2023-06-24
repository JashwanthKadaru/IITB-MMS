import './About.css'
import SixGridCard from './Components/SixGridCard'
import {Link} from 'react-router-dom'
const About = () => {
  return (
      <div className='About'>
        <div className='about-grid-layout'>
          <h1 className='page-path'> 
                <Link to='/' replace className='link'>Mess App</Link> 
                <span>&nbsp;&gt;</span><span>&gt;&nbsp;</span> 
                <Link to='/About' replace className='link'>About Page</Link> 
          </h1>

          <div className='grid-title-input'>
              <span className='mini-title'>
                <h2> Dive Deep Into Who We Are.</h2>
                <h3 className='p1'> We are developers from the community  of IITB.</h3> 
                <h3 className='p2'> Our goal is to create. </h3>
              </span>

              {/* <div className='input-div'>
                  <label htmlFor='date-input'> Choose a day : </label>
                <input type='date' id='date-input'/>
              </div>  */}
          
          
          </div>
          
          <div className='content-section'>
              <q className='page-info'> 
              
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium rem quis ipsa molestias, a alias. Quo, non tenetur. Numquam deserunt fugiat eligendi beatae, nihil porro velit possimus commodi non minus?
                </p>

                <p>
                  Debitis, dicta molestiae voluptatem rerum voluptates neque repudiandae dolor optio omnis est nostrum incidunt. Dolorem aspernatur fuga totam corrupti laudantium repellendus praesentium iste reiciendis nihil pariatur dolor, ex blanditiis eum voluptas officiis, iusto molestias molestiae, quasi beatae nostrum. Ipsam quam dignissimos cumque.
                </p>

                <p>In view of the demands made by people from our community of IITB. We took a brave step to create a website that could, with your valuable feed back and time, be as what <span> LMS </span> is to our academics. We choose to call this the <span>"IITB Mess Managament System / MMS.” </span> 
                </p>

              </q>
          </div>
        </div>

        <div className='main-content'>
            <SixGridCard cardTitle={'Our Web App Features'} titles={['All in one place.','No eat. No pay.','know your expenditures','Don\'t like it. Raise a ticket right now.','Personal Profile and Announcements', 'Your History is safe.']} contents={['This web App brings all your mess needs to one place. No need to check inbox anymore.', 'Indicate that you are not going to eat on a particular day by choosing the day, and toggling the switches on Home page.', 'know how much you have spent on mess food in a semester and no how frequently you chose healthover junk food.', 'Go to complaints section and start writing a new complaint about what was troubling you. No need to spam the chats anymore.', 'we keep a personal profile that summarises your data and an announcments section to notify in case of any new announcements.', 'In case you would like to look up a whether you ate in campus a particular day, just go to the Track page enter the date. Your history is always stored safely.'
            ]}/>
        
            <SixGridCard cardTitle={'Our Web App Features'} titles={['All in one place.','No eat. No pay.','know your expenditures','Don\'t like it. Raise a ticket right now.','Personal Profile and Announcements', 'Your History is safe.']} contents={['This web App brings all your mess needs to one place. No need to check inbox anymore.', 'Indicate that you are not going to eat on a particular day by choosing the day, and toggling the switches on Home page.', 'know how much you have spent on mess food in a semester and no how frequently you chose healthover junk food.', 'Go to complaints section and start writing a new complaint about what was troubling you. No need to spam the chats anymore.', 'we keep a personal profile that summarises your data and an announcments section to notify in case of any new announcements.', 'In case you would like to look up a whether you ate in campus a particular day, just go to the Track page enter the date. Your history is always stored safely.'
           ]}/>

           <SixGridCard cardTitle={'Our Web App Features'} titles={['All in one place.','No eat. No pay.','know your expenditures','Don\'t like it. Raise a ticket right now.','Personal Profile and Announcements', 'Your History is safe.']} contents={['This web App brings all your mess needs to one place. No need to check inbox anymore.', 'Indicate that you are not going to eat on a particular day by choosing the day, and toggling the switches on Home page.', 'know how much you have spent on mess food in a semester and no how frequently you chose healthover junk food.', 'Go to complaints section and start writing a new complaint about what was troubling you. No need to spam the chats anymore.', 'we keep a personal profile that summarises your data and an announcments section to notify in case of any new announcements.', 'In case you would like to look up a whether you ate in campus a particular day, just go to the Track page enter the date. Your history is always stored safely.'
           ]}/>
        </div>
      
      </div>
  )
}

export default About
