import CoreSide from './CoreSide'

const CoreMenu = ({children}) => {
  return(
    
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="">
            <CoreSide/>
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
export default CoreMenu