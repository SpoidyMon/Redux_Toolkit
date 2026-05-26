import React from 'react'

const ResultCard = ({ item }) => {
    return (
        <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
            
            <a href="">
                {item.type == 'photo' ? <img className='w-full object-cover object-center' src="item.src" alt="" />: ''}
                {item.type == 'video' ? <video className='w-full object-cover object-center' autoPlay loop muted src="item.src"></video>: ''}
                {item.type == 'gif' ? <img className='w-full object-cover object-center' src="item.src" alt="" />: ''}
            </a>
            <div id="bottom" className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                <h2 className='font-semibold text-xl overflow-hidden h-14 captilize'>{item.title}</h2>
                {/* <button>Save</button> */}
            </div>

        </div>
    )
}

export default ResultCard
