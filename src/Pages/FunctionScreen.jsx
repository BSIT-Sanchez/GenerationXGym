
import Layout from '../Layout/Layout'
import FunctionList from '../Components/Dumbbell/FunctionList'

const FunctionScreen = () => {
  return(
    <Layout>
      <div className='dark:bg-bgFooter dark:text-fontColor pb-6'>
        <div className="container mx-auto adjustPadding lg:mx-auto">
          <FunctionList/>
        </div>
      </div>
      
    </Layout>
  )
}
export default FunctionScreen