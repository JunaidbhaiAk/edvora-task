import { useEffect, useState,useContext } from "react";
import {DataContext} from "../context/DataProvider";
import axios from "axios";
import Navbar from "../components/Navbar"; //Navigation
import Tabs from "../components/Tabs"; //Tabs
import Cards from "../components/Cards";  //Card Container
import PageHead from "../components/PageHead"; //Head of Website
import { getNearestData,getPastData, getUpcomingData } from "../utils/utils";


export async function getStaticProps() {
  const res = await axios.get("https://assessment.api.vweb.app/rides");
  const userres = await axios.get("https://assessment.api.vweb.app/user");
  const x = res.data;
  return {
    props: {
      ridesData: x,  //rides information
      userData: userres.data, //userInformation
    },
  };
}

const Home = ({ ridesData, userData }) => {
  const [alldata, setAlldata] = useState([]); //all original data
  const {data,setData,setUpcoming,setPast,city,state,check} = useContext(DataContext); // nearest rides data stored in context
  const [user, setUser] = useState({}); //userInformation
  
  const [tab, setTab] = useState(1); //tab state for switching tab in Tabs components
  useEffect(() => {
    setUser(userData);
    setAlldata(ridesData);
    const k = getNearestData(alldata, user.station_code); //function for filtering nearest data from alldata according to user station
    setData(k);
  }, [alldata.length]); // whenever alldata is set run useEffect

  useEffect(()=>{
    setUpcoming(getUpcomingData(data,city,state)); //function in util.js for filtering upcoming rides
    setPast(getPastData(data,city,state)); //function in util.js for filtering past rides
  },[data.length,tab,check])
  return (
    <div className="min-h-screen bg-[#292929]">
      <PageHead />
      <Navbar userName={user.name}/>
      <Tabs currentTab={tab} setTab={setTab} />
      <Cards currentTab={tab} />
    </div>
  );
};

export default Home;
