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
    href: "https://drive.google.com/file/d/1A6clkqL3yO0nqlxoGEhd9ZD7XCWaCl5B/view?usp=sharing",
    icon: <RiFileUserLine size={20} />,
  },
];
