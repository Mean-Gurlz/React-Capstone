import React from 'react';

import { NavLink } from 'react-router-dom';

function Exercise() {
    const cards = [
        {
            Id: 1,
            image: 'chesterfield.jpg',
            Name:"Chest Work-Outs",
            size: "Focus is on the chest",
            path: "/Chest"
        },
        {
            Id: 2,
            image: 'bask-removebg-preview.png',
            Name:"Back Work-Outs",
            size:"Make your Back do the Work",
            path: "/Back"
        },
        {
            Id: 3,
            image: 'armss.avif',
            Name: "Arm Work-Outs",
            size: "Develop Well-defined arm muscles",
            path: "/Arms"
        },
        {
            Id: 4,
            image: 'legger.png',
            Name: "Leg Work-Outs",
            size: "Never Skip Leg-Day",
            path: "/Legs"
        },
        {
            Id:5,
            image: 'shuld.jpg',
            Name:"Shoulder Work-Outs",
            size:"Boulder-Shoulders",
            path: "/Shoulder"
        }
       ]
    
        return(
            <>
                <div className="cardContainer">
                    {
                    cards.map((card) => {
                        return(
                            <div className="card" key={card.Id}>
                                <img className=' h-64' src={card.image} alt="" />
                                <div className=' text-2xl font-bold text-white'>{card.Name}</div>
                                <p className='mt-2'>{card.size}</p>
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
