import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home">
    <div className="flex justify-center items-center w-full bg-blue-200">
      <img className="animate__animated animate__fadeIn lg:w-1/2" src="/images/portfolio_top.png" alt="ポートフォリオ" />
    </div>
  </Layout>
)

export default IndexPage
