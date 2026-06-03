

const TaskListNumbers = ({data}) => {
  return (
    <div className='mt-10 flex gap-5 justify-between'>
        <div className='bg-red-400 rounded-xl px-9 py-6 w-[45%]'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium mt-0.5'>New Task</h3>
        </div>
        <div className='bg-blue-400 rounded-xl px-9 py-6 w-[45%]'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium mt-0.5'>Completed Task</h3>
        </div>
        <div className='bg-green-400 rounded-xl px-9 py-6 w-[45%]'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium mt-0.5'>Accepted Task</h3>
        </div>
        <div className='bg-yellow-400 rounded-xl px-9 py-6 w-[45%]'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium mt-0.5'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers