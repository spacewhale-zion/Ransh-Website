import { ContactUs, Footer, PageHeader } from "../containers"

const ContactUsPage = () => {
  const heading = "Get in touch!";
  const description = "Lorem ipsum dolor sit amet consectetur. In id faucibus quis mauris. Nequ ipsum interdum leo venenatis ridiculus .";
  const contact_header = "Contact Us";
  return (
    <div className="app">
      <PageHeader heading={heading} description={description}/>
      <div className="mb-[8rem]">
      <ContactUs header={contact_header}/>

      </div>
      <Footer/>
    </div>
  )
}

export default ContactUsPage
