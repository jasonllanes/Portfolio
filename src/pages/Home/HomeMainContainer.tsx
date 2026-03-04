import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxSection from './components/ParallaxSection';

/**
 * HomeMainContainer
 * The root layout for the single-page portfolio.
 * Sections are ordered: Hero → About → Parallax → Career → Education → Projects → Contact
 */
const HomeMainContainer = () => {
    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <About />

                <ParallaxSection
                    quote='"The only way to do great work is to love what you do."'
                    author="— Steve Jobs"
                />

                <Career />

                <Education />

                <ParallaxSection
                    quote='"First, solve the problem. Then, write the code."'
                    author="— John Johnson"
                />

                <Projects />

                <Contact />
            </main>

            <Footer />
        </>
    );
};

export default HomeMainContainer;
