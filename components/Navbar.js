import Link from "next/link";

export default function Navbar(){
    return (
        <nav>
            <div className="logo"><Link href="/"><a className="logo-link">Impact</a></Link></div>
            <ul className="nav-list">
                <Link href="/"><a className="nav-link">Home</a></Link>
                <Link href="/about"><a className="nav-link">About</a></Link>
                <Link href="/services"><a className="nav-link">Services</a></Link>
                <Link href="/contact"><a className="nav-link">Contact</a></Link>
            </ul>
            
    <style jsx>
        {`
            nav{
                display:flex;
                justify-content: space-between;
                align-items: center;
                color:white;
                margin:0;
                max-width:100vw;
                min-width:70vw;
                padding: .5rem;
            }
            
            .logo{
                font-weight: bold;
                justify-self:start;
                margin: 0.5rem;
                font-size: 1.2rem;
                transition: transform 0.2s ease;
            }
            
            .logo:hover{
                transform: scale(1.1);
            }
            .nav-list{
                text-decoration: none;
                list-style: none;
                display:flex;
                justify-content: end;
                align-items: center;
                font-size: 1rem;
            }

            .nav-link, .logo-link {
                text-decoration:none;
                color:white;
                margin:.5rem;
                position:relative;
            }

            .nav-link:hover{
                color:var(--accent-color);
            }

            .nav-link::after{
                content:"";
                height: 1px;
                width: 100%;
                background-color:var(--accent-color);
                position:absolute;
                left:0;
                bottom:0;
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }

            .nav-link:hover::after{
                transform: scaleX(1);
            }
        `}
    </style>
        </nav>
    )
}