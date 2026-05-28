import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSLice'

const CollectionCard = ({item}) => {

    const dispatch=useDispatch()

    const removeAllCollection=(item)=>{
        dispatch(removeCollection(item))
        dispatch(removeToast())
    }

    return (
        <div className='w-[18vw]  relative h-80 bg-white rounded-xl overflow-hidden'>

                <a target='_blank' href={item.url} className='h-full'>
                    {item.type == 'photo' ? <img className='w-full h-full object-cover object-center' src={item.src} alt="" /> : ''}
                    {item.type == 'video' ? <video className='w-full h-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                    {item.type == 'gif' ? <img className='w-full h-full object-cover object-center' src={item.src} alt="" /> : ''}
                </a>
                <div id="bottom" className='flex justify-between gap-3 items-center w-full px-4 py-5 absolute bottom-0 text-white'>
                    <h2 className='font-semibold text-xl overflow-hidden h-14 '>{item.title}</h2>

                    <button
                    onClick={()=>{
                        removeAllCollection(item)
                    }}
                        className='bg-red-500 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium text-xl'
                    >Remove</button>
                </div>

            </div>
    )
}

export default CollectionCard
