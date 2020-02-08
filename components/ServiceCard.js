import Link from "next/link";


export default function ServiceCard(props){
    return (
        <div className="card">
            <figure>
                <img src={props.img} alt={props.alt}/>
                <figcaption>{props.caption}</figcaption>
                <Link href={props.link}><a className="learn-more" >Learn More</a></Link>
            </figure>
            <style jsx>
                {`
                    .card{
                        border-radius:10px;
                        background:white;
                        width:35%;
                        max-width: 400px;
                        min-height:225px;
                        min-width: 120px;
                        max-height: 300px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        box-shadow: 0 3px 6px #000;
                        margin: 1rem;
                        
                    }

                    figure{
                        display:grid;
                        grid-template-rows: 70% 30%;
                        grid-template-areas:
                        "img"
                        "caption";
                        justify-items:center;
                        align-items:center;
                        padding:0;
                        margin:0;
                        width:100%;
                        min-height:225px;

                    }

                    img{
                        grid-area: img;
                        width:60%;
                        min-width: 88px;
                        max-height:150px;
                    }

                    figcaption{
                        font-weight:bold;
                        font-size:1.3rem;
                        color:var(--main-color);
                        text-align:center;
                        grid-area: caption;
                        padding-top: .5rem;
                        align-self: center;
                    }

                    .learn-more{
                        color: var(--accent-color);
                        border-radius:10px;
                        grid-row:1/3;
                        grid-column:1/2;
                        align-self:stretch;
                        justify-self:stretch;
                        text-align:center;
                        background-color:rgba(0, 0, 0, 0.8);
                        text-decoration: none;
                        display:flex;
                        align-items:center;
                        justify-content: center;
                        font-size: 1.5rem;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        z-index: 10;
                        
                    }

                    .learn-more:hover{
                        opacity: 1;
                    }

                    @media only screen and (min-width:700px){
                        .card{
                            
                        }
                    }

                `}
            </style>
            
        </div>
    )
}