
import Layout from '../Layout/Layout'
import CompoundList from '../Components/Machine/CompoundList'

const CompoundScreen = () => {
  return(
    <Layout>
      <div className='dark:bg-bgFooter dark:text-fontColor pb-6'>
        <div className="container mx-auto  adjustPadding lg:mx-auto">
          <CompoundList/>
        </div>
      </div>
      
    </Layout>
  )
}
export default CompoundScreen