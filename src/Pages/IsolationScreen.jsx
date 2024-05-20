
import Layout from '../Layout/Layout'
import IsolationList from '../Components/Kettebell/IsolationList'

const IsolationScreen = () => {
  return(
    <Layout>
      <div className='dark:bg-bgFooter dark:text-fontColor pb-6'>
        <div className="container mx-auto  adjustPadding lg:mx-auto">
          <IsolationList/>
        </div>
      </div>
      
    </Layout>
  )
}
export default IsolationScreen