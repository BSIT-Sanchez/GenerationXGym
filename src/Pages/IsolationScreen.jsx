
import Layout from '../Layout/Layout'
import IsolationList from '../Components/Isolation/IsolationList'

const IsolationScreen = () => {
  return(
    <Layout>
      <div className="container mx-auto  adjustPadding lg:mx-auto">

        <IsolationList/>

      </div>
    </Layout>
  )
}
export default IsolationScreen