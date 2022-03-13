import { useState,useContext } from "react"
import { DataContext } from "../context/DataProvider"
import { Sort } from "@mui/icons-material"
import FilterBox from "./FilterBox"
const Tabs = ({currentTab,setTab}) => {
  const {upcoming,past} = useContext(DataContext); //importing here to print counts
  const [open,setOpen] = useState(false); //for displaying filterBox 
  return (
    <div className="w-100 py-5 px-[43px] bg-[#292929] flex font-Inter">
        <ul className="flex text-[18px] text-[#D0CBCB] cursor-pointer">
            <li className={"mr-9 duration-300 transition ease-out" + (currentTab === 1 ? 'font-bold border-b-2 text-[#fff]' : 'text-[#D0CBCB]')} onClick={()=>{setTab(1)}}>Nearest rides</li>
            <li className={"mr-9 text-[#D0CBCB] duration-300 transition ease-out" + (currentTab === 2 && 'font-bold border-b-2 text-[#fff]')} onClick={()=>{setTab(2)}}>Upcoming rides ({upcoming.length})</li>
            <li className={"mr-9 text-[#D0CBCB] duration-300 transition ease-out" + (currentTab === 3 && 'font-bold border-b-2 text-[#fff]')} onClick={()=>{setTab(3)}}>Past rides ({past.length})</li>
        </ul>
        <div className="flex ml-auto cursor-pointer">
          <Sort fontSize="medium" className="text-white"/>
          {/* onClick show filterBox */}
          <p className="text-[16px] text-[#F2F2F2] font-medium pl-1 font-Inter" onClick={()=>{setOpen(!open)}}>Filters</p>
          <FilterBox open={open}/>
        </div>
      
    </div>
  )
}

export default Tabs