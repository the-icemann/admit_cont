import {useState,useEffect} from 'react'
import DataContext from './DataContext'
const DataContextProvider = ({children}) => {
    const[data,setData]=useState([]);
    const[searchQuery,setSearchQuery]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch('api/data')
            const result=await response.json();
            setData(result);
        }
        fetchData();
    },[])

  return (
    <DataContext.Provider value={{data,searchQuery,setSearchQuery}}>
          {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider