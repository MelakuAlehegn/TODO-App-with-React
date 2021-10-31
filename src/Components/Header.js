import Button from "./Button";
const Header = ({ title }) => {
    const onClick = () => {
        console.log("click")
    }
    return (
        <header className='header'>
            <h1>Tasks</h1>
            <Button color='green' txt='Add' onClick={onClick} />
            {/* <Button color='steelblue' txt='Make' onClick={onClick} />
            <Button color='#000' txt='Create' onClick={onClick} />
            <Button txt='Add' onClick={onClick} /> */}
        </header>
    )
}

export default Header;