import React, { Component } from 'react';
import ParticlesBg from "particles-bg";
class Hero extends Component {
  render() {

   //Setup Particle Math
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40], //change this to red and white on a black background
      alpha: [0.6, 0],
      scale: [.1, 0.4],
      position: "all",
      color: ["random", "#ff0000"],
      cross: "dead",
      // emitter: "follow",
      random: 15
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    }

    //Parse JSON Data
    if(this.props.data){
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
    
        
    <div>
       

        <ParticlesBg type="custom" config={config} bg={{ top:0, left: 0, right: 0}} />
        <div className="banner">
            <div className = "banner-text"> 
                <h1 className="responsive-headline">Hi! I'm Parker.</h1>
                <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                <hr />
                <ul className="social">
                    {networks}
                </ul>
            </div>
        </div>
        
    </div>

        
        
        
      

    );
  }
}


export default Hero;