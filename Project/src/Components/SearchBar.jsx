import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'


const SearchBar = () => {

  const dispatch=useDispatch()

  const [text, setText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(text)
    dispatch(setQuery(text));

    setText('')    
  }

  return (
    <div>
      <form action=""
        className='w-full gap-5 flex bg-indigo-800 px-10 py-6 '

        onSubmit={(e) => {
          submitHandler(e)
        }}
      >

        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)            
          }
          }
          
          required
          className='w-full border-2 px-6 py-2 text-3xl rounded outline-none'
          placeholder='Search here....' />

        <button
          className='cursor-pointer active:scale-95 border-2 py-2 px-6 text-3xl rounded outline-none'

        >Search</button>
      </form>
      
    </div>
  )
}

export default SearchBar