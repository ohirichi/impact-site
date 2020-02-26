import ConnectForm from "../components/ConnectForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Curve from "../components/Curve";

export default function Contact(){
    return(
        <div>
            <header>
                
                <Navbar />
                
                
            </header>
            <main>
                <section>
                    <h2>Let's <span>connect</span> and see what we can accomplish together</h2>
                    <ConnectForm />
                    <Curve />
                </section>
                <section>
                    <div className="blurb-container">
                        <h3>You can also reach us at the below</h3>
                        <p>123 Madison Ave</p>
                        <p>877 393 4428</p>

                    </div>
                </section>
            </main>
            <Footer />
            <style jsx>
                {`
                   
                    header{
                        background-color: var(--secondary-color);
                       
                    }

                   

                    section {
                        display:flex;
                        flex-direction: column;
                        align-items:center;
                        
                    }
                    section:first-child{
                        background-color: var(--secondary-color);
                        color: white;
                        justify-content: flex-end;
                        overflow:hidden;
                        padding-top:5rem;
                    }

                    h2 {
                        width:80%;
                        text-align:center;
                    }
                    span{
                        color: var(--accent-color);
                    }

                    .blurb-container {
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items: center;
                        height: 30vh;
                        text-align: center;
                    }

                `}
            </style>
        </div>
    )
}