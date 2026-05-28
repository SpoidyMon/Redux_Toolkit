import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../Components/CollectionCard';
import 'remixicon/fonts/remixicon.css'
import { clearCollection } from '../redux/features/collectionSLice';

const CollectionPage = () => {

  const dispatch = useDispatch();
  const collection = useSelector(state => state.collection.items)

  const clearAll = () => {
    dispatch(clearCollection());
  }

  return (
    <div className='overflow-auto px-10  py-6' >

      {(collection.length > 0 ? <div className="flex justify-between  pb-6 items-center">

        <h2 className='text-3xl text-indigo-800 bg-white rounded-2xl font-bold px-4 py-2 '>Your Collections</h2>

        <button
          onClick={() => {
            clearAll()
          }}
          className='text-3xl rounded-2xl active:scale-95 font-bold px-4 py-2 text-black bg-white'
        >Clear Collections <i class="ri-delete-bin-6-line"></i></button>
      </div> :
        <div className="flex justify-between  pb-6 items-center">
          <h2
            className='text-3xl text-indigo-800 bg-white rounded-2xl font-bold px-4 py-2 '
          >Collection is empty...</h2>
        </div>
      )}


      <div className='flex flex-wrap items-center justify-start gap-6 w-full'>
        {collection.map((item, idx) => {
          return <div key={idx}>
            <CollectionCard item={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default CollectionPage
