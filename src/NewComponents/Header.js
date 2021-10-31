import Button from "./Button"
const Header = () => {
    const onClick = () => {
        console.log('Clicked')
    }
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color='Steelblue' title='Add' onClick={onClick} />
        </header>
    )
}

export default Header
