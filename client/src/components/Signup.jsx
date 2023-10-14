import { useState } from "react"
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.id] : e.target.value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()

    fetch('/api/auth/signup', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData)
    })
      .then(res => {
        console.log('Success >>>>>>>', res)
        setFormData({
          username: "",
          email: "",
          password: "",
        })
      })
      .catch(err => {
        console.log('Error >>>>>>', err)
      })

  }
  return (
    <div className="flex flex-col mx-auto max-w-lg">
      <h3 className="text-black-500 font-bold text-center mb-3">Signup</h3>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" onChange={handleChange} value={formData.username} id="username" placeholder="Enter Username" className="mb-4 rounded-md p-2 outline-none"/>
        <input type="text" onChange={handleChange} value={formData.email} id="email" placeholder="Enter Email" className="mb-4 rounded-md p-2 outline-none"/>
        <input type="text" onChange={handleChange} value={formData.password} id="password" placeholder="Enter Password" className="mb-4 rounded-md p-2 outline-none" />

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign up</button>

      </form>
    </div>
  )
}

export default Signup