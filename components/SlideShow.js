import { Component } from "react";
import Link from "next/link";

export default class SlideShow extends Component{
    constructor(props){
        super(props);
        this.state = {
            slides: [{id: 0, heading:"Case Study 1", image:"/img1.jpg"}, {id: 1, heading:"Case Study 2", image:"/img2.jpg"}, {id: 2, heading:"Case Study 3", image:"/img3.jpg"}],
            selectedSlideIndex: 0
        }
        this.showNext = this.showNext.bind(this);
        this.showPrev = this.showPrev.bind(this);
        this.showSlide = this.showSlide.bind(this);
    }

    componentDidMount(){
       
        this.autoPlay =  setInterval(() => this.showNext(),5000)
    }

    componentWillUnmount(){
        clearInterval(this.autoPlay);
    }


    showPrev(e){
        if (e) e.preventDefault();
        let currentSlideIndex = this.state.selectedSlideIndex;
        let slides = this.state.slides;
        let nextIndex =  (currentSlideIndex - 1) < 0 ? slides.length - 1 : currentSlideIndex - 1;
        this.showSlide(nextIndex); 
    }

    showNext(e){
        if (e) e.preventDefault();
        let currentSlideIndex = this.state.selectedSlideIndex;
        let slides = this.state.slides;
        let nextIndex =  (currentSlideIndex + 1) >= slides.length ? 0 : currentSlideIndex + 1;
        this.showSlide(nextIndex); 

    }

    showSlide(slideIndex, e){
        if(e) e.preventDefault();
        this.setState({selectedSlideIndex: slideIndex})
    }

    render(){
        


        return(
            <div className="slideshow-container">
                <button className="prev-button" onClick={this.showPrev}><img src = "/arrow.svg"/></button>
                <div className="slide-container">
                    {this.state.slides.map((slide, index) => 
                        (                       
                        <div className={"slide" + (this.state.selectedSlideIndex == index ? " active" : "")} key={index} >
                            <h2 className="slide-title" >{slide.heading} </h2>
                            <img className="slide-img" src={slide.image} alt="" />
                            <Link href="/services"><a></a></Link >
                        </div>
                        )
                    )}
                </div>
                
                <div className="indicators-container">
                    {this.state.slides.map((slide, index) => 
                        (
                            <div className={"indicator" + (this.state.selectedSlideIndex == index ? " active" : "")} onClick={this.showSlide.bind(this, index)} key={index} >
                            </div>
                        )
                    )}
                </div>
                <button className="next-button" onClick={this.showNext}><img src = "/arrow.svg"/></button>
                <style jsx>
                    {`
                        .slideshow-container{
                            max-width: 100vw;
                            height: 50vh;
                            min-height: 40vw;
                            display: grid;
                            grid-template-columns: 10% 80% 10%;
                            grid-template-rows: 85% 15%;
                            grid-template-areas:
                            "left center right"
                            "left bottom right"
                        }

                        button:focus{
                            outline:none;
                        }

                        .prev-button{
                            grid-area: left;
                        }

                        .next-button{ 
                            grid-area:right;
                        }

                        button {
                            z-index:10;
                            height: 3rem;
                            width: 2rem;
                            border-radius:50%;

                        }

                        button > img {
                            
                            width: 40%;
                            min-width:25px;

                        }

                        .next-button > img {
                            transform: rotate(180deg);
                        }

                        .prev-button, .next-button{
                            z-index: 100;
                            grid-row: 1/2;
                            /* background-image: linear-gradient (to left, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.25)) */
                            
                            /* border-radius: 50%; */
                            height: 100%;
                            width: 100%;
                            color:white;
                            font-weight: bold;
                            /* font-size: 1.5rem; */
                            opacity: 0.8;
                            border:none;
                            background:none;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor:pointer;
                            
                        }
                        .prev-button:hover, .next-button:hover{
                            opacity: 1;
                        }
                        .slide-container{
                            grid-row:1/2;
                            grid-column: 2/3;
                            align-self:stretch;
                            
                            
                        }
                        .slide{
                            display:none;
                            

                        }

                        .slide.active{
                            display:grid;
                            grid-template-areas:
                            "main";
                            height:100%;
                        }

                        .slide > img, .slide > a {
                            grid-area: main;
                            justify-self:stretch;
                            width: 100%;
                            height:100%;
                            object-fit:cover;
                            border-radius: 5px;

                        }

                        .slide > a {
                            z-index: 50;
                        }

                        .slide > h2 {
                            grid-area:main;
                            align-self: center;
                            justify-self:center;
                            z-index: 10;
                            background-color: rgba(0, 0, 0, 0.7);
                            border-radius: 5px;
                            color:white;
                            padding: 1rem;
                        }
                        .indicators-container {
                            display:flex;
                            justify-content: center;
                            grid-area:bottom;
                        }
                        .indicator{
                            border-radius:50%;
                            // border: #1B0DA5 solid 1px;
                            height: .5rem;
                            width:.5rem;
                            margin: 1rem;
                            background-color: #1B0DA5;
                            z-index: 100;
                            cursor: pointer;
                        }
                        .indicator.active{
                            background-color: var(--accent-color);
                        }

                    `}
                </style>
            
            </div>
        )
    }
}