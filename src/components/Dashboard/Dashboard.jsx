import Weather from "../weather/Weather"

const Dashboard = () => {
  return (
    <>
      <Weather />
      <div className='box'>
          <h2 className='box-title'>News</h2>
          <rssapp-wall id="cn6ENfh0uVidcXR4"></rssapp-wall>
      </div>
    </>
  )
}

export default Dashboard;