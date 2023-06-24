import './SemCard.css'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
const SemCard = ({title, summary}) => {
    const createSummary = (summary) => {
        let i=0;
        return (
            <>
                <div className='summary-grid'>
                {
                    (summary.summ)? summary.summ.map((s) => {
                        i++;
                        return (
                            <span className='grid-cell' id={'cell'+i}>
                    
                                <label className='sub-title' htmlFor={s.title}>
                                    {s.title}
                                </label>
                    
                                <p id={s.title} className='p1'> {s.t+'/'+s.T} </p>
                    
                            </span>
                        )
                    }) : null
                }
                </div>

                <div className='grand-summary-ribbon'>
                    
                    <span className='arrow-tile'>
                        <FiArrowLeft className='arrow'/>
                    </span>

                    <div className='grand-summary-box'>
                    
                        <span className='grand-summary'>
                            <label className='grand-sub-title' htmlFor='Total'> Total : </label>
                            <p id='Total' className='p2'> {'Rs. '+summary.Total} </p>
                        </span>

                        <span className='grand-summary'>
                            <label className='grand-sub-title' htmlFor='Saved'> Saved : </label>
                            <p id='Saved' className='p2'> {'Rs. '+summary.Saved} </p>
                        </span>
                    </div>
                    <span className='arrow-tile'>
                        <FiArrowRight className='arrow'/>
                    </span>
                </div>
            </>
        )
    }
    return (
        <div className='sem-card'>
            <div  className='sem-grid'>
                <h4> {title} </h4>

                <div className='sem-grid-layout'>
                    {
                        (summary)?createSummary(summary): null
                    }
                </div>
            </div>
        </div>
    )
}

export default SemCard;