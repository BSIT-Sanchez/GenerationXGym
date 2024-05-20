
import Layout from '../Layout/Layout'
import CoreList from '../Components/Cable/CoreList'

const CoreScreen = () => {
  return(
    <Layout>
      <div className='dark:bg-bgFooter dark:text-fontColor pb-6'>
        <div className="container mx-auto  adjustPadding lg:mx-auto">
          <CoreList/>
        </div>
      </div>
      
    </Layout>
  )
}
export default CoreScreen