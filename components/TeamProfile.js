export default function TeamProfile(props){
    return(
        <div>
            <img src={props.img} alt={props.alt} />
            <p className="name">{props.name} </p>
            <p className="title">{props.title} </p>
            <style jsx>
                {`
                    div{
                        display:flex;
                        flex-direction:column;
                        justify-content: center;
                        align-items:center;
                        background:white;
                        color: var(--main-color);
                        min-width:140px;
                        padding: .5rem;
                        transition: transform 0.3s ease;
                    }
                    img{
                        height:100px;
                        width:100px;
                        border-radius:50%;
                        box-shadow: 0px 3px 6px #000;
                        margin: 1rem;
                        transition: transform 0.3s ease;
                        cursor:pointer;
                        
                    }

                    div:hover {
                        transform: scale(1.1)
                    }

                    .name{
                        font-size: 1.4rem;
                        font-weight: bold;
                        margin-bottom:0;
                    }

                    .title{
                        font-size: 1rem;
                        font-style:italic;
                        font-weight: bold;
                    }

                    @media only screen and (min-width: 500px){
                        div{
                            min-width: 200px;
                        }
                    }
                `}
            </style>
        </div>
    )
}