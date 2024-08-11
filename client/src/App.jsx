import './App.scss'
import { Header, Us, Testimonials, ContactUs, Footer, Numbers } from './containers'
function App() {

  return (
    <div className='app'>
    <Header/>
    <Us/>
    <Numbers/>
    <Testimonials/>
    <ContactUs/>
    <Footer/>
    </div>
  )
}

export default App
