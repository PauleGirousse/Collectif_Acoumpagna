import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import logo_FDF from '../../assets/logo_FDF.svg';
import logoHautesAlpes from '../../assets/logoHautesAlpes.png';
import logoIperia from '../../assets/iperia.svg';
import logoSPE from '../../assets/spe-logo.svg';

const Layout = () => {
      return (
            <>
                  <header>
                        <nav>
                              <ul>
                                    <li>
                                          <img src={logo} alt="" />
                                    </li>
                                    <li>
                                          <NavLink
                                                to
                                                src="/particulier employeur"
                                          >
                                                Vous êtes un particulier
                                                employeur ?
                                          </NavLink>
                                    </li>
                                    <li>
                                          <NavLink to src="/partenaire">
                                                Vous êtes un partenaire ?
                                          </NavLink>
                                    </li>
                                    <li>
                                          <NavLink to src="/membre">
                                                Vous êtes membre d'Acoumpagna ?
                                          </NavLink>
                                    </li>
                                    <li>
                                          <NavLink to src="/hors_collectif">
                                                Contact d'auxiliaires hors
                                                collectif
                                          </NavLink>
                                    </li>
                                    <li>
                                          <NavLink to src="/contact">
                                                Contactez-nous
                                          </NavLink>
                                    </li>
                              </ul>
                        </nav>
                  </header>
                  <footer>
                        <nav>
                              <ul>
                                    <li>
                                          <Link
                                                className="fondation"
                                                to
                                                src="https://www.fondationdefrance.org/fr/"
                                                alt="Lien vers la Fondation de France"
                                          >
                                                <img src={logo_FDF} alt="" />
                                          </Link>
                                    </li>
                                    <li>
                                          <Link
                                                className="departement"
                                                to
                                                src="https://www.hautes-alpes.fr/"
                                                alt="Lien vers le site du département des Hautes-Alpes"
                                          >
                                                <img
                                                      src={logoHautesAlpes}
                                                      alt=""
                                                />
                                          </Link>
                                    </li>
                                    <li>
                                          <Link
                                                className="iperia"
                                                to
                                                src="https://www.iperia.eu/institut/"
                                                alt="Lien vers Ipéria institut"
                                          >
                                                <img src={logoIperia} alt="" />
                                          </Link>
                                    </li>
                                    <li>
                                          <Link
                                                className="spe"
                                                to
                                                src="https://www.cpnefp.branche-professionnelle-spe.org/"
                                                alt="Lien vers la branche professionnelle du particulier employeur"
                                          >
                                                <img src={logoSPE} alt="" />
                                          </Link>
                                    </li>
                              </ul>
                        </nav>
                  </footer>
            </>
      );
};

export default Layout;
