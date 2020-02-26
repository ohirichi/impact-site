import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import ServiceCard from "../components/ServiceCard";
import SlideShow from "../components/SlideShow";
import Curve from "../components/Curve";



export default function Index (){
    return (
        <div>
            <header>
                <Navbar />
                <div className="cta">
                    <h2 className ="tagline">Marketing Solutions to Move Your Brand Forward</h2>
                    <CTAButton link="/contact" >Connect</CTAButton>
                </div>                
                <Curve />
            </header>            
            <main>
                <section>
                    <div className="blurb-container">
                        <h3 className="blurb-title">Lorem Ipsum Plubis -- Is Your Brand Ready?</h3>
                        <p className="blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae blanditiis accusamus repellendus, accusantium perferendis repellat fugiat mollitia non fugit.</p>
                    </div>
                    <div className ="services-container">
                        <img className="bg-circle" src = "/bgcircle.svg" />
                        <div className="services">
                            <ServiceCard link="/services#branding" img="/icon1.png" caption="Branding & Strategy" />
                            <ServiceCard link="/services#social" img="/icon2.png" caption="Social & Content Marketing" />
                            <ServiceCard link="/services#data" img="/icon3.png" caption="Research & Data Analysis" />
                        </div>
                        
                    </div>
                    
                </section>
                <section>
                    <div className="blurb-container">
                            <h3 className="blurb-title">Lorem Ipsum Plubis</h3>
                            <p className="blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae blanditiis accusamus repellendus, accusantium perferendis repellat fugiat mollitia non fugit.</p>
                    </div>
                    <SlideShow />
                </section>
                <section className="short-section">
                    <div className="blurb-container">
                            <h3 className="blurb-title">Lorem Ipsum Plubis</h3>
                            <p className="blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae blanditiis accusamus repellendus, accusantium perferendis repellat fugiat mollitia non fugit.</p>
                    </div>
                </section>
                <section className="short-section">
                    <div className="final-cta">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, explicabo!</h3>
                        <CTAButton link="/contact" >Connect</CTAButton>
                    </div>
                </section>
                
                
            </main>
            <Footer />


            <style jsx>
                {`
                    header{
                        background: var(--main-color) url("/herobg.jpg");
                        background-size:cover;
                        background-blend-mode:multiply;
                        min-height: 80vh;
                        display:flex;
                        flex-direction:column;
                        position:relative;
                        color:white;
                    }

                    .cta {
                        display:flex;
                        flex-direction: column;
                        align-self:flex-start;
                        justify-content: flex-end;
                        align-items:flex-start;
                        padding: 1rem;
                        min-height: 30vh;
                        margin-top:auto;
                        margin-bottom: 2rem;
                    }

                    .cta h2 {
                        width: 80%;
                        margin-left: 1rem;
                    }


                    section {
                        margin-top: 5rem;
                        display:flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        min-height: 100vh;
                       
                    }

                    .short-section{
                        justify-content: flex-end;
                        min-height: 40vh;
                        
                    }

                    .blurb-container{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align:center;
                        color: var(--main-color);
                        margin: 2rem;
                        padding: 1rem;
                        min-height: 30vh;
                        font-size: 1.2rem;
                        width: 50%;
                    }
                    .services-container{
                        display:grid;
                        grid-template-areas:
                        "main";
                        max-height:70%;

                    }

                    .services {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: center;
                        background:none;
                        grid-area: main;
                        max-height: 80%;
                       
                    }

                    .bg-circle{
                        grid-area: main;
                        place-self: center;
                        width: 50%;
                        z-index: 20;
                        pointer-events: none;
                    }
                    
                    .final-cta{
                        min-height: 50vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align:center;
                        color:black;
                        position:relative;
                        
                        overflow:hidden;
                        background:none;
                        color:white;
                        width:100%;
                        
                    }

                    .final-cta h3 {
                        max-width: 70%;
                        margin-top:10%;
                    }

                    .final-cta h3::after{
                        content: " ";
                        position: absolute;
                        border-radius: 50%;
                        background-color: var(--main-color);
                        height: 70vh;
                        width: 120vw;
                        bottom: -60%;
                        left:-10%;
                        z-index: -1;

                    }

                `}
            </style>
        </div>
    )
}