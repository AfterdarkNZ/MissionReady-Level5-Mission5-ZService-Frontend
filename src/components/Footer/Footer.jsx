import styles from "./Footer.module.css";
import { ArrowRight } from "@phosphor-icons/react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.logoCol}>
          <a
            href="/"
            className={styles.logoLink}
            aria-label="Z energy homepage"
          >
            <img
              className={styles.logo}
              src="/images/z-logo.png"
              alt="Z energy logo"
            />
          </a>
        </div>

        <nav className={styles.linksCol}>
          <a className={styles.footerHeading} href="/">
            Products and Services
          </a>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="/">
                At the station
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Z App
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Power your home with Z
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Rewards and promotions
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.linksCol}>
          <a className={styles.footerHeading} href="/">
            For businesses
          </a>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="/">
                Z Business fuel card
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Fuels and services
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Business tips and stories
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.linksCol}>
          <a className={styles.footerHeading} href="/">
            Sustainability
          </a>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="/">
                Our sustainability goals
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Nature restoration
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Supplier Code of Conduct
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Supporting electric vehicles
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.linksCol}>
          <a className={styles.footerHeading} href="/">
            About Z
          </a>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="/">
                Out story
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                What we stand for
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Our people
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                News
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Careers at Z
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="/">
                Corporate centre
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.contactUsCol}>
          <button className={styles.contactButton}>
            <p className={styles.contactButtonText}>Contact us</p>
            <div className={styles.contactButtonIcon}>
              <ArrowRight size={24} color="#ed560e" weight="bold" />
            </div>
          </button>
          <ul className={styles.socialLinks}>
            <li>
              <SocialIcon
                url="https://www.facebook.com/"
                style={{ height: 30, width: 30 }}
                bgColor="#ed560e"
              />
            </li>
            <li>
              <SocialIcon
                url="https://www.instagram.com/"
                style={{ height: 30, width: 30 }}
                bgColor="#ed560e"
              />
            </li>
            <li>
              <SocialIcon
                url="https://www.linkedin.com/"
                style={{ height: 30, width: 30 }}
                bgColor="#ed560e"
              />
            </li>
          </ul>
        </div>
      </div>
      <hr className={styles.footerDivider}></hr>
      <div className={styles.footerBottom}>
        <nav className={styles.footerLegal}>
          <ul className={styles.footerLegalList}>
            <li>
              <a className={styles.legalLink} href="/">
                Privacy
              </a>
            </li>
            <li>
              <a className={styles.legalLink} href="/">
                Terms of use
              </a>
            </li>
            <li>
              <a className={styles.legalLink} href="/">
                Fuel Safety Data Sheets
              </a>
            </li>
            <li>
              <a className={styles.legalLink} href="/">
                Investor relations
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.copyright}>
          <p className={styles.copyText}>
            &copy; Z Energy Limited.All trademarks are used under license.
          </p>
          <a href="#" id="shielded-logo">
            <img
              alt="shielded"
              src="https://shielded.co.nz/img/custom-logo.png"
              height="36"
              width="36"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
