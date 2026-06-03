import { useContext, useEffect, useState } from 'react'
import AdminDashboard from './components/AdminDashboard'
import EmployeeDashboard from './components/EmployeeDashboard'
import Login from './components/Login'
import { AuthContext } from './context/AuthContext'


const App = () => {
  
  
  
  const [user, setUser] = useState(null)

  const [loggedInUserData, setloggedInUserData] = useState(null)
  
  const [userData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser=localStorage.getItem("loggedInUser")
    
      if(loggedInUser){
        const userData=JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInUserData(userData.data)
      }
    
  
  
  }, [])
  
  
  
  
  const loginHandler=(email,password)=>{
    if(email=='admin@gmail.com' && password==123){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){

      const employee= userData.employees && userData.employees.find((e)=>email==e.email && e.password==password)

      if(employee){

        setUser('employee')

        setloggedInUserData(employee)
        
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
      }
    }
    else{
      alert('Invalid Credentials')
    }
    
  }
  
  
  
  return (
    <div>
      {!user ? <Login loginHandler={loginHandler}/> :''}
      {user=='admin' ? <AdminDashboard/> : (user=='employee' ? <EmployeeDashboard data={loggedInUserData}/>:null)}

    </div>
  )
}

export default App