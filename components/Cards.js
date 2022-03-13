import React from 'react'
import { useContext } from 'react'
import {DataContext} from '../context/DataProvider'
import Card from './Card'
const Cards = ({currentTab}) => {
  const {city,state,data,upcoming,past} = useContext(DataContext); //context where state & city is stored
  
  

  return (
    <div className='px-[43px] w-[100%] flex flex-col'>
        {/* if city is not selected show all data else show filtered data */}
        {currentTab === 1 ? data.map((ele,idx)=>{
                                                                // if(city) show nearest rides with selected city & state    else show all nearest ride
            return city !== '' ? ele.state === state && ele.city === city && <Card key={idx * Math.random()} info={ele} /> : <Card key={idx * Math.random()} info={ele} /> 
        }) : currentTab === 2 ? upcoming.map((ele,idx)=>{          //if tab == 2 show upcoming rides data 
            return <Card key={idx * Math.random()} info={ele}/>})
          :  past.map((ele,idx)=>{                                //else if(tab == 3) show past rides
            return <Card key={idx * Math.random()} info={ele}/>}) }
    </div>
  )
}

export default Cards