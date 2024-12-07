import Page from './pages/landing'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Authentication from './pages/authentication'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeetComponent from './pages/VideoMeet'

import HomeComponent from './pages/home';


function App() {
  return (
    <Router>
   <AuthProvider>
   <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/:url' element={<VideoMeetComponent/>}/>
        <Route path='/home's element={<HomeComponent />} />
     
    </Routes>
   </AuthProvider>
</Router>
 
  )
}

export default App
