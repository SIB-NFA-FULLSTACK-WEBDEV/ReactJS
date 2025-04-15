import ContactForm from "../components/shared/ContactForm";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";
import Teams from "../components/shared/Teams";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <ProductList />
            <Teams />
            <ContactForm />
            <Footer />
        </>
    );
}