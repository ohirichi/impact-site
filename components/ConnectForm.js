import CTAButton from "./CTAButton";
import {Component} from "react";
import emailjs from 'emailjs-com';
import secrets from "../secrets";
import AlertBox from "./AlertBox";

export default class ConnectForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: "",
            email:"",
            phone:"",
            message:"",
            currentFieldId:"",
            showAlert:false,
            alertMessage:"",
            touched:{
                name:false,
                email:false,
                phone:false,
                message:false
            }
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        this.setState({[e.target.id] : e.target.value, touched: {...this.state.touched, [e.target.id]:true}})
    }



    validateName(name){
        let errorMsg = "";
        if(name.length <= 2) errorMsg += "Name should be at least three letters long."
        return errorMsg;
        
    }

    validatePhone(phone){
        let errorMsg="";
        let regEx = /^[0-9]{10}$/gi
        if (! regEx.test(phone)) errorMsg = "Please enter a valid 10 digit phone number"

        return errorMsg;
    }
    validateEmail(email){
        let errorMsg ="";
        //check for @ and "." - also @ should not be the first letter and there should be no spaces in the string
        let regEx = /[a-z]+@[a-z]+\.[a-z]+/gi
        if(! regEx.test(email)) errorMsg += "Please enter a valid email"
        return errorMsg;
    }
   
    validateForm(){
       
        let errorMessages = {};

        errorMessages.nameErrorMsg = this.validateName(this.state.name);
        errorMessages.phoneErrorMsg = this.validatePhone(this.state.phone);
        errorMessages.emailErrorMsg = this.validateEmail(this.state.email);
        return errorMessages
       
    }

    onSubmitHandler(e){
        e.preventDefault();
        const {nameErrorMsg, emailErrorMsg, phoneErrorMsg} = this.validateForm();
        const templateParams = {
            [e.target.name.id]: e.target.name.value,
            [e.target.email.id]: e.target.email.value,
            [e.target.phone.id]: e.target.phone.value,
            [e.target.message.id]: e.target.message.value
        }

        if(nameErrorMsg.length || emailErrorMsg.length || phoneErrorMsg.length){
            this.setState({touched:{name:true, email:true, phone:true, message:true}, showAlert:true, alertMessage:"Please correct the issues on the form and resubmit"})
        }
        else{
            // emailjs.send("gmail", "contact_form", templateParams, secrets.emailJs )
            // .then(result => {
            //     console.log(result)
            //     this.setState({touched:{name:true, email:true, phone:true, message:true}, showAlert:true, alertMessage:"Thanks! We'll be in touch with you shortly!"})
            // })
            // .catch(err => {
            //     console.log(err);
            //     this.setState({touched:{name:true, email:true, phone:true, message:true}, showAlert:true, alertMessage:"Something went wrong. Please try again"})
            // })

            this.setState({touched:{name:true, email:true, phone:true, message:true}, showAlert:true, alertMessage:"Thanks for trying the contact form!"})
        }      
    }

    render(){

        const {nameErrorMsg, emailErrorMsg, phoneErrorMsg} = this.validateForm();
        const nameError = nameErrorMsg.length && this.state.touched.name;
        const emailError = emailErrorMsg.length && this.state.touched.email;
        const phoneError = phoneErrorMsg.length && this.state.touched.phone;

        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" className = {nameError? "input-error": ""} name="name" id="name" value ={this.state.name} placeholder="Your Name" onChange={this.handleChange}   />
                     {nameError ? <div className="error-msg" >{nameErrorMsg}</div> : null}
                    <input type="email" className = {emailError? "input-error": ""} name="email" id="email" value={this.state.email} placeholder="Your Email" onChange={this.handleChange}  />
                    {emailError ? <div className="error-msg" >{emailErrorMsg}</div> : null}
                    <input type="tel" className = {phoneError? "input-error": ""} name="phone" id="phone" placeholder="Your Number" value={this.state.number} onChange={this.handleChange}   />
                    {phoneError ? <div className="error-msg" >{phoneErrorMsg}</div> : null}
                    <textarea name="message" id="message" cols="30" rows="10" value={this.state.message} placeholder="Your Message" onChange={this.handleChange}   ></textarea>
                    <CTAButton type="submit">Connect</CTAButton>
                </form>
                <div onClick ={()=>this.setState({showAlert:false})} >
                    {this.state.showAlert ? <AlertBox message ={this.state.alertMessage} link={nameError || phoneError || emailError ? "" : "/contact"} /> : null }
                </div>
                
                
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
                            width: 60vw;
                            min-width:250px;
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
                            color: rgba(255,255,255, 0.7);
                            font-weight:lighter;
                            font-family: 'Gayathri', Helvetica, sans-serif;
                            font-size: 1.2rem;
                        }

                        .input-error{
                            border: 2px solid red;
                            border-radius: 2px;
                        }

                        .hidden {
                            display: none;
                        }
                    `}
                </style>
            </div>
            
        )
    }
}

