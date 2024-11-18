import React from 'react';
import styles from './FooterStyle.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text_footer}>
        © {currentYear} David Milanés. Todos los derechos reservados.
      </p>
    </footer>
  );
}
