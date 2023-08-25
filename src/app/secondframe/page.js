import React from 'react'
import './secondframe.css';
import Image from 'next/image';
import imgpicture from './imgpicture.png';
const logo = require('./imgpicture.png'); 
import delhi from './delhi.jpg';
import Xcover from './Xcover.jpg';
import star1 from './star1.jpg';
import icon from './icon.jpg';
import plane from './Plane.jpg';
import Vector from './Vector.jpg';
import Weight from './weight.png';

export default function page() {
    return (
        <div className='second-frame-firstdiv'>
            <div className='second-frame-div'>
                <h1>Ship<span>mate</span></h1>
            </div>

            <div className='second-frame-seconddiv-section'>
                <div className='second-frame-seconddiv'>
                    <div>1</div>
                    <p>Search</p>
                </div>
                <div className='sideline'></div>
                <div className='second-frame-seconddiv'>
                    <div>2</div>
                    <p>Recommended services</p>
                </div>
                <div className='sideline'></div>
                <div className='second-frame-seconddiv'>
                    <div>3</div>
                    <p>Search</p>
                </div>
                <div className='sideline'></div>
                <div className='second-frame-seconddiv'>
                    <div>4</div>
                    <p>Search</p>
                </div>
            </div>
            <div className='second-frame-thirddiv'>
                <div className='second-frame-thirddiv-left'>
                    <div className='second-frame-thirddiv-upperleft'>
                        <h6>Booking Summary</h6>
                        <p>Express</p>
                        <div className='second-frame-thirddiv-upperleft-div1'>
                            <div className='flightIcon'><Image src={plane} alt='logo'/></div>
                            <div className='india-to-china'>
                                <div className='delhi'>
                                <Image src={delhi} alt='logo'/>
 
                                    <p>Delhi, 11003 India</p>
                                </div>
                                <div className='china'>
                                <Image src={delhi} alt='logo'/>

                                    <p>Shanghai 200080, China</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='second-frame-thirddiv-middleleft'>
                        <div className='second-frame-thirddiv-middleleft-left'>
                            <div className='second-frame-thirddiv-middleleft-leftdiv'>
                                <p>Total Weight/Volume</p>
                                <Image  src={Weight} alt='logo'/>
                            </div>
                        </div>
                        <div className='second-frame-thirddiv-middleleft-right'>
                            <p className='load'>Load</p>
                            <div className='second-frame-thirddiv-middleleft-rightdiv'>
                                <h1>1 X</h1>
                                <div>
                                <Image src={Vector} alt='logo'/>
                                    <p className='pallets'>Pallets</p>
                                    <p className='size'>230 X 140 X 120 CM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second-frame-thirddiv-lastleft'>
                        <div className='second-frame-thirddiv-lastleft-left'>
                            <p>Seller: <span>Primetime Worldwide</span></p>
                            <Image src={imgpicture} alt='logo'/>
                        </div>
                        <div className='second-frame-thirddiv-lastleft-right'>
                            <p>Insurance:<span>Xcover.com</span></p>
                            <Image src={Xcover} alt='logo'/>
                        </div>
                    </div>
                </div>
                <div className='second-frame-thirddiv-right'>
                    <div>
                        <h1>Price details</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}
