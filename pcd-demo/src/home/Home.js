import React from 'react'
import "./Home.css"
import Footer from "./footer/Footer.js"
import Navbar from './navbar/Navbar.js'
import { useEffect, useState } from "react";


const Home = () => {
	const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();

  // rendering previews
  useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [files]);

  
// slder

let suivantDom = document.getElementById('suivant');
let precedentDom = document.getElementById('precedent');

let carouselDom = document.querySelector('.carousel-slider');
let SliderDom = carouselDom.querySelector('.list-slider');
let thumbnailBorderDom = document.querySelector('.thumbnail-slider');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item-slider');
let timeDom = document.querySelector('.time-slider');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoSuivant = 30000;

suivantDom.onclick = function(){
    showSlider('suivant');    
}

precedentDom.onclick = function(){
    showSlider('precedent');    
}

let runTimeOut;
let runSuivantAuto = setTimeout(() => {
  suivantDom.click();
}, timeAutoSuivant);

function showSlider(type){
    let thumbnailItemsDom = document.querySelectorAll('.thumbnail-slider .item-slider');

    if(type === 'suivant'){
        SliderDom.appendChild(SliderDom.children[0]);
        thumbnailBorderDom.appendChild(thumbnailBorderDom.children[0]);
        carouselDom.classList.add('suivant');
    } else {
        SliderDom.insertBefore(SliderDom.children[SliderDom.children.length - 1], SliderDom.firstChild);
        thumbnailBorderDom.insertBefore(thumbnailBorderDom.children[thumbnailBorderDom.children.length - 1], thumbnailBorderDom.firstChild);
        carouselDom.classList.add('precedent');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('suivant');
        carouselDom.classList.remove('precedent');
    }, timeRunning);

    clearTimeout(runSuivantAuto);
    runSuivantAuto = setTimeout(() => {
        suivantDom.click();
    }, timeAutoSuivant);
}



    return (
        <>
            <Navbar />
            <div className="trapeze">
                <div class="glitch-wrapper">
                    <div class="glitch" data-glitch="FRAMEWARES">FRAMEWARES</div>
                 </div>
                 </div>
				 <input
        			type="file"
        			accept="image/jpg, image/jpeg, image/png"
        			
        			onChange={(e) => {
          			if (e.target.files && e.target.files.length > 0) {
            		setFiles(e.target.files);
         			 }
        			}}
     			 />
      {/* {previews &&
        previews.map((pic) => {
          return <img src={pic} />;
        })} */}

{/* slider */}

    <div class="carousel-slider">
      
        <div class="list-slider">
            <div class="item-slider">
                <img src="/assets/1.png"/>
                <div class="content-slider">
                    <div class="author-slider">PCD</div>
                    <div class="title-slider">WEB</div>
                    <div class="topic-slider">WAREFRAME</div>
                    <div class="des-slider">
                       
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons-slider">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div class="item-slider">
                <img src="/assets/2.png"/>
                <div class="content-slider">
				<div class="author-slider">PCD</div>
                    <div class="title-slider">WEB</div>
                    <div class="topic-slider">WAREFRAME</div>
                    <div class="des-slider">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons-slider">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div class="item-slider">
                <img src="/assets/3.png"/>
                <div class="content-slider">
				<div class="author-slider">PCD</div>
                    <div class="title-slider">WEB</div>
                    <div class="topic-slider">WAREFRAME</div>
                    <div class="des-slider">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons-slider">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="thumbnail-slider">
            <div class="item-slider">
                <img src="/assets/1.png"/>
                <div class="content-slider">
                    <div class="title-slider">
                        Name Slider
                    </div>
                    <div class="description-slider">
                        Description
                    </div>
                </div>
            </div>
            <div class="item-slider">
                <img src="/assets/2.png"/>
                <div class="content-slider">
                    <div class="title-slider">
                        Name Slider
                    </div>
                    <div class="description-slider">
                        Description
                    </div>
                </div>
            </div>
            <div class="item-slider">
                <img src="/assets/3.png"/>
                <div class="content-slider">
                    <div class="title-slider">
                        Name Slider
                    </div>
                    <div class="description-slider">
                        Description
                    </div>
                </div>
            </div>
            
        </div>

        <div class="arrows-slider">
            <button id="precedent"> {"<"} </button>
            <button id="suivant"> {">"} </button>
        </div>
        <div class="time-slider"></div>
    </div>

{/* fin slider */}



        <div class="section-about">
			<div class="container-about">
				<div class="content-section-about">
					<div class="title-about">
						<h1>About Us</h1>
					</div>
					<div class="content-about">
						<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.</p>
						<div class="button">
							<a href="">Read More</a>
						</div>
					</div>
					</div>
				<div class="image-section-about">
					<img src="/assets/1.png"/>
				</div>
				
			</div>
			
		</div>
            
           
            
            <Footer />
        </>
        	);
}

export default Home;