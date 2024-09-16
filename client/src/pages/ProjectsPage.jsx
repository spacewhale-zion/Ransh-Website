import { PageHeader, Projects } from "../containers"
import { Footer} from "../containers";

const ProjectsPage = () => {
  const heading = "Successfully delivered Projects";
  const description = "Lorem ipsum dolor sit amet consectetur. In id faucibus quis mauris. Nequ ipsum interdum leo venenatis ridiculus .";

  return (
    <div className="app">
      <PageHeader heading={heading} description={description} />
      <div className="mb-[8rem]">
      <Projects/>
      </div>
    <Footer/>
    </div>
  )
}

export default ProjectsPage
