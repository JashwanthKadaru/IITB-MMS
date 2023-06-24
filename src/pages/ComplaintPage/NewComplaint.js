import {FaPlus} from 'react-icons/fa'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import './NewComplaints.css'
const NewComplaint = () => {
    const cid = '#A001'
    const files = []
    return (
        <div className="new-complaint">
          <div className='new-complaint-grid-layout'>
              <h1 className='page-path'> 
                <Link to='/' replace className='link'>Mess App</Link> 
                <span>&nbsp;&gt;</span><span>&gt;&nbsp;</span> 
                <Link to='/Complaints' replace className='link'>Complaints Page</Link> 
                <span>&nbsp;&gt;</span><span>&gt;&nbsp;</span> 
                <Link to='/Complaints/new-complaint' replace className='link'>New Complaint</Link></h1>

              <div className='grid-title-input'>  
                  <h1> Write your complaint here and hit submit to post it. Please try to keep it short and concise.</h1>
                  <div className='new-complaint-input'>
                    <form className='new-complaint-form'>
                        <label htmlFor='head' id='head'> Write your complaint heading here : </label>
                        <input type='text' placeholder='New Complaint :ID' id='head'/> 

                        <label htmlFor='body' id='body'> Write your complaint body here : </label>
                        <textarea rows={10} cols={50} placeholder='This is a complaint body' id='body'> </textarea>

                        <label htmlFor='files' id='files'> Attach files &#40;if any&#41; </label>
                        <label className='file-upload'>
                            <input type='file' multiple='multiple' accept='.png,.jpeg,.jpg.,.svg,.gif,.mpeg,.pdf,.docx' id='input-files'/>
                            {(files.length==0)?'Choose files':`${files.length} files chosen`} <FaPlus id='choose-plus'/>
                        </label>
                    </form>
                  </div>
              </div>

              <h5 id='new-complaint-id'> Your new complaint id : {cid}</h5>
          </div>
        </div>   
    )
}

export default NewComplaint;