// NavbarNormal.jsx
import React, { useState } from 'react';
import styles from './NavbarStylesNormal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faTools, faProjectDiagram, faEnvelope, faBars, faWrench } from '@fortawesome/free-solid-svg-icons';

function NavbarNormal({ onLinkClick }) {
  const [activeLink, setActiveLink] = useState('#descripcion');

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    setActiveLink(href);
    onLinkClick(href); // Pasa el href al manejador de clics
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#descripcion" onClick={(e) => handleLinkClick(e, '#descripcion')}>D.M.</a>
      </div>

      <div className={styles.menu}>
        <div className={styles.menuLinks}>
          <a
            href="#descripcion"
            onClick={(e) => handleLinkClick(e, '#descripcion')}
            className={activeLink === '#descripcion' ? styles.active : ''}
          >
            <FontAwesomeIcon icon={faUser} /> Inicio
          </a>
          <a
            href="#habilidades"
            onClick={(e) => handleLinkClick(e, '#habilidades')}
            className={activeLink === '#habilidades' ? styles.active : ''}
          >
            <FontAwesomeIcon icon={faWrench} /> Habilidades
          </a>
          <a
            href="#herramientas"
            onClick={(e) => handleLinkClick(e, '#herramientas')}
            className={activeLink === '#herramientas' ? styles.active : ''}
          >
            <FontAwesomeIcon icon={faTools} /> Herramientas
          </a>
          <a
            href="#proyectos"
            onClick={(e) => handleLinkClick(e, '#proyectos')}
            className={activeLink === '#proyectos' ? styles.active : ''}
          >
            <FontAwesomeIcon icon={faProjectDiagram} /> Proyectos
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleLinkClick(e, '#contacto')}
            className={activeLink === '#contacto' ? styles.active : ''}
          >
            <FontAwesomeIcon icon={faEnvelope} /> Contacto
          </a>
        </div>
      </div>
      <div className={styles.menuBtn}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}

export default NavbarNormal;
