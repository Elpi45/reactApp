// Para mostrar children

const Button = (props) => <button className='banner__button' onClick={props.onClick} >{props.children}</button>


// lo mismo desectructurado ->  const Button = ({onClick, children}) => <button className='banner__button' onClick={onClick} >{children}</button>

export default Button