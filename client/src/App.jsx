import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactUsPage from './pages/ContactUsPage';
import FAQsPage from './pages/FAQsPage';
import NotFoundPage from './pages/NotFoundPage';
function App() {

  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUsPage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
      <Route path='/faq' element={<FAQsPage/>}/>
      <Route path='/notfound' element={<NotFoundPage/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
