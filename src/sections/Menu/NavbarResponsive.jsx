import { useState } from 'react';
import { Home, User, Briefcase, Mail, Menu, X, Wrench } from 'lucide-react'; // Usamos el icono Menu
import { motion, AnimatePresence } from 'framer-motion';
import styles from './NavbarStylesResponsive.module.css';

export default function NavbarResponsive() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Inicio', href: '#descripcion' },
    { icon: User, label: 'Habilidades', href: '#habilidades' },
    { icon: Wrench, label: 'Herramientas', href: '#herramientas' },
    { icon: Briefcase, label: 'Proyectos', href: '#proyectos' },
    { icon: Mail, label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      {/* Primera caja fija */}
      <div className={styles.fixedBox}>
        <span className={styles.nombe_span}>David</span>
        <Menu
          className={styles.icon} // Usamos el ícono Menu aquí
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Segunda caja del menú */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={styles.menuContainer}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className={styles.icon} /> {/* Icono de cerrar */}
            </button>
            <div className={styles.gridContainer}>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={styles.menuItem}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className={styles.icon} />
                  <span className={styles.label}>{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
