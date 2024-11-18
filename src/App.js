import React, { useState, useRef } from 'react';
import './App.css';
import Descripcion from './sections/Sobre_Mi/Descripcion';
import Habilidades from './sections/Habilidades/Habilidades';
import Herramientas from './sections/Herramientas/Herramientas';
import Proyectos from './sections/Proyectos/Proyectos';
import Contacto from './sections/Contacto/Contacto'; // Import the new Contacto component
import NavbarNormal from './sections/Menu/NavbarNormal';
import NavbarResponsive from './sections/Menu/NavbarResponsive';
import Footer from './sections/Footer/Footer';


function App() {
  const [scrollActive, setScrollActive] = useState(false);

  // Section references
  const descripcionRef = useRef(null);
  const habilidadesRef = useRef(null);
  const herramientasRef = useRef(null);
  const proyectosRef = useRef(null);
  const contactoRef = useRef(null);

  const handleLinkClick = (section) => {
    setScrollActive(true);
    if (section === '#descripcion' && descripcionRef.current) {
      descripcionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === '#habilidades' && habilidadesRef.current) {
      habilidadesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === '#herramientas' && herramientasRef.current) {
      herramientasRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === '#proyectos' && proyectosRef.current) {
      proyectosRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === '#contacto' && contactoRef.current) {
      contactoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <NavbarNormal onLinkClick={handleLinkClick} />
      <NavbarResponsive />
      <section id="descripcion" ref={descripcionRef} className={scrollActive ? 'scrollMarginActive' : ''}>
        <Descripcion />
      </section>
      <section id="habilidades" ref={habilidadesRef} className={scrollActive ? 'scrollMarginActive' : ''}>
        <Habilidades />
      </section>
      <section id="herramientas" ref={herramientasRef} className={scrollActive ? 'scrollMarginActive' : ''}>
        <Herramientas />
      </section>
      <section id="proyectos" ref={proyectosRef} className={scrollActive ? 'scrollMarginActive' : ''}>
        <Proyectos />
      </section>
      <section id="contacto" ref={contactoRef} className={scrollActive ? 'scrollMarginActive' : ''}>
        <Contacto />
      </section>
      <Footer /> {/* Agrega el Footer aquí */}
    </div>
  );
}

export default App;
