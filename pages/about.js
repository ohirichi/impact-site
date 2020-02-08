import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import TeamProfile from '../components/TeamProfile';

export default function About(){
    return (
        <div className="content-container">
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <div className="blurb-container">
                        <h2 className="blurb-title">What is Impact?</h2>
                        <p className="blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae blanditiis accusamus repellendus, accusantium perferendis repellat fugiat mollitia non fugit.</p>
                    </div>
                </section>
                <section>
                    <div className="blurb-container">
                        <h2 className="blurb-title">Our Values</h2>
                        <p className="blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae blanditiis accusamus repellendus, accusantium perferendis repellat fugiat mollitia non fugit.</p>
                    </div>
                </section>
                <section>
                    <div className="blurb-container">
                        <h2 className="blurb-title">Our Team</h2>
                        <p className="blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae blanditiis accusamus repellendus, accusantium perferendis repellat fugiat mollitia non fugit.</p>
                    </div>
                    <div className="team-list">
                        <TeamProfile name="Jane Doe" title="CEO & Founder" img="/userprofileimg1.jpg" />
                        <TeamProfile name="Alex Chan" title="General Manager" img="/userprofileimg2.jpg"  />
                        <TeamProfile name="Matt Smith" title="CFO" img="/userprofileimg3.jpg"  />
                        <TeamProfile name="Jared Johnson" title="Chief Engineer" img="/userprofileimg4.jpg"  />
                        <TeamProfile name="Emilia Rosas" title="Account Executive" img="/userprofileimg5.jpg"  />

                    </div>
                </section>
                <section>
                    <div className="blurb-container">
                        <h4 className="blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae blanditiis accusamus repellendus, accusantium perferendis repellat fugiat mollitia non fugit.</h4>
                    </div>
                    <CTAButton link="/connect" >Connect</CTAButton>
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
                    .content-container{
                        display: flex;
                        flex-direction: column;
                        justify-content:center;
                        align-items: center;
                    }
                    header {
                        background: var(--secondary-color) url("/aboutbg.jpg");
                        background-size: cover;
                        background-position:center;
                        background-blend-mode: lighten;
                        width:120%;
                        height: 80vh;
                        border-radius:0 0 50% 50%;
                        background-attachment: fixed;
                        display: flex;
                        justify-content: space-around;
                        align-items:flex-start;

                    }


                    section {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                    section:nth-child(2){
                        background-color: var(--secondary-color);
                        color: white;
                    }

                    section:nth-child(2) .blurb-container {
                        color: white;
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
                        width: 80%;
                    }

                    .team-list {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    main section:last-child {
                        margin: 10% 0;
                        padding-bottom: 10%;
                        background-image: url("/bgcircle.svg");
                        background-color #fff;
                        background-position: center;
                        background-size: contain;
                        background-repeat: no-repeat;
                       
                    }
                    main section:last-child > .blurb-container {
                        min-height: 50vh;
                        justify-content: flex-end;
                        margin-bottom: 0;
                        padding-bottom:0;
                        // color: var(--secondary-color);
                    }

                    @media only screen and (min-width: 600px){
                        html{
                            font-size:20px;
                        }
                    }

                `}

            </style>
        </div>
    )
}