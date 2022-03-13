import { useContext } from 'react'
import {DataContext} from '../context/DataProvider'
const FilterBox = ({open}) => {
  const {state,setState,city,setCity,check,setCheck,data} = useContext(DataContext);


  //function which runs onchanging state 
  const handleStateChange = (e) => {
    setState(e.target.value);
  }

  //function which runs onchanging city 
  const handleCityChange = (e) => {
    setCity(e.target.value);
    setCheck(!check); // change check for rendering data which is in Cards.js 
  }

  //clearing all filters 
  const clearFilter = () => {
    setState('');
    setCity('');
    setCheck(!check);
  } 

  return (
    <div>
    {open && <div className='bg-[#131313] flex flex-col px-[30px] py-[20px] rounded-xl fixed ml-[-230px] mt-[30px]'>
        <span className='text-[#A5A5A5] font-SF font-light text-[20px] leading-[23px] after:border after:border-[#CBCBCB] after:block after:my-[12px]'>Filter</span>
        <div className='flex flex-col font-SF'>
          <select className='bg-[#232323] text-white text-2 w-[168px] px-[8px] py-[12px] rounded-md outline-none mx-auto mb-[12px] mt-[15px]' onChange={handleStateChange}>
            <option value={state} defaultValue="State">{state !== '' ? state : 'State'}</option>
            {data.map((ele)=>{
              return <option value={ele.state} key={ele.id * Math.random()}>{ele.state}</option>
            })}
          </select>
          <select className='bg-[#232323] text-white text-2 w-[168px] px-[8px] py-[12px] rounded-md outline-none mx-auto' onChange={handleCityChange}>
          <option value={city} selected>{city !== '' ? city : 'City'}</option>
          {data.map((ele)=>{
              //only show cities when state is selected
              return state !== '' && ele.state === state && <option value={ele.city} key={ele.id * Math.random()}>{ele.city}</option>
            })}
          </select>
        </div>
        <button className='border border-white p-1 mt-2 text-white rounded' onClick={clearFilter}>Clear Filter</button>
    </div>}
    </div>
  )
}

export default FilterBox