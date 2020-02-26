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
                {/* <Link href="/credits"><a className="nav-link">Credits</a></Link> */}
            </ul>
            <p className="credit">Code and Design by: ohirichi <br />Icons by: <a href="https://www.flaticon.com/authors/pongsakornred" title="pongsakornRed">pongsakornRed</a></p>
            
            
            
            <style jsx>
                {`
                    footer{
                        background-color: var(--secondary-color);
                        min-height:20vh;
                        width:100%;
                        color: white;
                        margin:0;
                        font-size: .7rem;
                        display: flex;
                        justify-content: space-between;
                        position:relative;

                    }

                    .company-info{
                        display:flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-content: start;
                        padding-left: 1rem;
                    }

                    h4 {
                        margin-top: 1.5rem;
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

                    .credit {
                        position: absolute;
                        bottom:0;
                        right:0;
                        margin-right:1rem;
                        font-size:10px;
                        text-align:right;
                    }

                    .credit a {
                        text-decoration:none;
                        color: white;
                    }
                `}
            </style>
        </footer>
    )
}