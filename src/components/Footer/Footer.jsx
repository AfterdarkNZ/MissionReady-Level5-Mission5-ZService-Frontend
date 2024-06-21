import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.logoCol}>
          <a href="#" className={styles.logoLink}>
            <img
              className={styles.logo}
              src="/images/z-logo.png"
              alt="Z energy logo"
            />
          </a>
        </div>

        <nav className={styles.productsServicesCol}>
          <p className={styles.footerHeading}>Products and Services</p>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="#">
                At the station
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Z App
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Power your home with Z
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Rewards and promotions
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.productsServicesCol}>
          <p className={styles.footerHeading}>For businesses</p>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="#">
                Z Business fuel card
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Fuels and businesses
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Business tips and stories
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.productsServicesCol}>
          <p className={styles.footerHeading}>Sustainability</p>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="#">
                Our sustainability goals
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Nature restoration
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Supplier Code of Conduct
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Supporting electric vehicles
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.productsServicesCol}>
          <p className={styles.footerHeading}>About Z</p>
          <ul className={styles.footerNav}>
            <li>
              <a className={styles.footerLink} href="#">
                Out story
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                What we stand for
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Our people
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                News
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Careers at Z
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Corporate centre
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.contactUsCol}>
          <button className={styles.contactButton}>
            <p className={styles.contactButtonText}>Contact us</p>
            <div className={styles.contactButtonIcon}>
              <ion-icon
                className={styles.rightIcon}
                name="arrow-forward-outline"
              ></ion-icon>
            </div>
          </button>
          <ul className={styles.socialLinks}>
            <li>
              <a className={styles.socialIconBackground}>
                <ion-icon
                  className={styles.socialIcon}
                  name="logo-facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className={styles.socialIconBackground}>
                <ion-icon
                  className={styles.socialIcon}
                  name="logo-instagram"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className={styles.socialIconBackground}>
                <ion-icon
                  className={styles.socialIcon}
                  name="logo-linkedin"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className={styles.footerDivider}></hr>
      <div className={styles.footerBottom}>
        <nav className={styles.footerLegal}>
          <ul className={styles.footerLegalList}>
            <li>
              <a className={styles.legalLink} href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className={styles.legalLink} href="#">
                Terms of use
              </a>
            </li>
            <li>
              <a className={styles.legalLink} href="#">
                Fuel Safety Data Sheets
              </a>
            </li>
            <li>
              <a className={styles.legalLink} href="#">
                Investor relations
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.copyright}>
          <p className={styles.copyText}>
            &copy;{" "}
            <span className={styles.year}>
              {new Date().getFullYear()} Z Energy Limited
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
