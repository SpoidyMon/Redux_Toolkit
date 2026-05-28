import SearchBar from '../Components/SearchBar'
import Tab from '../Components/Tab'
import ResultGrid from '../Components/resultGrid'
import { useSelector } from 'react-redux'


const Homepages = () => {

  const { query } = useSelector((store) => store.search)

  return (
    <div>
      <SearchBar />

      {query != '' ?
        <div>
          <Tab />
          <ResultGrid />
        </div> : ''}

    </div>
  )
}

export default Homepages
