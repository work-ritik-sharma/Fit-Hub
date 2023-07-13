import React from 'react'
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className="plans-container" >

<div className="blur blur-p-1"></div>
<div className="blur blur-p-2"></div>

    <div className="Programs-header" style={{
        gap:'2rem',
    }}>

        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
    </div>

    {/* plans */}
    <div className="plans" id='Plans' >
    {plansData.map((plan , i) => (
        <div className="plan" key={i}>
            {plan.icon}
            <span>
                {plan.name}
                </span>
                <span className='price'>
                    ${plan.price}
                </span>

                <div className="features">
                    {plan.features.map((feature,i) => (
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}> {feature} </span>
                        </div>
                    ))}
                </div>
                <div>
                    <span>
                        See more benefits -> 
                        </span>
                        </div>
                        <button className="btn">
                            Join Now
                        </button>
        </div>
    ))}
    </div>
    </div>
  )
}


export default Plans
