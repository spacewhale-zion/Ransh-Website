import "./Us.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

function Us() {
  const data = [
    {
      imageUrl: `${images.us01}`,
      title: "Innovative Solutions",
      description:
        "Innovation is key to staying ahead in today's fast-paced world. We pride ourselves on our ability to think outside the box and offer creative, cutting-edge solutions that drive success. Our dedication to continuous improvement ensures that we are always evolving with the latest trends and technologies.",
    },
    {
      imageUrl: `${images.us02}`,
      title: "Expertise Across Industries",
      description:
        "Our solutions span diverse sectors—defense, sports, ed-tech, and gaming—allowing us to bring specialized knowledge and industry insights to every product we build.",
    },
    {
      imageUrl: `${images.us03}`,
      title: "Reliable & Trustworthy",
      description:
        "Reliability is a cornerstone of our business. We understand the importance of meeting deadlines and delivering on our promises. Our clients can count on us to be dependable, transparent, and ethical in all our dealings.",
    },
    {
      imageUrl: `${images.us04}`,
      title: "End-to-End Development",
      description:
        "From conceptualization to final product launch, we handle every stage of development, ensuring a seamless and high-quality process.",
    },
  ];

  return (
    <div className="app__wrapper mt-10 ">
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <h1 className="h1-text">Why Us?</h1>

        <div className="app__profiles ">
          {data.map((item, index) => (
            <>
            <motion.div
              whileInView={{ opacity:[0, 1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item "
              key={item.title + index}
            >
              <div>
                <img src={item.imageUrl} alt={item.title} />
                <h2 className="bold-text mt-2">{item.title}</h2>
              </div>
              <p className="p-text text-[#08006199] text-center mt-3 md:mt-1  font-normal">
                {item.description}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0,1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item-tab "
              key={item.title + index}
            >
                <img src={item.imageUrl} alt={item.title} />
              <div>
              <h2 className="bold-text">{item.title}</h2>
              <p className="p-text text-[#08006199] text-left mt-2   font-normal">
                {item.description}
              </p>
              </div>
               
            </motion.div>
            </>
            
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Us;