import {
  RiFileUserLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "react-icons/ri";

export const contacts = [
  { href: "https://github.com/IFAKA", icon: <RiGithubLine size={19} /> },
  {
    href: "https://www.linkedin.com/in/faka/",
    icon: <RiLinkedinBoxLine size={20} />,
  },
  { href: "mailto:me@faka.dev", icon: <RiMailLine size={20} /> },
  {
    href: "https://docs.google.com/document/d/1LmdIIMoGstnywAwh2e8QXqMZ3YSmWmUENMMkO4nCvwc/edit?usp=sharing",
    icon: <RiFileUserLine size={20} />,
  },
];

export const SINGLE_JSX =
  "```\nconst condition = boolean\n\n<Render when={condition}>\n  <Body />\n</Render>\n```";
export const MULTIPLE_JSX =
  "```\nconst conditions = [\n  booleanForNav,\n  booleanForBody,\n  booleanForFooter\n}\n\n<Render when={conditions}>\n  <Nav />\n  <Body />\n  <Footer />\n</Render>\n```";
