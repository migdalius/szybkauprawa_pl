import "./hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const categoryHandler = (e) => {
    const clicked = e.target;
    console.log(clicked);
    const id = clicked.closest(".topClass").id;

    navigate("/instrukcje", { state: id });
  };
  return (
    <div>
      <div className="heroTitle">
        <h1 className="mainTitle">Znajdź instrukcje zestawu do uprawy</h1>
      </div>
      <div className="heroCards ls">
        <div
          className="leftCardWrap card topClass "
          id="chilis"
          onClick={categoryHandler}
        >
          <div className="chiliCard ">
            <div className="productCard">
              <img src="./img/chilis.png" alt="" className="chilisImg" />
              <h2 className="subTitle">Papryki Chili</h2>

              <hr className="chili-hr" />
            </div>
          </div>
        </div>

        <div className="midCardWrap">
          <div
            className="sukulentyCard smallCard card topClass"
            id="succulents"
            onClick={categoryHandler}
          >
            <div className="productSubCard">
              <img src="./img/sukulenty.png" alt="" className="smallImg" />
              <h3 className="smallCardTitle">Sukulenty</h3>
            </div>
          </div>
          <div
            className="kwiatCard smallCard card topClass"
            id="flowers"
            onClick={categoryHandler}
          >
            <div className="productSubCard">
              <img src="./img/kwiaty.png" alt="" className="smallImg" />
              <h3 className="smallCardTitle">Kwiaty</h3>
            </div>
          </div>
          <div
            className="pomidoryCard smallCard card topClass"
            id="tomatos"
            onClick={categoryHandler}
          >
            <div className="productSubCard">
              <img src="./img/pomidory.png" alt="" className="smallImg" />
              <h3 className="smallCardTitle">Pomidory</h3>
            </div>
          </div>
        </div>
        <div className="rightCardWrap">
          <div
            className="ziolaCard smallCard card topClass"
            id="herbs"
            onClick={categoryHandler}
          >
            <div className="productSubCard">
              <img src="./img/ziola.png" alt="" className="smallImg" />
              <h3 className="smallCardTitle">Zioła</h3>
            </div>
          </div>
          <div
            className="kotaCard smallCard card topClass"
            id="cat"
            onClick={categoryHandler}
          >
            <div className="productSubCard">
              <img src="./img/kot.png" alt="" className="smallImg" />
              <h3 className="smallCardTitle">Dla kota</h3>
            </div>
          </div>
          <div
            className="bonsaiCard smallCard card topClass"
            id="bonsai"
            onClick={categoryHandler}
          >
            <div className="productSubCard">
              <img src="./img/bonsai.png" alt="" className="smallImg" />
              <h3 className="smallCardTitle">Bonsai</h3>
            </div>
          </div>
          <div
            className="last smallCard card topClass"
            id="chilis"
            onClick={categoryHandler}
          >
            <div className="productSubCard">
              <img src="./img/chilis.png" alt="" className="smallImg" />
              <h2 className="smallCardTitle">Papryki Chili</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
