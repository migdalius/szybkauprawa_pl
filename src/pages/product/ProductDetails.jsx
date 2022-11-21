import "./productDetails.css";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";

export const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const int = params.id;

  const getProductDetails = async () => {
    const docRef = doc(db, "instruction", int);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProduct(docSnap.data());
    } else {
      console.log("brak danych w db");
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const categoryName = product.category;
  const translate = {
    herbs: "Zioła",
    chilis: "Papryki chili",
    bonsai: "Bonsai",
    flowers: "Kwiaty",
    tomatos: "Pomidory",
    cat: "Dla Kota",
    succulent: "Sukulenty",
  };

  const difLevel = product.difficultyLevel;

  const translateLvl = {
    veryEasy: "Bardzo Łatwy",
    easy: "Łatwy",
    medium: "Średni",
    hard: "Trudny",
    veryHard: "Bardzo Trudny",
  };

  return (
    <div>
      <Navigation />
      <div className="app__ProductDetails-content-sidebar-520 ">
        <a href={product.allegroLink}>
          <button className="buy-now-button">KUP TERAZ</button>
        </a>
        <div className="app__ProductDetails-container-mobile">
          Czas kiełkowania:
          <br /> {product.germinationTime}
        </div>
        <div className="app__ProductDetails-container-mobile">
          Rodaj:
          <br /> {translate[categoryName]}
        </div>
        <div className="app__ProductDetails-container-mobile">
          Trudność uprawy:
          <br />
          {translateLvl[difLevel]}
        </div>
      </div>
      <div className="app___ProductDetails-main-container">
        <div className="app__ProductDetails-container">
          <div className="app__ProductDetails-content-container">
            <div className="app__ProductDetails-content-title">
              <h2>{product.title}</h2>
            </div>

            <div className="app__ProductDetail-grid-two">
              <div className="app__ProductDetail-text-center">
                {product.desc_watering}
              </div>

              <div>
                <img src={product.thumbnail} alt="" className="thumbnail-img" />
              </div>
            </div>
            <div className="app__ProductDetails-section-container">
              <h2 className="app__ProductDetails-text-title">Sadzenie</h2>
            </div>
            <div className="app__ProductDetails-section-container">
              <div className="app__ProductDetails-section-product">
                {product.desc_planting}
              </div>
            </div>
            <div className="app__ProductDetails-section-container">
              <h2 className="app__ProductDetails-text-title">Kiełowanie</h2>
            </div>
            <div className="app__ProductDetails-section-container">
              <div className="app__ProductDetails-section-product">
                {product.desc_gemination}
              </div>
            </div>
            <div className="app__ProductDetails-section-container">
              <img src={product.germination} alt="" className="another-img" />
            </div>
            <div className="app__ProductDetails-section-container">
              <h2 className="app__ProductDetails-text-title">Nawożenie</h2>
            </div>
            <div className="app__ProductDetails-section-container">
              <div className="app__ProductDetails-section-product">
                {product.desc_fertilization}
              </div>
            </div>
            <div className="app__ProductDetails-section-container">
              <img src={product.growing} alt="" className="another-img" />
            </div>
            <div className="app__ProductDetails-section-container">
              <h2 className="app__ProductDetails-text-title">
                Przycinanie / Owocowanie
              </h2>
            </div>
            <div className="app__ProductDetails-section-container">
              <div className="app__ProductDetails-section-product">
                {product.desc_fructification}
              </div>
            </div>
            <div className="app__ProductDetails-section-container">
              <img
                src={product.fructification}
                alt=""
                className="another-img"
              />
            </div>
            <div className="app__ProductDetails-section-container">
              <div className="app__ProductDetails-section-product">
                {product.desc_additional}
              </div>
            </div>
          </div>

          <div className="app__ProductDetails-content-sidebar">
            <div className="app__ProductDetails-content-sidebar-container">
              <div className="app__ProductDetails-content">
                <div>Czas kiełkowania</div>
              </div>
              <div className="app__ProductDetails-content">
                <p>{product.germinationTime}</p>
              </div>
            </div>
            <hr className="neutral-hr"></hr>
            <div className="app__ProductDetails-content-sidebar-container">
              <div className="app__ProductDetails-content">
                <div>Rodzaj</div>
              </div>
              <div className="app__ProductDetails-content">
                <p>{translate[categoryName]}</p>
              </div>
            </div>
            <hr className="neutral-hr"></hr>
            <div className="app__ProductDetails-content-sidebar-container">
              <div className="app__ProductDetails-content">
                <div>Trudność uprawy</div>
              </div>
              {/* zmiana kolor zielony, zółty, czerwony */}
              <div className="app__ProductDetails-content">
                <p className="easy">{translateLvl[difLevel]}</p>
              </div>
            </div>
            <hr className="neutral-hr"></hr>
            <div className="buy-now-container">
              <p>Kup zestaw na allegro</p>
              <a href={product.allegroLink}>
                <button className="buy-now-button">KUP TERAZ</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer type="banner" />
    </div>
  );
};

export default ProductDetails;
