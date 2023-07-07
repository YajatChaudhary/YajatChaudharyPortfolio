import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "HCode Technologies Pvt. Ltd.",
    position: "Software Engineer Intern",
    time: "June 2023 - July 2023",
    location: "Karnal, Haryana",
    description:
      "",
    tech: [
      "React.js",
      "Next.js",
      "Jira",
      "React Native",
      "Sass",
    ],
  },
  {
    title: "Pixonoids",
    position: "Co-ordinator web",
    time: "Dec 2023 - April 2023",
    location: "Hamirpur, Himachal Pradesh",
    description:
      "",
    tech: [
      "React.js",
      "Next.js",
      "Jira",
      "React Native",
      "Sass",
    ],
  },
];
