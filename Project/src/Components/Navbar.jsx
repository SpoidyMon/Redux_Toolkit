import {Link} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-6 py-7 bg-[#3D348B]'>
            <Link to='/' className='text-3xl px-4'> <i class="ri-seo-line"></i> MediaSearch</Link>
            <div className='flex justify-between gap-6 items-center'>
                <Link to='/' className='font-bold text-3xl bg-white text-[#3D348B] px-4 py-1 rounded-2xl' >Search</Link>
                <Link to='/Collection' className='font-bold text-3xl bg-white text-[#3D348B] px-4 py-1 rounded-2xl' >Collection</Link>
            </div>

        </div>
    )
}

export default Navbar
