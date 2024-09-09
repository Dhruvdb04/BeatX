import "../App.css"
import { ChatState } from '../Context/ChatProvider';
import Navbar from '../components/common/Navbar';
import "../css/responsive.css";
import "../css/style.css";
import Slider from "../assets/slider.png";
import BG from "../assets/hero-bg2.png";
import { Link } from "react-router-dom";



const Home = () => {
  const {user} = ChatState(); 


  return (
    <div>
      
      <div className='w-full'>
        {/* Navbar */}
        <Navbar/>

        <div className="flex justify-center items-center text-white"
          style={{
            backgroundImage: `url(${BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          <div className="flex flex-row justify-center items-center">
            <div className="w-[40%] flex flex-col gap-4">
              <h1 className="text-[35px] font-bold">Elevate Your Evaluation Process</h1>
              <p>Discover a smarter way to streamline paper checking with EvaluaTeach. Our platform revolutionizes how organizations and educators assess and manage academic papers with unparalleled efficiency and accuracy.</p>

              <div className="flex justify-center items-center gap-4 mt-4">
                <Link to='/contact' className="py-2 px-4 text-[#000] bg-slate-300 rounded-full">
                  Contact us
                </Link>
                <Link to='/about' className="py-2 px-4 text-white bg-slate-600 rounded-full">
                  About
                </Link>
              </div>
            </div>
            <div className="w-[35%]">
              <img src={Slider} alt="Slider" className="w-full object-fit rounded-2xl"/>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home