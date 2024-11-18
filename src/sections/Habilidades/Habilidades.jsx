import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faReact, faLinux, faPhp, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import styles from './HabilidadesStyle.module.css'; // Importa el archivo CSS como módulo

const habilidadesData = [
  {
    icon: faLaptopCode,
    title: 'Front-end',
    description: 'Creación de interfaces de usuario modernas y responsive.',
    tags: [
      { name: 'HTML', icon: faHtml5, color: '#E34F26' },
      { name: 'CSS', icon: faCss3Alt, color: '#1572B6' },
      { name: 'React.js', icon: faReact, color: '#61DAFB' },
    ],
  },
  {
    icon: faServer,
    title: 'Back-end',
    description: 'Desarrollo y mantenimiento de servidores y APIs.',
    tags: [
      { name: 'Linux', icon: faLinux, color: '#FCC624' },
      { name: 'Apache', icon: faServer, color: '#D22128' },
    ],
  },
  {
    icon: faDatabase,
    title: 'Bases de Datos',
    description: 'Gestión y optimización de bases de datos relacionales y NoSQL.',
    tags: [
      { name: 'MySQL', icon: faDatabase, color: '#4479A1' },
      { name: 'PostgreSQL', icon: faDatabase, color: '#336791' },
    ],
  },
  {
    icon: faCode,
    title: 'Programación',
    description: 'Desarrollo de aplicaciones en varios lenguajes de programación.',
    tags: [
      { name: 'PHP', icon: faPhp, color: '#777BB4' },
      { name: 'Python', icon: faPython, color: '#3776AB' },
      { name: 'Java', icon: faJava, color: '#007396' },
    ],
  },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className={styles.habilidadesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Habilidades</h2>
        <hr className={styles.divider} />
        <p className={styles.description}>
          A continuación se presentan las habilidades clave que utilizo en el desarrollo de proyectos, desde el frontend hasta el backend.
        </p>
        <div className={styles.habilidadesGrid}>
          {habilidadesData.map((habilidad, index) => (
            <div key={index} className={styles.habilidadCard}>
              <div className={styles.habilidadHeader}>
                <FontAwesomeIcon icon={habilidad.icon} className={styles.habilidadIcon} />
              </div>
              <h3 className={styles.habilidadTitle}>{habilidad.title}</h3>
              <p className={styles.habilidadDescription}>{habilidad.description}</p>
              <div className={styles.tagContainer}>
                {habilidad.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`${styles.tag} ${tag.name === 'React.js' ? styles.reactjs : ''} ${tag.name === 'Linux' ? styles.linux : ''}`}
                    style={{ backgroundColor: tag.color }}
                  >
                    <FontAwesomeIcon icon={tag.icon} className={styles.tagIcon} />
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
