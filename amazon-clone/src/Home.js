import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <img 
                className = "home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="Image" />
            </div>

            <div className="home__row">
                <Product
                    id = "1234567"
                    title="Cracking the Coding Interview: 189 Programming Questions and Solutions" 
                    price="21.67" 
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg"
                />

                <Product 
                    id = "8293741"
                    title="Koolertron Programmable Split Mechanical Keyboard, All 89 Keys Programmable Ergonomic Keypad with OEM Gateron Black Switch, 8 Macro Keys - [SMKD62] Black (OEM Switch White Backlit)" 
                    price="149.99" 
                    rating={4}
                    img="https://images-na.ssl-images-amazon.com/images/I/61742QW-zaL._AC_SY450_.jpg"
                />
            </div>

            <div className="home__row">
                <Product    
                    id = "6398204"
                    title="CanaKit Raspberry Pi 4 8GB Extreme Kit - 128GB Edition (8GB RAM)" 
                    price="149.99" 
                    rating={4}
                    img="https://images-na.ssl-images-amazon.com/images/I/81tX986eNTL._AC_SL1500_.jpg"
                />
                <Product    
                    id = "2348238"
                    title="Introduction to Algorithms, 3rd Edition (The MIT Press)" 
                    price="29.65" 
                    rating={4}
                    img="https://m.media-amazon.com/images/I/61uRpcdPhNL._AC_UY218_.jpg"
                />
                <Product    
                    id = "3983829"
                    title="LED Strip Lights,65.6ft 20m 4X16.4ft Ultra-Long KIKO Smart Led Lights SMD 5050 RGB Color Changing Rope Lights with Bluetooth Controller Sync to Music Apply for TV,Bedroom,Party and Home Decoration" 
                    price="39.99" 
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/81TuL-BPbWL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product    
                    id = "3028473"
                    title="USB Wall Charger, Surge Protector, POWRUI 6-Outlet Extender with 2 USB Charging Ports (2.4A Total) and Night Light, 3-Sided Power Strip with Adapter Spaced Outlets - White，ETL Listed" 
                    price="9.99" 
                    rating={4}
                    img="https://images-na.ssl-images-amazon.com/images/I/71Jb8odRgtL._AC_SX425_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
