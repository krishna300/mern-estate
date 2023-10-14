import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="flex justify-between bg-blue-500 p-4">
       <Link to = "/">
        <h1 className="font-bold">Krishnas <span className="text-yellow-500">Estate</span></h1>
       </Link>
        <Link to='/sign-up'>Sign up</Link>
    
    </div>
  )
}

export default Header