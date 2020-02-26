import {useState} from "react";
import Link from "next/link";


export default function AlertBox(props){
    const [hidden, setHidden] = useState(false);

    return (
        <div className={hidden ? "container hidden" : "container"} >
            <div className="alert-container">
                {/* If a link is passed in, wrap the close button in a link to redirect, if no link, just "close"/hide the alertbox */}
                {props.link ? <button><a href={props.link}>x</a></button> : <button onClick={()=>{setHidden(true)}} >x</button>}
                
                <p>{props.message} </p>
            </div>
            <style jsx>
                {`
                    .container{
                        background-color: rgba(0,0,0, .8);
                        display: flex;
                        justify-content: center;
                        height: 100vh;
                        width: 100vw;
                        position: fixed;
                        left:0;
                        top:0;
                        z-index: 1000;
                        pointer-events: none;
                    }
                    .alert-container{
                        display:flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        background-color: white;
                        width: 50%;
                        margin:auto;
                        border-radius:5px;
                        pointer-events: none;

                    }
                    button{
                        border-radius:50%;
                        width: 2rem;
                        height: 2rem;
                        color: white;
                        font-size: .8rem;
                        text-align: center;
                        align-self: flex-end;
                        background-color: var(--secondary-color);
                        font-weight: lighter;
                        border: none;
                        margin: 1rem;
                        opacity:0.7;
                        transform: scale(0.8);
                        transition: transform 0.2s ease-in-out;
                        cursor:pointer;
                        pointer-events:auto;
                        
                    }
                    a {
                        color: white;
                        text-decoration: none;
                        width:100%;
                        height:100%;
                    }
                    button:hover{
                        opacity: 1;
                        transform:scale(1);
                        font-size:1rem;
                        
                    }
                    button:focus{
                        border:none;
                    }
                    p {
                        place-self:center;
                        text-align: center;
                        font-size:1.2rem;
                        width: 70%;
                        color: var(--main-color);
                        pointer-events:none;
                        padding-bottom:2rem;
                        
                    }

                    .hidden {
                        display:none;
                    }
                `}

            </style>
        </div>
    )
}