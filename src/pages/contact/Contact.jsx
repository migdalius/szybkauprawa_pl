import "./contact.css";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import ContactContainer from "../../components/contactContainer/ContactContainer";

export const Contact = () => {
  return (
    <div>
    <Navigation />
    <ContactContainer />
    <Footer type="banner"/>
    </div>
  )
}

export default Contact
