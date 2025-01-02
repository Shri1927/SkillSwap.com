
import { Button } from "./ui/button"
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header>
        <nav className='flex justify-between items-center border h-10 p-12'>
            <h2 className='flex justify-start text-3xl font-bold text-slate-800'>SkillSwap</h2>
            <div className='flex justify-end items-center'> 
                <Button className='font-bold mr-6' variant={"outline"} 
                onClick={ () => {
                   navigate("/signup");
                }}>Signup</Button>
                <Button className='font-bold mr-6'
                onClick={ () => {
                  navigate("/login");
                }}>Login</Button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
