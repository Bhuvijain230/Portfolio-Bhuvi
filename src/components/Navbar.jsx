import logo from "../assets/BJLogo.jpg";
import '../index.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-1" >
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>  
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/bhuvi-jain-223a9a262">
  <FaLinkedin />
</a>
<a href="https://github.com/Bhuvijain230">
<FaGithub />
</a>
<a href="https://x.com/itsbhuvij?s=08">
<FaTwitter />
</a>
      
    </div>
  </nav>
  
   
)
}

export default Navbar
