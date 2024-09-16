import { ContactUs, Faqs, Footer, PageHeader } from "../containers"

const FAQsPage = () => {
  const heading = "Frequently Asked Questions (FAQs)";
  const description = "Lorem ipsum dolor sit amet consectetur. In id faucibus quis mauris. Nequ ipsum interdum leo venenatis ridiculus .";
  const contact_header = "For Queries"
  return (
    <div className="app">
      <PageHeader heading={heading} description={description}/>
      <div className="mb-[8rem]">
      <Faqs/>
      <ContactUs header={contact_header}/>
      </div>
      <Footer/>
        
      
    </div>
  )
}

export default FAQsPage
