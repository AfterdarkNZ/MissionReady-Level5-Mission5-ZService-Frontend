import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import TitleSection from "./components/TitleSection";
import InfoSections from "./components/InfoSections";

// import styling
import styles from "./Home.module.css";

// image imports
import evAtHome from "../../assets/images/ev-at-home.png";
import fuelBackPlan from "../../assets/images/fuel-back-plan.png";

export default function Home() {
  return (
    <div>
      <Header />
      <TitleSection />
      <InfoSections
        title="Power your home"
        paragraph="Specialised home power plans to help keep your home and vehicle running, tailored for both EV and non-EV drivers."
        btnInfo="Find out more"
      >
        <img src={evAtHome} className={styles.rightImg} alt="Ev at home" />
        <img
          src={fuelBackPlan}
          className={styles.rightImg}
          alt="Fuel back plan"
        />
      </InfoSections>
      <Footer />
    </div>
  );
}
