import React from 'react';
import './styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';

import articleImg1 from "./assets/images/article1.png"
import articleImg2 from "./assets/images/article2.png"
import articleImg3 from "./assets/images/article3.jpeg"
import articleImg4 from "./assets/images/article4.png"
import { Counter } from './components/Counter/Counter';

//Componente em classe nada mais é do que uma classe, 
//que herda a classe "Component" do React, e retorna HTML
//dentro do método render.

class App extends React.Component{
  render(){
    return (
      <>
        <Navbar/>
        <section id='articles'>
          <Article title="Designing Dashboards" provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. 
            Exercitation veniam consequat sunt nostrud amet."
            thumbnail={articleImg1}       
          />
          <Article title="Vibrant Portraits of 2020" provider="SpaceNews"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. 
            Exercitation veniam consequat sunt nostrud amet."
            thumbnail={articleImg2}   
          />
          <Article title="The music industry" provider="TS"
            description="The artist, songwriter, singer, producer, and mother of cats in her spare time: Taylor Swift, never tires of surprising her audience with her records 
            broken in recent months. A reflection of more than 20 years of work and a well-built career with her audience and fans, 
            going with her music moving through different genres and compositions." 
            thumbnail={articleImg3}            
          />
          <Article title="36 Days of Malayalam type" provider="Spaceflight Now"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet."
          thumbnail={articleImg4}   
          />
          <Counter/>
        </section>
      </>
    );
  }
}

export default App;
