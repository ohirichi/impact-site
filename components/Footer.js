import Link from 'next/link';

export default function Footer(){
    return (
        <footer>
            <div className="company-info">
                <h4>Impact</h4>
                <p>123 Madison Ave <br />
                NY, NY</p>
            </div>
            
            <ul className="nav-list">
                <Link href="/"><a className="nav-link">Home</a></Link>
                <Link href="/about"><a className="nav-link">About</a></Link>
                <Link href="/services"><a className="nav-link">Services</a></Link>
                <Link href="/contact"><a className="nav-link">Contact</a></Link>
                <Link href="/credits"><a className="nav-link">Credits</a></Link>
            </ul>
            
            <style jsx>
                {`
                    footer{
                        background-color: var(--secondary-color);
                        min-height:20vh;
                        width:100%;
                        color: white;
                        margin:0;
                        font-size: .8rem;
                        display: flex;
                        justify-content: space-between;

                    }

                    .company-info{
                        display:flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-content: start;
                        padding-left: 1rem;
                    }

                    h4 {
                        margin-top: 0.5rem;
                        margin-bottom: 0;
                    }
                   
                    .nav-list{
                        text-decoration: none;
                        list-style: none;
                        display:flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        align-items: flex-end;
                        padding-right: 1rem;
                        margin-right: 2rem;
                        width:40%;
                        margin:1rem;
                        height: 50px;
                        padding-left:0;
                        
                    }
        
                    .nav-link {
                        text-decoration:none;
                        color:white;
                        margin:.5rem;
                        
                    }
        
                    .nav-link:hover{
                        color:var(--accent-color);
                    }
                `}
            </style>
        </footer>
    )
}