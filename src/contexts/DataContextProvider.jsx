import {useState,useEffect} from 'react'
import DataContext from './DataContext'
const DataContextProvider = ({children}) => {
  const[selectedSchool,setSelectedSchool]=useState([]);
    const[data,setData]=useState([
      {name:'Mengo ss',status:true, sex:'mixed'},
      {name:'St Marys Kisubi',status:false, sex:'male'},
      {name:'Trinity COllege Nabingo ',status:true, sex:'female'},
      {name:'St Henrys Kitovu',status:false, sex:'Male'},
      {name:'Old Kampala Secondary School',status:true, sex:'mixed'},
      {name:'Nabisunsa Girls',status:false, sex:'female'}
    ]);
    const[searchQuery,setSearchQuery]=useState('');

    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch('api/data')
            const result=await response.json();
            setData(result);
        }
        fetchData();
    },[])

  return (
    <DataContext.Provider value={{data,searchQuery,setSearchQuery,setSelectedSchool}}>
          {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider