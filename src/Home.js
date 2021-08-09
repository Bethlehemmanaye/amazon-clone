import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return(
        <div className="home">
          <div className="home__container">
              <img 
                className="home__image "
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                alt=""/>
          </div>
          <div className="home__row">
              <Product
              id="12321341"
              title="The lean startup"
              price={29.99} 
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
              rating={5}
              />
              <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for baking,"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg"
              />
          
              </div>
          <div className="home__row">
            <Product
            id="23445930"
            title="Amazon echo charger"
            price={98.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg"
            />
            <Product
            id="23893300"
            title="Hello am betty"
            price={89.33}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg"
            />
            <Product
            image="https://m.media-amazon.com/images/I/51I3P6BkGvL._AC_SL260_.jpg"/>
          </div>
          <div className="home__row">
              <Product
              image="https://m.media-amazon.com/images/I/51uMPn4H6dS._AC_SY200_.jpg"/>
          </div>
            </div>
    );
}
export default Home
