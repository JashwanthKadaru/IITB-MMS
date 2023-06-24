import './SixGridCard.css'
const SixGridCard = ({cardTitle, titles, contents}) => {

    return (
        <div className='feature'>
              <h3 className='feature-head'> {cardTitle} 
              </h3>

              <span id='head-underline'></span>

              <div className='feature-grid'>
                {
                    
                    titles.map((item) => {
                    return (
                    <div className='feature-cell'>
                        <h4>
                            {item}
                        </h4>

                        <p>
                            {contents[titles.indexOf(item)]}
                        </p>
                    </div>
            )
        } )}
              </div>
          </div>
    )
}

export default SixGridCard;