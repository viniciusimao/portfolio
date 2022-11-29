import '../style/components/TechContent.sass'
import {
  DiJava,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiBootstrap
} from 'react-icons/di'
import {  SiSpringboot, SiCsharp } from 'react-icons/si'

const technologies = [
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "spring", name: "Spring", icon: <SiSpringboot /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap/>},
  { id: "csharp", name: "Csharp", icon: <SiCsharp/>}
];

const TechContent = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechContent