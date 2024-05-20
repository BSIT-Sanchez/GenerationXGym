import SideBarList from "../Components/Barbell/BarbellList"
import Layout from '../Layout/Layout'

const UpperList = () => {
  return(
    <Layout>
      <div className="dark:bg-bgFooter dark:text-fontColor pb-6">
        <div className="container mx-auto  adjustPadding lg:mx-auto">

          <SideBarList/>

        </div>

      </div>
  
    </Layout>
  )
}
export default UpperList