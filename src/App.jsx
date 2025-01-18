import Steps from './Pages/Steps'
import Confirm from './Pages/Confirm'
import FormContextProvider from './contexts/FormContextProvider'
import DataContextProvider from './contexts/DataContextProvider'
import { BrowserRouter, Routes} from "react-router-dom";
import Landing from "./Pages/Landing.jsx";

function App() {

  return (
<FormContextProvider>
 <DataContextProvider>

     <Landing/>
 </DataContextProvider>
</FormContextProvider>





  )
}

export default App

