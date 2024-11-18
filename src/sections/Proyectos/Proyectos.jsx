import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGlobe, faCodeBranch, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faPhp } from '@fortawesome/free-brands-svg-icons';

import styles from './ProyectosStyle.module.css';

const proyectos = [
    {
        id: 1,
        titulo: "Gestor de Incidencias",
        descripcion: "Sistema de gestión para el seguimiento de incidencias.",
        fechaCreacion: "04-10-2024",
        esNuevo: false,
        estaActivo: true,
        githubUrl: "https://github.com/Milan3s/gestion-de-incidencias",
        proyectoUrl: "https://dmilanes.es/app_incidencias",
        color: styles.cardBlue,
        tecnologias: [
            { name: 'HTML', icon: faHtml5 },
            { name: 'CSS', icon: faCss3Alt },
            { name: 'PHP', icon: faPhp },
            { name: 'MySQL', icon: faDatabase }
        ]
    },
    {
        id: 2,
        titulo: "Recordatorio Medicinal",
        descripcion: "App para recordar y organizar la toma de medicamentos.",
        fechaCreacion: "15-10-2024",
        esNuevo: true,
        estaActivo: true,
        githubUrl: "https://github.com/Milan3s/recordatorio-medicinal",
        proyectoUrl: "https://dmilanes.es/recordatorio_medicinal/",
        color: styles.cardGreen,
        tecnologias: [
            { name: 'HTML', icon: faHtml5 },
            { name: 'CSS', icon: faCss3Alt },
            { name: 'PHP', icon: faPhp },
            { name: 'MySQL', icon: faDatabase }
        ]
    },
    {
        id: 3,
        titulo: "Farmacia",
        descripcion: "Gestión de inventarios para farmacias.",
        fechaCreacion: "En desarrollo",
        esNuevo: true,
        estaActivo: false,
        githubUrl: "#farmacia",
        proyectoUrl: "#farmacia",
        color: styles.cardPurple,
        tecnologias: [
            { name: 'HTML', icon: faHtml5 },
            { name: 'CSS', icon: faCss3Alt },
            { name: 'PHP', icon: faPhp },
            { name: 'MySQL', icon: faDatabase }
        ]
    }
];

export default function Proyectos() {
    return (
        <section className={styles.proyectosSection}>
            <div className={styles.container}>
                <h2 className={styles.customTitle}>Mis Proyectos</h2> {/* Updated to use customTitle */}
                <hr className={styles.divider} />
                <p className={styles.description}>
                    Descubre algunos de los proyectos que he desarrollado, explorando diferentes tecnologías.
                </p>
                <div className={styles.grid}>
                    {proyectos.map((proyecto) => (
                        <div key={proyecto.id} className={`${styles.card} ${proyecto.color}`}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{proyecto.titulo}</h3>
                            </div>
                            <div className={styles.cardContent}>
                                <p className={styles.descripcion}>{proyecto.descripcion}</p>
                                <div className={styles.info}>
                                    <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
                                    <span>{proyecto.fechaCreacion}</span>
                                </div>
                                <div className={styles.technologies}>
                                    {proyecto.tecnologias.map((tech, index) => (
                                        <span key={index} className={styles.techBadge}>
                                            <FontAwesomeIcon icon={tech.icon} /> {tech.name}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.cardFooter}>
                                    <a href={proyecto.githubUrl} rel="noopener noreferrer" className={`${styles.button} ${styles.buttonLeft}`}>
                                        <FontAwesomeIcon icon={faCodeBranch} className={styles.icon} />
                                        GitHub
                                    </a>
                                    {proyecto.proyectoUrl !== "#" && (
                                        <a href={proyecto.proyectoUrl} rel="noopener noreferrer" className={`${styles.button} ${styles.buttonRight}`}>
                                            <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
                                            Ver Proyecto
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
