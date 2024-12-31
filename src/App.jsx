
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

function App() {

  return (
<FormContextProvider>



 <Confirm/>
 <Steps/>
 {/* <Login/> */}
 {/* <BgShadow/> */}
 {/* <Home/> */}
 </FormContextProvider>

  )
}

export default App

