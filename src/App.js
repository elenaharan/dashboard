import './App.css';
import Weather from './components/weather/Weather';
import Title from './components/Title/Title';

function App() {
  return (
    <>
      <Title name='Elena' />
      <Weather />
      <div className='box'>
        <h2 className='box-title'>News</h2>
        <rssapp-wall id="cn6ENfh0uVidcXR4"></rssapp-wall>
      </div>
    </>
  );
}

export default App;
