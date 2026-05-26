import axios from 'axios'

const UNSPLASH_KEY=import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY=import.meta.env.VITE_PEXELS_KEY
const KLIPY_KEY=import.meta.env.VITE_KLIPY_KEY

export async function fetchPhotos(query,page=1,per_page=20){
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization: `Client-ID ${UNSPLASH_KEY}`}
})
return response.data

}

export async function fetchVideos(query,per_page=15){
    const response=await axios.get('https://api.pexels.com/v1/videos/search',{
        params:{query,per_page},
        headers:{Authorization: PEXELS_KEY}
})
return response.data

}

export async function fetchGif(query,page=1,per_page=20){
    const response=await axios.get(`https://api.klipy.com/api/v1/${KLIPY_KEY}/stickers/search?page=${page}&per_page=${per_page}&q=${query}`,{
})
return response.data

}