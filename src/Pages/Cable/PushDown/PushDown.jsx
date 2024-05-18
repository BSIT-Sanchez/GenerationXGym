import PushDownImage from "./PushDownImage"
import Layout from "../../../Layout/Layout"
import { FaUserTie } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoIosBody } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";




const PushDown = () => { 
  const [toggle, setToggle] = useState(false);

  const handler = () => {
    setToggle(!toggle);
  }

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  return(
    <Layout>
      <div className="container mx-auto adjustPadding pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <PushDownImage/>
            <div className="-mt-2 md:-mt-2 lg:-mt-8">
              <div className="flex justify-between items-center mx-2 ">
                <h1 className="font-bold">Push Down </h1>
                <p className="font-bold">₱2990</p>
              </div>           
              <p className="mx-2 mt-2">Cable Curl is a valuable addition to any strength training or bodybuilding routine, particularly for those aiming to develop stronger and more defined biceps.</p>
            </div>
          </div>
          <div>
            <div className="bg-[#ecfdf5] shadow-sm p-3 mt-0 md:mt-12">
              <div className="flex justify-between items-center ">
                <div className="flex justify-center items-center gap-2">
                  <FaUserTie className="text-bgButton"/>
                  <p>Instructor</p>
                </div>
                
                <div>
                  <h1 className="font-medium">
                    Nathaniel Ursua
                  </h1>
                </div>                             
              </div>

              <div className="flex justify-between items-center mt-2 ">
                <div className="flex justify-center items-center gap-2">
                  <FaClock className="text-bgButton"/>
                  <p>Duration</p>
                </div>
                
                <div>
                  <h2 className="font-medium">
                    50 Minutes
                  </h2>
                </div>                             
              </div>

              <div className="flex justify-between items-center mt-2 ">
                <div className="flex justify-center items-center gap-2 -ml-[2px]">
                  <IoIosBody className="text-bgButton text-[20px]"/>
                  <p className="-ml-[4px]">BodyParts</p>
                </div>
                
                <div>
                  <h2 className="font-medium">
                    Biceps
                  </h2>
                </div>                             
              </div>

              <div className="flex justify-between items-center mt-2 ">
                <div className="flex justify-center items-center gap-2">
                  <FaBook className="text-bgButton"/>
                  <p>Course</p>
                </div>
                
                <div>
                  <h2 className="font-medium">
                    Intermediate
                  </h2>
                </div>                             
              </div>

              <div className="flex justify-between items-center mt-2 ">
                <div className="flex justify-center items-center gap-2">
                  <FaClipboardCheck className="text-bgButton"/>
                  <p>Enrolled</p>
                </div>
                
                <div>
                  <h2 className="font-medium">
                    3k Students
                  </h2>
                </div>                             
              </div>
              <div className="flex mt-4 justify-center items-center ">
              <button onClick={handler}className="font-bold bg-bgFooter hover:bg-bgButton cursor-pointer p-2 rounded-md text-fontColor transition-all ease-in-out w-full text-center">Enroll Now</button>
              
            </div>
            </div>
                      
          </div>

        </div>
        {toggle && 
          <div className="absolute 1xs:top-[300px] md:top-[100px] 1xs:w-[92%] 1xs:left-[15px] md:left-[400px] right-0 md:w-[30%] bg-bgButton h-[290px] 1xs:shadow-lg md:shadow-lg md:rounded-lg 1xs:rounded-md flex justify-start items-start flex-col">   
            <div className="flex justify-center items-center flex-col w-full pt-2 pb-6">
              <h1 className="font-bold">Payment</h1>
              <p className="text-center text-[#d1d5db] text-sm">Select a payment option</p>
            </div> 

            <div className="flex gap-1 w-full justify-center items-center ">
              <img src="/images/img1.jpg" className="w-[50%] h-12 rounded-lg object-contain" alt="img1"/>
              <div className="w-full">
                <h1>Push Down</h1>
                <p>₱2990</p>

              </div>
            
            </div>       
    
            <div className="flex justify-center items-center mt-6 md:pl-[60px] 1xs:pl-[30px] md:gap-[60px] 1xs:gap-[50px]">
                  <label className="flex justify-center items-center gap-1">
                    <input
                      type="radio"
                      value="Gcash"
                      checked={selectedOption === 'Gcash'}
                      onChange={handleOptionChange}
                    />
                    <img src="/images/gcash.png" alt="gcash" className="w-15 h-5 object-contain"/>
                  </label>
                  <label className="flex justify-center items-center gap-1">
                    <input
                      type="radio"
                      value="Paymaya"
                      checked={selectedOption === 'Paymaya'}
                      onChange={handleOptionChange}
                    />
                      <img src="/images/paymaya.png" alt="paymaya" className="w-15 h-10 object-contain"/>
                </label>
                
                
            </div>

            <div className="flex justify-center items-center gap-8 w-full mt-10">
              <button className="p-1 bg-[#dc2626] rounded-sm font-normal text-[#fff]" onClick={handler}>Cancel</button>
              <Link to="/Cable/PushDown/video" className="p-1 bg-[#06b6d4] rounded-sm font-normal text-[#fff]">Proceed</Link> 

            </div>



          </div>
        }

        
      </div>
    </Layout>
  )
}
export default PushDown
