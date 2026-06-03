import React from 'react'
import AcceptTask from './others/AcceptTask'
import NewTask from './others/NewTask'
import FailedTask from './others/FailedTask'
import CompleteTask from './others/CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
        {data.tasks.map((e,idx)=>{
            if(e.active){
                return <AcceptTask key={idx} data={e}/>
            }
            if(e.newTask){
                return <NewTask key={idx} data={e}/>
            }
            if(e.failed){
                return <FailedTask key={idx} data={e}/>
            }
            if(e.completed){
                return <CompleteTask key={idx} data={e}/>
            }
        })}
        
    </div>
  )
}

export default TaskList