
import SteperTitle from './components/SteperTitle'
import Home from './Pages/Home'
import Steps from './Pages/Steps'
import Logo from './components/Logo'
import Stepper from './components/Stepper'
import AbountContent from './components/AbountContent'
import ConfirmDescr from './components/ConfirmDescr'
import Confirm from './Pages/Confirm'
import Login from './Pages/Login'
import BgShadow from './components/BgShadow'
import FormContextProvider from './contexts/FormContextProvider'
import DataContextProvider from './contexts/DataContextProvider'

function App() {

  return (
<FormContextProvider>
<DataContextProvider>


  {/* <Confirm/> */}
 <Steps/> 
 {/* <Login/> */}
 {/* <BgShadow/> */}
 {/* <Home/> */}
 </DataContextProvider>
 </FormContextProvider>

  )
}

export default App

