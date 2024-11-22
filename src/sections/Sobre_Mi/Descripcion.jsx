import { Link } from 'react-router-dom'; // Importa Link
import styles from './DescripcionStyles.module.css';
import descImg from '../../assets/dmilanes.png';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';

import { useTheme } from '../../common/ThemeContext';
import { ExternalLink } from 'lucide-react';

function Descripcion() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sunIcon : moonIcon;

    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;

    return (
        <section
            id="descripcion"
            className={`${styles.container} ${styles.scrollMargin} ${theme === 'light' ? styles.light : styles.dark}`}
        >
            <div className={styles.colorModeContainer}>
                <img className={styles.descripcion} src={descImg} alt="Perfil foto de David Milanés" />
                <img
                    className={`${styles.colorMode} ${styles.customClass}`}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>

            <div className={styles.info}>
                <h1 className={`${styles.name} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`}>
                    David <br /> Milanés
                </h1>
                <hr className={`${styles.divider} ${theme === 'light' ? styles.dividerLight : styles.dividerDark}`} />
                <h2 className={theme === 'light' ? styles.lightText : styles.darkText}>
                    Backend Developer
                </h2>
                <span className={styles.socialLinks}>
                    <a href="https://x.com/Milan3s" target='_blank' rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/david-milan%C3%A9s/" target='_blank' rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>
                    <a href="https://github.com/Milan3s" target='_blank' rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub Icon" />
                    </a>
                </span>
                <p className={`${styles.descripcion} ${theme === 'light' ? styles.lightText : styles.darkText}`}>
                    Me gusta construir aplicaciones escalables y modernas, además tengo +2 años de experiencia en el mundo de desarrollo web.
                </p>
                <div className={styles.buttonContainer}>
                    {/* Enlace de LinkedIn */}
                    <a href="https://www.linkedin.com/in/david-milan%C3%A9s/" target="_blank" rel="noopener noreferrer">
                        <button className={`${styles.button} ${styles.openToWorkButton}`}>
                            <span className={styles.greenDot}></span> Open to Work
                        </button>
                    </a>

                    {/* Enlace al currículum */}
                    <a href="https://dmilanes.es/curriculum" target="_blank" rel="noopener noreferrer">
                        <button className={`${styles.button} ${styles.downloadButton}`}>
                            Curriculum
                            <ExternalLink className={styles.downloadIcon} />
                        </button>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Descripcion;
