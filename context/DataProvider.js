import React,{createContext, useState} from 'react'
export const DataContext = createContext(null);

const DataProvider = ({children}) => {
    
    const [state,setState] = useState('');
    const [city,setCity] = useState('');
    const [check,setCheck] = useState(false);
    const [data, setData] = useState([]); //data for nearest rides
    const [upcoming,setUpcoming] = useState([]); //state for storing upcoming rides
    const [past,setPast] = useState([]); //state for storing upcoming rides
    return (
        <DataContext.Provider value={{state,setState,city,setCity,check,setCheck,data,setData,past,setPast,upcoming,setUpcoming}}>{children}</DataContext.Provider>
    )
}

export default DataProvider