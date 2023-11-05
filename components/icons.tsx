import { AiFillHtml5, AiOutlineNotification, AiFillGitlab, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {
  BiLogoJavascript, BiLogoPostgresql, BiLogoMongodb,
  BiLogoDjango, BiLogoRedux, BiLogoTailwindCss,
  BiLogoDocker, BiWater, BiLineChart
} from 'react-icons/bi'
import { BsFiletypeSql, BsClipboardMinus } from 'react-icons/bs'
import { DiSqllite } from 'react-icons/di'
import { FaPython, FaCss3, FaReact, FaBootstrap,
  FaLock, FaDraftingCompass, FaChalkboardTeacher
} from 'react-icons/fa'
import {FaPeopleGroup, FaMound, FaPanorama,} from 'react-icons/fa6'
import { LuFolder, LuFolders, LuScroll } from 'react-icons/lu'
import { RiMarkupFill } from 'react-icons/ri'
import { SiNextdotjs, SiMlflow, SiFastapi, SiBulma, SiAutodesk } from 'react-icons/si'
import { TfiTarget } from 'react-icons/tfi'

  export const iconGroups = {
    "Languages": [
      {"name": "Python", "icon": FaPython},
      {"name": "Javascript", "icon": BiLogoJavascript},
      {"name": "HTML", "icon": AiFillHtml5},
      {"name": "CSS", "icon": FaCss3},
      {"name": "SQL", "icon": BsFiletypeSql},
    ],
    "System Design": [
      {"name": "Docker", "icon": BiLogoDocker},
      {"name": "CI/CD", "icon": SiMlflow},
      {"name": "Monolithic", "icon": LuFolder},
      {"name": "Microservices", "icon": LuFolders},
      {"name": "Auth", "icon": FaLock},
    ],
    "Frameworks": [
      {"name": "NextJS", "icon": SiNextdotjs},
      {"name": "React", "icon": FaReact},
      {"name": "Redux", "icon": BiLogoRedux},
      {"name": "Django", "icon": BiLogoDjango},
      {"name": "FastAPI", "icon": SiFastapi},
      {"name": "Tailwind", "icon": BiLogoTailwindCss},
      {"name": "Bootstrap", "icon": FaBootstrap},
      {"name": "Bulma", "icon": SiBulma},
    ],
    "Databases & Schema": [
      {"name": "PostgreSQL", "icon": BiLogoPostgresql},
      {"name": "Mongo", "icon": BiLogoMongodb},
      {"name": "SQLite", "icon":DiSqllite },
    ],
    "Technologies": [
      {"name": "AutoCAD", "icon": SiAutodesk},
      {"name": "Civil 3D", "icon": SiAutodesk},
      {"name": "On Center", "icon": TfiTarget },
      {"name": "BlueBeam", "icon": RiMarkupFill },
    ],
    "Design": [
      {"name": "Grading & Drainage", "icon": FaMound},
      {"name": "Stormwater Management", "icon": BiWater},
      {"name": "Landscape Architecture", "icon": FaPanorama},
    ],
    "Construction": [
      {"name": "Estimating", "icon": BsClipboardMinus},
      {"name": "Takeoffs", "icon": FaDraftingCompass},
      {"name": "Outreach", "icon": FaPeopleGroup},
    ],
    "Business": [
      {"name": "Projections", "icon": BiLineChart},
      {"name": "Contracts", "icon": LuScroll},
      {"name": "Training", "icon": FaChalkboardTeacher},
      {"name": "Marketing", "icon": AiOutlineNotification},
    ],
    "Links": [
      {"name": "Gitlab", "icon": AiFillGitlab, "url": "https://gitlab.com/jduriu"},
      {"name": "Github", "icon": AiFillGithub, "url": "https://github.com/jduriu"},
      {"name": "Linkedin", "icon": AiFillLinkedin, "url": "https://www.linkedin.com/in/jonathan-uriu/" },
    ]
  }
