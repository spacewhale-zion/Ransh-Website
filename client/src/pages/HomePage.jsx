import { Header, Us, Testimonials, ContactUs, Footer, Numbers, Projects, Faqs } from '../containers'

export const HomePage = () => {
  const contact_header = "Contact Us";
  return (
    <div className='app'>
    <Header/>
    <Us/>
    <Numbers/>
    <Projects/>
    <Testimonials/>
      <Faqs/>
    <ContactUs header={contact_header} />
    <Footer/>
    </div>
  )
}
