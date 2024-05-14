import { AiFillHtml5, AiOutlineNotification, AiFillGitlab, AiFillGithub, AiFillLinkedin, } from 'react-icons/ai'
import {
  BiLogoJavascript, BiLogoPostgresql, BiLogoMongodb,
  BiLogoDjango, BiLogoRedux, BiLogoTailwindCss,
  BiLogoDocker, BiWater, BiLineChart, BiLibrary, BiGitBranch
} from 'react-icons/bi'
import { BsFiletypeSql, BsClipboardMinus, BsFillFileEarmarkPersonFill } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { DiSqllite } from 'react-icons/di'
import { FaPython, FaCss3, FaReact, FaBootstrap,
  FaLock, FaDraftingCompass, FaChalkboardTeacher
} from 'react-icons/fa'
import {FaPeopleGroup, FaMound, FaPanorama,} from 'react-icons/fa6'
import { LuFolder, LuFolders, LuScroll } from 'react-icons/lu'
import { RiMarkupFill, RiOpenaiFill } from 'react-icons/ri'
import { SiNextdotjs, SiMlflow, SiFastapi, SiBulma, SiAutodesk } from 'react-icons/si'
import { TfiTarget } from 'react-icons/tfi'

export const iconGroups = {
  "Languages": [ "Python", "Javascript", "HTML", "CSS", "SQL"],
  "System Design": [ "Docker", "CI/CD", "Monolithic", "Microservices", "Auth"],
  "Frameworks": [ "NextJS", "React", "Redux", "Django", "FastAPI", "Tailwind", "Bootstrap", "Bulma",],
  "Databases & Schema": [ "PostgreSQL", "Mongo", "SQLite"],
  "Technologies": [ "AutoCAD", "Civil 3D", "On Center", "Bluebeam"],
  "Design": [ "Grading & Drainage", "Stormwater Management", "Landscape Architecture"],
  "Construction": ["Estimating", "Takeoffs", "Outreach"],
  "Business": [ "Projections", "Contracts", "Training", "Marketing"],
}

export const iconLibrary = {
  "Python": FaPython,
  "Javascript": BiLogoJavascript,
  "HTML": AiFillHtml5,
  "CSS": FaCss3,
  "SQL": BsFiletypeSql,
  "Docker": BiLogoDocker,
  "CI/CD": SiMlflow,
  "Monolithic": LuFolder,
  "Microservices": LuFolders,
  "Auth": FaLock,
  "NextJS": SiNextdotjs,
  "React": FaReact,
  "Redux": BiLogoRedux,
  "Django": BiLogoDjango,
  "FastAPI": SiFastapi,
  "Tailwind": BiLogoTailwindCss,
  "Bootstrap": FaBootstrap,
  "Bulma": SiBulma,
  "PostgreSQL": BiLogoPostgresql,
  "MongoDB": BiLogoMongodb,
  "SQLite": DiSqllite,
  "AutoCAD": SiAutodesk,
  "Civil 3D": SiAutodesk,
  "On Center": TfiTarget,
  "Bluebeam": RiMarkupFill,
  "Grading & Drainage": FaMound,
  "Stormwater Management": BiWater,
  "Landscape Architecture": FaPanorama,
  "Estimating": BsClipboardMinus,
  "Takeoffs": FaDraftingCompass,
  "Outreach": FaPeopleGroup,
  "Projections": BiLineChart,
  "Contracts": LuScroll,
  "Training": FaChalkboardTeacher,
  "Marketing": AiOutlineNotification,
  "OpenAI/GPT3.5": RiOpenaiFill,
  "Library": BiLibrary,
  "Deployed": CgWebsite,
  "Repository": BiGitBranch,
}

export const contactLinks =  [
  {"name": "Gitlab", "icon": AiFillGitlab, "url": "https://gitlab.com/jduriu"},
  {"name": "Github", "icon": AiFillGithub, "url": "https://github.com/jduriu"},
  {"name": "Linkedin", "icon": AiFillLinkedin, "url": "https://www.linkedin.com/in/jonathan-uriu/" },
  {"name": "Resume", "icon": BsFillFileEarmarkPersonFill, "url": "https://docs.google.com/document/d/1GwAr3g1P8gGGC-5W-61Y1E8FO1gU6sf-7adOq5StcR8/edit?usp=sharing" },
]
