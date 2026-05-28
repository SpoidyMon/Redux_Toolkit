import { Routes, Route } from "react-router-dom"
import Homepages from './Pages/Homepages'
import CollectionPage from './Pages/CollectionPage'
import { ToastContainer } from 'react-toastify'
import Navbar from "./Components/Navbar"


const App = () => {
  return (
    <div className='min-h-screen w-full font-bold text-6xl  text-white bg-grey-950  bg-black'>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepages />} />
        <Route path='/Collection' element={<CollectionPage />} />

      </Routes>

      <ToastContainer className='text-4xl px-8 py-4 mx-5 my-2'
        toastClassName="min-w-[400px] md:min-w-[400px]"
        bodyClassName="text-xs md:text-xs font-medium whitespace-nowrap"
      />



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
