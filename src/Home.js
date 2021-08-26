import React from 'react'
import './Home.css'
import Product from './Product'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <Carousel renderIndicator={false}
          showThumbs={false}
          className="home__image"
          autoPlay
          interval={2000}
          infiniteLoop 
          showArrows={false}
 >
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Movie/CIND_2021_GWBleedingHero_1500x600_PRE_Final_en-US_PVD7333_Cinderella._CB664771797_.jpg" />
                    
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmVhMDM4ZmYt/ZmVhMDM4ZmYt-OTdjNmEzYzMt-w1500._CB668936041_.jpg"/>
                    
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/CORE10/Hero/C10_GW_HERO_DESKTOP_V2B_1500X600._CB667092254_.jpg" />
                    
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/OTC/Homepage/OTC_GW-desktop_Phase-1_1x-1500x600._CB669937678_.jpg" />
                    
                </div>
            </Carousel>
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className="home__row">
            
           <Product
            id="12321341"
            title="Sony X90J 55 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart Google TV with Dolby Vision HDR and Alexa Compatibility XR55X90J- 2021 Model"
            price={1198.0}
            rating={5}
            image="	https://m.media-amazon.com/images/I/91KZbi-CbzL._AC_SX355_.jpg"
          />
          <Product
            id="49538094"
            title="3 Pieces Patio Furniture Sets Rattan Sofa Sectional Manual Weaving Wicker Small Outdoor Furniture Conversation Sofa Sofa Set with Cushion and Glass Table"
            price={349.99}
            rating={4}
            image="	https://m.media-amazon.com/images/I/81cFwx1lX5L._AC_SX425_.jpg"
           /> 
        </div> 
         <div className="home__row">
          <Product
            id="4903850"
            title="Artificial Plants & Flowers with Lights in Wooden Box, Potted Fake Faux Plants Eucalyptus for Home Decor Indoor, Greenery Tabletop Centerpieces for Office Room Decoration - 3 Pack"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91nIbbZIpeS._AC_SX679_.jpg"
          /> 
          <Product
            id="23445930"
            title="Broil King 988847 Sovereign XLS 90 Natural Gas Grill with Side Burner and Rear Rotisserie Burner"
            price={1199}
            rating={4}
            image="https://m.media-amazon.com/images/I/51zgXh5d7DL._AC_SL1000_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
           />
        </div>  
          <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
           <Product
            id="90829332"
            title="ROANUDE Trampoline for Kids, 4.5 8FT Indoor & Outdoor Trampoline, Kids Trampoline with Enclosure Safety Net, Small Trampoline for Toddler"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81th+QDCbOS._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>  
        <div className="home__row">
          <Product
            id="4903850"
            title="SMAX Gaming Chair with Wide Seat Ergonomic Computer Gamer Chair with 4D Armrest Creamy PU Leather Headrest and Lumbar Support Racing Style High Back Video Game Chairs for Adults Black and Red"
            price={299.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61z7+vCfg2S._AC_UL480_FMwebp_QL65_.jpg"
          /> 
          <Product
            id="23445930"
            title="Xiaomi Redmi Note 10 Pro | 128GB 6GB RAM | Factory Unlocked (GSM ONLY | Not Compatible with Verizon/Sprint) | International Model (Onyx Gray)"
            price={349.90}
            rating={4}
            image="https://m.media-amazon.com/images/I/51UyTHwP6wL._AC_UY327_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="2K 4MP Zoomable Webcam with Privacy Cover & Dual Microphone, 3X Digital Zoom, 95-Degree Viewing, 2021 NexiGo Quad HD Business USB Camera for Online Class, Zoom Skype Facetime OBS Teams"
            price={59.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61K4-hcCbXL._AC_SL1500_.jpg"
           />
        </div>  
      </div>
        </div>
    )
}

export default Home
