import React from 'react'
import moment from 'moment'
const Card = ({info}) => {
  return (
    <div className='w-100 h-50 bg-[#171717] p-6 flex mb-2 rounded-lg font-Inter'>
        <img src={info.map_url} alt={info.city} className='w-[300px] h-[150px] bg-cover rounded'/>
        <div className='pl pl-12 text-[#cfcfcf] font-medium flex flex-col justify-between'>
            <p>Ride id : <span className='text-white'>{info.id}</span></p>
            <p>Origin Station : <span className='text-white'>{info.origin_station_code}</span></p>
            <p>Station Path : <span className='text-white'>{JSON.stringify(info.station_path)}</span></p>
            <p>Date : <span className='text-white'>{moment(info.date).format('MMM Do YYYY h:mm')}</span></p>
            <p>Distance : <span className='text-white'>{info.dis}</span></p>
        </div>
        <div className='ml-auto'>
            <span className='text-white py-1 px-3 bg-black text-xs font-medium mr-8 rounded-xl'>{info.city}</span>
            <span className='text-white py-1 px-3 bg-black text-xs font-medium rounded-xl'>{info.state}</span>
        </div>
    </div>
  )
}

export default Card