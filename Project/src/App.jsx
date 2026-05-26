import { fetchPhotos, fetchGif, fetchVideos } from './Api/mediaApi'
import ResultGrid from './Components/resultGrid'
import SearchBar from './Components/SearchBar'
import Tab from './Components/Tab'

const App = () => {
  return (
    <div className='h-screen w-full font-bold text-6xl text-white bg-grey-950  bg-black'>

      <SearchBar/>
      <Tab/>
      <ResultGrid/>
      
      {/* <button onClick={async ()=>{
        const data=await fetchPhotos('cat');
        console.log(data.results);

      }}>Get Data</button>

      <button onClick={async ()=>{
        const data=await fetchVideos('cat');
        console.log(data.videos);

      }}>Get Videos</button>

      <button onClick={async ()=>{
        const res=await fetchGif('cat');
        console.log(res.data.data);

      }}>Get Gif</button> */}

    </div>
  )
}

export default App
