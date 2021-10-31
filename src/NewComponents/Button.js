const Button = ({ color, title, onClick }) => {

    return (
        <button style={{ backgroundColor: color }} onClick={onClick} className='btn'>{title}</button>
    )
}
export default Button
