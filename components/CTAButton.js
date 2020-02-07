import Link from "next/link";

export default function CTAButton(props){
    return(
        <button className="cta-button" type={props.type}>
            {props.link ? <Link href={`${props.link}`} ><a>{props.children}</a></Link> : props.children }

            <style jsx>
                {`
                    button:focus{
                        outline: 0;
                    }
                    .cta-button{
                        background-color: var(--accent-color);
                        border-radius:10px;
                        font-weight:bold;
                        font-size: 1.2rem;
                        padding: .7rem 2.5rem;
                        text-align:center;
                        display:inline-block;
                        color:var(--main-color);
                        margin: 1rem;
                        cursor:pointer;
                        transition: transform 300ms ease;
                        border:none;
                        
                    }

                    .cta-button > a {
                        text-decoration: none;
                    }

                    .cta-button:hover{
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
                        transform: scale(1.1);
                    }
                `}
            </style>
        </button>
    )
}