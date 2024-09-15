import { Header, Us, Testimonials, ContactUs, Footer, Numbers, Projects, Faqs } from '../containers'

export const HomePage = () => {
  return (
    <div className='app'>
    <Header/>
    <Us/>
    <Numbers/>
    <Projects/>
    <Testimonials/>
      <Faqs/>
    <ContactUs/>
    {/* <Footer/> */}
    </div>
  )
}
