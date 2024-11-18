import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDocker, faJava } from '@fortawesome/free-brands-svg-icons';
import vscodeIcon from '../../assets/vsc-sin-fondo.png'; // Importa el icono de Visual Studio Code
import styles from './HerramientasStyle.module.css';

export default function Herramientas() {
  const tools = [
    {
      name: 'GitHub',
      description: 'Control de versiones y colaboración en equipo.',
      icon: <FontAwesomeIcon icon={faGithub} className={styles.icon} />,
      className: styles.github,
    },
    {
      name: 'Git Bash',
      description: 'Una terminal para manejar repositorios Git.',
      icon: <FontAwesomeIcon icon={faTerminal} className={styles.icon} />,
      className: styles.gitBash,
    },
    {
      name: 'Visual Studio',
      description: 'Editor de código ligero y extensible.',
      icon: <img src={vscodeIcon} alt="Visual Studio Code" className={styles.vscodeIcon} />,
      className: styles.vscode,
    },
    {
      name: 'NetBeans',
      description: 'IDE robusto para el desarrollo en Java.',
      icon: <FontAwesomeIcon icon={faJava} className={styles.icon} />,
      className: styles.netbeans,
    },
    {
      name: 'Docker',
      description: 'Plataforma para contenedores y despliegue.',
      icon: <FontAwesomeIcon icon={faDocker} className={styles.icon} />,
      className: styles.docker,
    },
  ];

  return (
    <section className={styles.herramientasSection}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>HERRAMIENTAS DE DESARROLLO</h2>
          <hr className={styles.divider} />
          <p className={styles.description}>
            Estas son las principales herramientas que utilizo en mi flujo de trabajo diario para el desarrollo de software.
          </p>
        </div>
        <div className={styles.toolsContainer}>
          {tools.map((tool) => (
            <div key={tool.name} className={`${styles.toolCard} ${tool.className}`}>
              {tool.icon}
              <div className={styles.cardBody}>
                <h3 className={styles.toolTitle}>{tool.name}</h3>
                <p className={styles.toolDescription}>{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
