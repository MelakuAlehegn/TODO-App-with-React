import PropTypes from 'prop-types'

const Button = ({ color, txt, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn' >
            {txt}</button>
    )
}

Button.defaultProps = {
    color: 'green',
    txt: 'Button'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}
export default Button;