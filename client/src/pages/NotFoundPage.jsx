import { Footer, PageHeader } from "../containers"

const NotFoundPage = () => {
  const heading = "404 Page Not Found";
  const description = "Oops! The page you are looking for does not exist.";

  return (
    <div className="app">
      <PageHeader heading={heading} description={description}/>
      <div className="flex justify-center items-center my-[4rem]">
      <img src={'./404.webp'} alt='not_found'/>

      </div>
      <Footer/>
    </div>
  );
}

export default NotFoundPage
