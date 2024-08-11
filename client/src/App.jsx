import './App.scss'
import { Header, Us, Testimonials, ContactUs, Footer } from './containers'
function App() {

  return (
    <div className='app'>
    <Header/>
    <Us/>
    <Testimonials/>
    <ContactUs/>
    <Footer/>
    </div>
  )
}

export default App
