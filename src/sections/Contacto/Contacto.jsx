import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactoStyle.module.css';
import CV from '../../assets/cv.pdf';

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h2 className={styles.title}>Puedes Contactarme Aquí</h2>
        <div className={styles.divider} />
        <p className={styles.description}>
          Estoy disponible para colaboraciones y oportunidades laborales. No dudes en contactarme o descargar mi currículum
          para conocer más sobre mi experiencia.
        </p>
        <div className={styles.card}>
          <a href="mailto:dmilanestrabajo@gmail.com" className={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <span>dmilanestrabajo@gmail.com</span>
          </a>
          <a href={CV} download className={`${styles.contactItem} ${styles.downloadButton}`}>
            <FontAwesomeIcon icon={faDownload} className={styles.icon} />
            <span className={styles.texto_descargarcv}>Descargar CV</span>
          </a>
        </div>
        <p className={styles.thankYouMessage}>Gracias por tu visita...</p>
      </div>
    </section>
  );
}
