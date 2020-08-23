import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_ft._CB407693867_.jpg" 
                alt=""    
            />
            {/* Product id, title, price, rating, image */}
            {/* Product */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The lean Startup: How constant Inovation creates"
                    price={11.96}
                    rating={5}
                    image="https://staticimg.titan.co.in/Fastrack/Catalog/3120SL01_1.jpg?pView=pdp"
                    
                />
                <Product
                    id="12321341"
                    title="The lean Startup: How constant Inovation creates"
                    price={11.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/495/594/jw9ke4w0/backpack/3/6/c/brat-2-bpbra2bbl-backpack-skybags-original-imafgzc9fdwsyasr.jpeg?q=50"
                    
                />
            </div>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The lean Startup: How constant Inovation creates"
                    price={11.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/495/594/jm3ro280/t-shirt/9/h/f/m-style-tshirt-try-this-original-imaf8zxukgz3cjhq.jpeg?q=50"
                    
                />
                <Product
                    id="12321341"
                    title="The lean Startup: How constant Inovation creates"
                    price={11.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/495/594/k4bms280/t-shirt/5/b/t/m-11-v-neck-try-this-original-imaf969m4due9wbm.jpeg?q=50"
                    
                />
                <Product
                    id="12321341"
                    title="The lean Startup: How constant Inovation creates"
                    price={11.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/495/594/jpcxrww0/jewellery-set/n/b/s/m4081fl-etnico-original-imaez9phhvhvnm73.jpeg?q=50"
                    
                />
            </div>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The lean Startup: How constant Inovation creates"
                    price={11.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/television/6/7/6/samsung-la32d550k1r-original-imad2hhdkcybtzbd.jpeg?q=70"
                    
                />
            </div>
        </div>
    )
}

export default Home
