import './Complaint.css'
const Complaint = ({mainhead, date, day, postee, preview}) => {
    return (
         <div className='complaint'>
            <div className='complaint-head'>
                <h3> {mainhead} </h3>
                <p> 
                    <span className='date'> {date}, </span> 
                    <span className='day'> {day}, </span>
                    <span className='postee'>  {postee} </span> 
                </p>
            </div>
            <p className='complaint-preview'> {preview} </p>
        </div>
    )
}

export default Complaint;