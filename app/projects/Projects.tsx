import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Hello World",
    imgSrc: "/public/yajatchaudhary.jpg",
    code: "https://www.github.com",
    projectLink: "www.google.com/",
    tech: ["React", "Nextjs", "Sytled Components"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi quod optio eaque impedit repellat veritatis consectetur magni accusamus vel!",
    modalContent: (
      <>
        <p>
         Worked as a senior developer and created dynamic reusable components, integrated calendly, messaging and project management features.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Styled components,
          connected to a Laravel backend, with data stored in Mysql.
        </p>
      </>
    ),
  },
  {
    title: "Hello World",
    imgSrc: "/public/yajatchaudhary.jpg",
    code: "https://www.github.com",
    projectLink: "www.google.com/",
    tech: ["React", "Nextjs", "Sytled Components"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi quod optio eaque impedit repellat veritatis consectetur magni accusamus vel!",
    modalContent: (
      <>
        <p>
         Worked as a senior developer and created dynamic reusable components, integrated calendly, messaging and project management features.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Styled components,
          connected to a Laravel backend, with data stored in Mysql.
        </p>
      </>
    ),
  },
  {
    title: "Hello World",
    imgSrc: "/public/yajatchaudhary.jpg",
    code: "https://www.github.com",
    projectLink: "www.google.com/",
    tech: ["React", "Nextjs", "Sytled Components"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi quod optio eaque impedit repellat veritatis consectetur magni accusamus vel!",
    modalContent: (
      <>
        <p>
         Worked as a senior developer and created dynamic reusable components, integrated calendly, messaging and project management features.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Styled components,
          connected to a Laravel backend, with data stored in Mysql.
        </p>
      </>
    ),
  },
  {
    title: "Hello World",
    imgSrc: "/public/yajatchaudhary.jpg",
    code: "https://www.github.com",
    projectLink: "www.google.com/",
    tech: ["React", "Nextjs", "Sytled Components"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi quod optio eaque impedit repellat veritatis consectetur magni accusamus vel!",
    modalContent: (
      <>
        <p>
         Worked as a senior developer and created dynamic reusable components, integrated calendly, messaging and project management features.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Styled components,
          connected to a Laravel backend, with data stored in Mysql.
        </p>
      </>
    ),
  },
];
