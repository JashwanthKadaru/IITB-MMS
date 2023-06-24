import './Toggle.css'
const Toggle = ( {id} ) => {
    return (
    <span className='toggle-unit'>
        <label id='visible'> {id} </label>

        <label htmlFor={id} class='toggle-switch'>
            <input id={id} type="checkbox"/>

            <span className="toggle-button round"></span>
        </label>
    </span>
    )
}

export default Toggle;