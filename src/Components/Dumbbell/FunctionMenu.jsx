import FunctionSide from './FunctionSide'

const FunctionMenu = ({children}) => {
  return(
    
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="">
            <FunctionSide/>
          </div>
          <div 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="col-span-3 ">

            {children}
          </div>
        </div>

      
  )
}
export default FunctionMenu