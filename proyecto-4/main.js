import { printAboutMe } from './src/components/aboutMe/aboutMe';
import { printContact } from './src/components/contact/contact';
import { printHeader } from './src/components/header/header'
import { printInfo } from './src/components/info/info';
import { printProjects } from './src/components/projects/projects';
import { printSkills } from './src/components/skills/skills';
import './style.css'

printHeader();
printAboutMe();
printSkills();
printInfo();
printProjects();
printContact();