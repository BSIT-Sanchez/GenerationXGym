import Layout from "../../../Layout/Layout"
import { FaUserTie } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import PullDownVideo from "./PullDownVideo";
import AutoScroll from "./AutoScroll";

const  PullDownDetails = () => { 
  return(
    <Layout>
      <div className="dark:bg-bgFooter dark:text-bgFooter md:pb-16">
      <div className="container mx-auto adjustPadding pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <PullDownVideo/>
            <div className="-mt-2 md:-mt-2 lg:-mt-[13rem] dark:text-fontColor">
              <div className="flex justify-between items-center mx-2 ">
                <h1 className="font-bold">Pull Down</h1>
                <p className="font-bold">₱2,100</p>
              </div>           
              <p className="mx-2 mt-2">A pull-down typically refers to the lat pull-down exercise, which is performed on a machine and is designed to target the muscles of the back, particularly the latissimus dorsi (lats). </p>
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
                    30 Minutes
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

              <div className="flex flex-col justify-between items-center mt-10 ">
                <h1 className="font-bold text-[16px] text-[#f97316]">FOLLOW THE GUIDELINES</h1>
                <AutoScroll/>
              </div>
              
            </div>

          
                      
          </div>

        </div>
        

        
      </div>
      </div>
    </Layout>
  )
}
export default PullDownDetails

