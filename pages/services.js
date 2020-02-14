import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';

export default function Services(){
    return(
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <div className="blurb-container">
                        <h2>Impact is your one stop shop for all your marketing needs</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, itaque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quia? ipsum dolor sit amet.</p>
                    </div>
                </section>
                <section className="service-details" id="branding">
                    <div className="service">
                        <h3>Branding & Strategy</h3>
                        <img src="/icon1.png" />
                        <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, itaque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quia? ipsum dolor sit amet.</p>
                        <div className = "p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis unde voluptatem nisi harum veniam?
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li>Assumenda, vero atque officia ipsum laudantium doloribus?</li>
                                <li>Totam a animi adipisci fugiat. Aliquid, exercitationem.</li>  
                            </ul>         
                        </div>

                    </div>
                    <div className="service" id="social">
                        <h3>Social & Content</h3>
                        <img src="/icon2.png" />
                        <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptatibus? Id quisquam architecto, hic a repellendus molestias eveniet ratione laboriosam?</p>
                        <div className = "p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis unde voluptatem nisi harum veniam?
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li>Assumenda, vero atque officia ipsum laudantium doloribus?</li>
                                <li>Totam a animi adipisci fugiat. Aliquid, exercitationem.</li>  
                            </ul>          
                        </div>

                    </div>
                    <div className="service" id="data">
                        <h3>Research & Data Analytics</h3>
                        <img src="/icon3.png" />
                        <p className="p1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, corporis ratione fugiat modi nihil consequatur facilis totam sit tenetur magni exercitationem quia facere nemo vitae possimus reiciendis commodi? Beatae, fugit voluptate. Quibusdam vitae quos vel?</p>
                        <div className = "p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis unde voluptatem nisi harum veniam?
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li>Assumenda, vero atque officia ipsum laudantium doloribus?</li>
                                <li>Totam a animi adipisci fugiat. Aliquid, exercitationem.</li>  
                            </ul>
                                     
                        </div>

                    </div>
                    
                </section>
                <section>
                    <div className="blurb-container">
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, corporis ratione fugiat modi nihil consequatur facilis totam sit tenetur magni exercitationem quia facere nemo vitae possimus reiciendis commodi? Beatae, fugit voluptate. Quibusdam vitae quos vel.</p>
                    </div>
                    <CTAButton link="/contact">Connect</CTAButton>
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

                    header {
                        background-color: var(--main-color);
                        
                        
                    }

                    main{
                        min-height:100vh;
                        color: var(--main-color);
                    }

                    section {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        min-height: 50vh;
                    }

                    .service-details{
                        background-color: var(--secondary-color);
                        

                    }


                    .service{
                        display: grid;
                        grid-template-rows: 10% 35% 25% 30%;
                        grid-template-areas:
                        "header"
                        "img"
                        "p1"
                        "p2";
                        min-height:100vh;
                        max-width: 100%;
                        color:white;
                        place-items:center;
                        text-align: center;
                        line-height: 1.5;
                        padding: 2rem;
                        

                    }
                    
                    .blurb-container {
                        width: 80%;
                        line-height: 1.5;
                    }
                    .service h3 {
                        color: var(--accent-color);
                        grid-area: header;
                    }

                    .service img {
                        grid-area: img;
                        width: 20%;
                        min-width: 100px;
                    }

                    .service .p1 {
                        grid-area: p1;
                        width: 90%;
                        place-self:center;
                        
                    }

                    .service .p2 {
                        grid-area: p2;
                              
                        place-self:center;
                        
                    }

                    .p2 ul {
                        text-align:left; 
                        width: 70%;
                        margin: auto;
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