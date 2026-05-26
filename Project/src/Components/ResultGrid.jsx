import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { fetchPhotos, fetchGif, fetchVideos } from '../Api/mediaApi'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, error, results, loading } = useSelector((store) => store.search)






    useEffect(function () {

        if(!query || query.trim() === '') return

        const getdata = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photos',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.big,
                        url: item.links.html,

                    })) || []
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'videos',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url,
                    })) || []
                }
                if (activeTab == 'gif') {
                    let response = await fetchGif(query)
                    data = response.data.data.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title: item.title || 'GIF',
                        thumbnail: item.file.hd.png.url,
                        src: item.file.hd.gif.url,
                        url: item.file.hd.gif.url,


                    })) || []
                }

                dispatch(setResults(data))
                console.log(data)
            } catch (err) {
                dispatch(setError(err.message));
            }
        }

        getdata()
    }, [query, activeTab,dispatch])


    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        
        <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid
