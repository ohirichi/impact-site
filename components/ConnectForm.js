import CTAButton from "./CTAButton";
import {Component} from "react";
import emailjs from 'emailjs-com';
import secrets from "../secrets";

export default class ConnectForm extends Component {
    constructor(props){
        super(props);
        this.state= {

        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(e){
        e.preventDefault();
        const templateParams = {
            [e.target.name.id]: e.target.name.value,
            [e.target.email.id]: e.target.email.value,
            [e.target.phone.id]: e.target.phone.value,
            [e.target.message.id]: e.target.message.value


        }
        console.log(templateParams)
         emailjs.send("gmail", "contact_form", templateParams, secrets.emailJs )
         .then(result => {
             console.log(result)
         })
         .catch(err => {
             console.log(err)
         })

        
        
    }

    render(){


        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" name="name" id="name" placeholder="Your Name" />
                    <input type="email" name="email" id="email" placeholder="Your Email" />
                    <input type="tel" name="phone" id="phone" placeholder="Your Number" />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <CTAButton type="submit">Connect</CTAButton>
                </form>
                <style jsx>
                    {`
                        form{
                            border: 1px solid var(--accent-color);
                            border-radius:5px;
                            background-color: rgba(255,255,255, 0.3);
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            padding-top: 2rem;
                            width: 60%;
                            margin: 1rem;
                        }

                        input, textarea{
                            border: none;
                            text-align:center;
                            padding-top: 0.5rem;
                            width: 80%;
                            margin: 1rem;
                            color:white;
                            background:none;
                            border-bottom: 1px solid var(--accent-color);
                        }

                        textarea{
                            border-radius: 5px;
                            border: 1px solid var(--accent-color);
                            margin-top: 3rem;
                        }

                        input::placeholder, textarea::placeholder{
                            color: rgba(255,255,255, 0.7)
                        }
                    `}
                </style>
            </div>
            
        )
    }
}

