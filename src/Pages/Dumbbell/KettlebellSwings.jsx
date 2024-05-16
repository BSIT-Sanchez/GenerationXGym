import KettlebellSwingsImage from "./KettlebellSwingsImage"
import Layout from "../../Layout/Layout"
import { FaUserTie } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import {Link} from 'react-router-dom'


const KettlebellSwings = () => {
  return(
    <Layout>
      <div className="container mx-auto adjustPadding pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <KettlebellSwingsImage/>
            <div className="-mt-2 md:-mt-2 lg:-mt-14">
              <div className="flex justify-between items-center mx-2 ">
                <h1 className="font-bold">KettlebellSwings</h1>
                <p className="font-bold">₱2000</p>
              </div>           
              <p className="mx-2 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam, vero adipisci beatae eos facere accusantium repellendus sapiente repudiandae libero cupiditate commodi aspernatur debitis sed hic expedita fuga molestiae sit.</p>
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
                    Julius Dela Torre
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
                    2hr 32 Minutes
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
                    Hard
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
                    1k Students
                  </h2>
                </div>                             
              </div>
              <div className="flex mt-4 justify-center items-center ">
              <Link to="/" className="font-bold bg-bgFooter hover:bg-bgButton cursor-pointer p-2 rounded-md text-fontColor transition-all ease-in-out w-full text-center">Enroll Now</Link>
            </div>
            </div>
           
           
          </div>

        </div>
      </div>
    </Layout>
  )
}
export default KettlebellSwings
