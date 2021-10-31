const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Add Task</label>
                <input type="text" />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type="text" />
            </div>
            <div className='form-control form-control-check' >
                <label>Reminder</label>
                <input type="checkbox" />
            </div>
            <input type="submit" name='Save' className='btn btn-block' />

        </form>
    )
}

export default AddTask
