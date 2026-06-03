
import Header from "./Header"
import TaskList from "./TaskList"
import TaskListNumbers from "./TaskListNumbers"


const EmployeeDashboard = ({data}) => {
  return (
    <div className="p-20 bg-[#1C1C1C] h-screen">
      <Header data={data}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
      
    </div>
  )
}

export default EmployeeDashboard