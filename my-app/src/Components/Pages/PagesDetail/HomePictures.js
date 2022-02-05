import React from "react";
import "./HomePictures.css";
import HomePicturesItem from "./HomePicturesItem";

function HomePictures() {
  return (
    <div className="cards">
      <h1>The most beautiful destinations you could ever dream of !!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <HomePicturesItem
              src="Images/img-1.jpg"
              text="Enjoy beautiful treks in the Vietnamese countryside"
              label="Trekking"
              path="/services"
            />
            <HomePicturesItem
              src="Images/img-2.jpg"
              text="Come sleep under the stars in the Namibian desert"
              label="Scenery"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <HomePicturesItem
              src="Images/img-3.jpg"
              text="Relax in the beautiful crystal clear waters of Tahiti"
              label="Resting"
              path="/services"
            />
            <HomePicturesItem
              src="Images/img-4.jpg"
              text="Explore the mystical lands of Japan and its Mount Fuji"
              label="magic landscape"
              path="/products"
            />
            <HomePicturesItem
              src="Images/img-5.jpg"
              text="Connect with nature by visiting the mysterious lands of Iceland"
              label="Adventure"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default HomePictures;
