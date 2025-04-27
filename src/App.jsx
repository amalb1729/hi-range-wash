import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import AboutSection from './components/AboutSection/AboutSection';
import ContactTeaser from './components/ContactTeaser/ContactTeaser';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="main-container">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <AboutSection />
        <ContactTeaser />
      </main>
      <Footer />
    </div>
  );
}

export default App;
