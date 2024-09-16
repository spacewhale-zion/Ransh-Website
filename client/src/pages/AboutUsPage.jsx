import { Footer, Numbers, PageHeader, Testimonials } from "../containers"

const AboutUsPage = () => {
  const heading = "About Us";
  const description = "Lorem ipsum dolor sit amet consectetur. In id faucibus quis mauris. Nequ ipsum interdum leo venenatis ridiculus ."
  return (
    <div className="app">
      <PageHeader heading={heading} description={description}/>
      <div className="mb-[8rem]">
        
      <Numbers/>
    <Testimonials/>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUsPage
