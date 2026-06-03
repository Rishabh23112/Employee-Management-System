import  { useState } from 'react'

const Login = ({loginHandler}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    loginHandler(email,password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className=' flex  items-center justify-center h-screen '>
        <div className='border-2 border-amber-600 rounded-2xl px-20 py-25'>
            <form 

            onSubmit={
                  (e)=>{
                    submitHandler(e)
                    
                  }
                }
            
            className="flex flex-col items-center justify-center" >
              

                <input 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                
                
                className='rounded-2xl px-2 py-1 flex border-2 border-amber-600 outline-none' type="email" placeholder='E-mail'/>
                <input 
                
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                
                className=" border-2 border-amber-600 outline-none px-2 py-1 rounded-2xl mt-2" type="password" placeholder='Password'/>

                <button className='mt-7 w-full hover:bg-green-950 bg-green-700 text-white font-semibold px-8 py-1 rounded-full'>Log In</button>
            </form> 
        </div>
        
    </div>
  )
}

export default Login