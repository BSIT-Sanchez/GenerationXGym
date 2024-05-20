import Layout from "../Layout/Layout"
import { MdMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

const AboutScreen = () => {
  return(
    <Layout>
      <div className="dark:bg-bgFooter dark:text-fontColor pb-6">
        <div className="container mx-auto adjustPadding">
          <div className="grid grid-cols-1 md:grid-cols-3 pt-7 gap-6">
            <div className="col-span-2">          
              <h1 className="font-bold text text-xl">Get In Touch</h1>
              <p className="pt-5 mb-2 md:mb-0">Our fitness gym application provides you with a dedicated mentor who will guide you through your fitness journey, ensuring you achieve your goals.</p>
              
            </div>
            <div className="col-span-1">
              <form className="bg-bgButton p-3 rounded-md shadow-md">
                <input type="text" placeholder="FullName:" required className='outline-none rounded-sm text-sm p-2 w-full text-md mb-2'/>
                <input type="email" placeholder="Email Address:" className='outline-none rounded-sm text-sm p-2 w-full text-md mb-2'/>
                <textarea className="outline-none rounded-sm text-sm p-2 w-full text-md" placeholder="Message:">               
                </textarea>
                <div className="flex justify-end items-center">
                  <button type="submit"className="font-bold text-fontColor bg-bgFooter p-2 mt-2 rounded-lg text-sm">Submit</button>
                </div>
                
              </form>
            </div>
          </div>

          {/**cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-12">
            
          <div className="flex justify-start items-center gap-2 md:gap-6 bg-[#f97416d7] rounded-md p-2 shadow-md wrap">
                <div>
                  < MdMarkEmailUnread className="text-3xl"/>
                </div>
                <div>
                  <h2>Email</h2>
                  <h3 className="font-bold text-sm text-wrap">@fitness Gym.com</h3>
                  
                </div>
  
              </div>     

            
              <div className="flex justify-start items-center gap-2 md:gap-6 bg-[#f97416d7] rounded-md p-2 shadow-md">
                <div>
                  <LuPhoneCall className="text-3xl" />
                </div>
                <div>
                  <h2>Phone</h2>
                  <h3 className="font-bold text-sm">(255)-351-6250</h3>
                </div>
  
              </div>


            
              <div className="flex justify-start items-center gap-2 md:gap-6 bg-[#f97416d7] rounded-md p-2 shadow-md">
                <div>
                  <FaLocationDot className="text-3xl"/>
                </div>
                <div>
                  <h2>Address</h2>
                  <h3 className="font-bold text-sm"></h3>
                  <h3 className="font-bold text-sm">Novaliches QC</h3>
                </div>
  
              </div>       

          </div>
          <h1 className="font-bold text-2xl mt-10">Visit our office</h1>
          {/**schedule */}
          <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-2">
            <div className="">
              
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam, vero adipisci beatae eos facere accusantium repellendus sapiente repudiandae libero cupiditate commodi aspernatur debitis sed hic expedita fuga molestiae sit.</p>
            </div>
            <div className=" rounded-sm text-fontColor relative mt-6">
            <div className="pt-3">
              <div className="bg-bgButton mx-0 rounded-sm p-1 md:mx-6 pt-7 flex justify-center flex-col items-center"> 
                <h1>Monday - Friday</h1>
                <span className="absolute top-0 left-[35%] md:left-[40%] bg-[#ef4444] paddingButton py-1 rounded-lg text-sm"> Hours </span>
                <h1 className="">9am - 5pm</h1>
                <h1>Saturday</h1>
                <h1 className="">9am - 5pm</h1>
              </div>
            </div>
              
              
            </div>
          </div>

        </div>

      </div>
      
    </Layout>
  )
}
export default AboutScreen
