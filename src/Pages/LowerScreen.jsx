
import Layout from '../Layout/Layout'
import LowerList from '../Components/BodyWeight/LowerList'

const LowerScreen = () => {
  return(
    <Layout>
      <div className='dark:bg-bgFooter dark:text-fontColor pb-6'>
        <div className="container mx-auto  adjustPadding lg:mx-auto">
          <LowerList/>
          </div>
      </div>
      
    </Layout>
  )
}
export default LowerScreen