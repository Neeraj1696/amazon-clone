import React from "react";
import "./Home.css";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
          alt="home img"
        />
        <div className="home_row">
          <Product
            title="WOW Skin Science Apple Cider Vinegar Shampoo - Restores Shine & Smoothness - 300ml"
            price={500}
            image="https://m.media-amazon.com/images/I/71zpu612ieL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
            id={1}
          />
          <Product
            title="Vitro MY BEAUTY BUNDLE Skin Care Gift Set For Men & Women | Combo of Toothpaste, Rose Water, Aloe Vera Gel, Aloe Jojoba Shampoo, Herbal Hair Conditioner Gift Set For Birthday, Anniversay, Wedding,New Year Gift"
            price={399}
            image="https://m.media-amazon.com/images/I/61MSDfj89wL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
            id={2}
          />

          {/* Product */}
          {/* Product */}
        </div>
        <div className="home_row">
          <Product
            title="WOW Skin Science UV Sunscreen Spray Spf 50, 100 ml"
            price={299}
            image="https://m.media-amazon.com/images/I/61ojfQuujcL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
            id={3}
          />
          <Product
            title="H2O Unbreakable Plastic Bottle Set, 1 Litre, Set of 7, Multicolour"
            price={500}
            image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
            rating={2}
            id={4}
          />
          <Product
            title="Boldfit Sports Water Bottle - Leak-Proof BPA-Free Material Aqua Sipper Water Bottle for Home, Office, Gym Trekking, Camping"
            price={599}
            image="https://images-na.ssl-images-amazon.com/images/I/41AtSYlLobL._AC_SY400_.jpg"
            rating={4}
            id={5}
          />
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home_row">
          <Product
            title="LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UP7500PTZ (Rocky Black) (2021 Model)"
            price={49999}
            image="https://m.media-amazon.com/images/I/71vZLIfj5yS._AC_UY327_FMwebp_QL65_.jpg"
            rating={2}
            id={6}
          />
          {/* Product */}
        </div>
      </div>
    </div>
  );
};

export default Home;
