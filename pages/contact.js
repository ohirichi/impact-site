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
            <style jsx global>
                {`
                     body{
                        margin:0;
                        font-family: 'Gayathri', Helvetica, sans-serif;
                        box-sizing: border-box;
                        background-color: white;
                        overflow-x: hidden;
                        max-width: 100vw;
                        min-height: 100vh;
                    }

                    html{
                        scroll-behavior: smooth; /*currently only Firefox and Chrome */
                        font-size:12px;
                        overflow-x: hidden;
                        --main-color:#1B0DA5; 
                        --accent-color:#FCFC42;
                        --secondary-color:#050037;
                        --bg-color: var(--main-color);
                        
                    }
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

                    @media only screen and (min-width: 600px){
                        html {
                            font-size: 20px;
                        }
                    }
                `}
            </style>
        </div>
    )
}