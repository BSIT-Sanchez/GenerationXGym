import { FcGoogle } from "react-icons/fc";
import { LiaFacebook } from "react-icons/lia";
import {Link} from 'react-router-dom'
const Register = () => {
  return(
    <div className=' imagebg 2xl:h-screen sm:h-[120vh] xs:h-[135vh] text-bgFooter'>
      <div className="container mx-auto adjustPadding">
          
          <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-0 2xl:mt-32 2xl:p-10 p-0  2xl:w-[70%] 2xl:ml-60 ml-0 w-full relative rounded-sm'>
            <div className='opacity rounded-md rounded-tr-none rounded-br-none w-full h-full'>
              <img src="/images/registerlogo.png" alt="img" className='rounded-md w-full h-64 2xl:h-96 hidden md:block lg:mt-16 lg:mb-6 '/>
              <div className='absolute 2xl:-top-10 2xl:left-[450px] -top-10 sm:left-[150px] xs:left-[135px]
              flex justify-center items-center gap-1 lg:-top-10 lg:left-[250px]'>
                <img src='/logo.jpg' alt='logo' className="object-cover rounded-full shadow-lg 2xl:w-[150px] 2xl:h-[150px] w-[80px] h-[80px]"/>
                
              </div>
              <div className='w-full 2xl:flex flex-col justify-center items-center pl-10 font-semibold text-fontColor 2xl:text-lg hidden md:block lg:flex lg:flex-col lg:justify-center text-fontColor lg:pr-16 lg:text-[1.5rem]'>
                <p>Start for Free and get</p>
                <p>attracted offers</p>
              </div>
            </div>

            <div className='opacity w-full h-full rounded-md rounded-tl-none rounded-bl-none pb-10'>
              <div className='pl-8 pt-12'>
                <h1 className='font-bold 2xl:text-[25px] text-[20px] text-fontColor'>Get's Started</h1>
                <div className='flex justify-start items-center gap-[0.5px]'> 
                  <p className='text-[15px] text-fontColor'>Already have an account?</p>
                  <Link to='/Login' className='text-[15px] text-bgButton font-bold'>Login</Link>
                </div>
              </div>

              <div className='flex 2xl:pl-20 2xl:pt-6 2xl:gap-2 gap-3 text-[12px] mt-4 sm:pl-3 xs:px-5 xs:text-[10px] lg:justify-center w-full'>
                <div className="flex justify-center items-center gap-1 border p-2 border-bgButton rounded-sm cursor-pointer">                 
                    <FcGoogle className="h-5 w-5"/>
                    <h1 className="text-fontColor">Sign up with Google</h1>
                               
                </div>
                
                <div className="flex justify-center items-center gap-1 border p-2 border-[#3b5998] bg-[#3b5998] rounded-sm cursor-pointer">                 
                    <LiaFacebook className="text-fontColor h-5 w-5" />
                    <h1 className="text-fontColor">Sign up with Facebook</h1>
                               
                </div>

              </div>

              <div className="w-full mt-4 flex justify-center items-center gap-2 pr-9">
                <div className="w-[30%] h-[1px] bg-bgFooter ml-6"></div>
                <div className="text-fontColor">or</div>
                <div className="w-[30%] h-[1px] bg-bgFooter ml-1"></div>
                
              </div>

              <form className="grid md:grid-cols-2 grid-cols-1 justify-start items-start 2xl:pl-8 2xl:pt-6 pl-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="py-1 text-fontColor">FirstName:</label>
                    <div className="p-1 rounded-md bg-fontColor border-bgButton border 2xl:w-[90%] w-[95%] my-2">
                      <input type="text" placeholder="Firstname"  required className="outline-none w-full p-1"/>

                    </div>
                  </div>

                  <div className="col-span-2 md:col-span-1"> 
                    <label className="py-1 text-fontColor">LastName:</label>
                    <div className="p-1 rounded-md bg-fontColor border-bgButton border 2xl:w-[90%] w-[95%] my-2">
                      <input type="text" placeholder="Lastname" required className="outline-none w-full p-1"/>

                    </div>
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="py-1 text-fontColor">Email:</label>
                    <div className="p-1 rounded-md bg-fontColor border-bgButton border 2xl:w-[90%] w-[95%] my-2">
                      <input type="email" placeholder="@gmail.com"  required className="outline-none w-full p-1"/>

                    </div>
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="py-1 text-fontColor">Address:</label>
                    <div className="p-1 rounded-md bg-fontColor border-bgButton border 2xl:w-[90%] w-[95%] my-2">
                      <input type="text" placeholder="Address" required className="outline-none w-full p-1"/>

                    </div>
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="py-1 text-fontColor">Password:</label>
                    <div className="p-1 rounded-md bg-fontColor border-bgButton border 2xl:w-[90%] w-[95%] my-2">
                      <input type="password" placeholder="Password" required className="outline-none w-full p-1"/>

                    </div>
                  </div>

                  <div className="col-span-2 md:col-span-1 mb-4">
                    <label className="py-1 text-fontColor">Comfirmed Password:</label>
                    <div className="p-1 rounded-md bg-fontColor border-bgButton border 2xl:w-[90%] w-[95%] my-2">
                      <input type="password" placeholder="Comfirmed Password" required className="outline-none w-full p-1"/>

                    </div>
                  </div>
                  
                  <div className="col-span-2 md:col-span-2 mb-4">
                    <input type="checkbox" className="rounded-sm"/>
                    <span className="p-1 text-fontColor text-[12px]">I agree <span className="text-bgButton ">Terms of Service</span> and Privacy Policy </span>
                  </div>
                

                             

                <button type="submit" className="2xl:w-[95%] w-[95%] col-span-2  bg-bgButton p-2 rounded-md mt-4 hover:bg-bgFooter transition-all ease-in-out outline-none hover:text-fontColor font-medium">Register</button>
                    
                
              </form>

            </div>
          </div>
        
                
      </div>
    </div>
  
   
  )
}
export default Register