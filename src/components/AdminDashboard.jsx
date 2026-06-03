
import Header from './Header'
import CreateTask from './CreateTask'
import AllTask from './AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7'>
        <Header/>

        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard