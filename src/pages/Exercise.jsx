import React from 'react';

import { NavLink } from 'react-router-dom';

function Exercise() {
    const cards = [
        {
            Id: 1,
            image: 'chest.avif',
            Name:"Chest Work-Outs",
            size: "Focus is on the chest",
            path: "/Something"
        },
        {
            Id: 2,
            image: 'backrr.jpg',
            Name:"Back Work-Outs",
            size:"Get an Awesome",
            path: "/Something"
        },
        {
            Id: 3,
            image: 'armss.avif',
            Name: "Arm Work-Outs",
            size: "Masive Biceps and Triceps",
            path: "/Something"
        },
        {
            Id: 4,
            image: 'lrgss.png',
            Name: "Leg Work-Outs",
            size: "Comes with massive GYAAAAATTT",
            path: "/Something"
        },
        {
            Id:5,
            image: 'shouldertypee.jpg',
            Name:"Shoulder-Work-Outs",
            size:"Big ahhh Shoulders",
            path: "/Something"
        }
       ]
    
        return(
            <>
                <div className="cardContainer">
                    {
                    cards.map((card) => {
                        return(
                            <div className="card" key={card.Id}>
                                <img className=' bg-white' src={card.image} alt="" />
                                <div className=' font-3xl text-white'>{card.Name}</div>
                                <p>{card.size}</p>
                                <p>{card.price}</p>
                                <button className="blue-button"><NavLink to={card.path}>VIEW INFO</NavLink></button>
                           </div>
                        )                 
                    })
                    }
                </div>
            </>
        )
}

export default Exercise;
