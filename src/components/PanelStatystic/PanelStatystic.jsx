import "./panelStatystic.css";
import { useState, useEffect } from "react";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const PanelStatystic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "instruction"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const test = data.map((d) => d.category);
  const chilis = test.filter((name) => name === "chilis");
  const tomatos = test.filter((name) => name === "tomatos");
  const succulents = test.filter((name) => name === "succulents");
  const cat = test.filter((name) => name === "cat");
  const flowers = test.filter((name) => name === "flowers");
  const herbs = test.filter((name) => name === "herbs");
  const bonsai = test.filter((name) => name === "bonsai");

  return (
    <div className="app__PanelStatystic-main-container">
      <div className="app__PanelStatystic-container">
        <div className="app__PanelStatystic-stat-container">
          <div className="app__PanelStatystic-content">
            <div className="app__PanelStatystic-container-img">
              <img
                src="../img/zywe_kamienie_product.png"
                alt=""
                className="app__PanelStatystic-img"
              />
            </div>
            <h3 className="app__PanelStatystic-title-count">{data.length}</h3>
            <p>Wszystkich instrukcji</p>
          </div>
        </div>
        <div className="app__PanelStatystic-stat-container">
          <div className="app__PanelStatystic-content">
            <div className="app__PanelStatystic-container-img">
              <img
                src="../img/chilis.png"
                alt=""
                className="app__PanelStatystic-img"
              />
            </div>
            <h3 className="app__PanelStatystic-title-count">{chilis.length}</h3>
            <p>Papryki chili</p>
          </div>
        </div>
        <div className="app__PanelStatystic-stat-container">
          <div className="app__PanelStatystic-content">
            <div className="app__PanelStatystic-container-img">
              <img
                src="../img/pomidory.png"
                alt=""
                className="app__PanelStatystic-img"
              />
            </div>
            <h3 className="app__PanelStatystic-title-count">
              {tomatos.length}
            </h3>
            <p>Pomidory</p>
          </div>
        </div>
        <div className="app__PanelStatystic-stat-container">
          <div className="app__PanelStatystic-content">
            <div className="app__PanelStatystic-container-img">
              <img
                src="../img/kot.png"
                alt=""
                className="app__PanelStatystic-img"
              />
            </div>
            <h3 className="app__PanelStatystic-title-count">{cat.length}</h3>
            <p>Dla kota</p>
          </div>
        </div>

        <div className="app__PanelStatystic-stat-container">
          <div className="app__PanelStatystic-content">
            <div className="app__PanelStatystic-container-img">
              <img
                src="../img/sukulenty.png"
                alt=""
                className="app__PanelStatystic-img"
              />
            </div>
            <h3 className="app__PanelStatystic-title-count">
              {succulents.length}
            </h3>
            <p>Sukulenty</p>
          </div>
        </div>
        <div className="app__PanelStatystic-stat-container">
          <div className="app__PanelStatystic-content">
            <div className="app__PanelStatystic-container-img">
              <img
                src="../img/kwiaty.png"
                alt=""
                className="app__PanelStatystic-img"
              />
            </div>
            <h3 className="app__PanelStatystic-title-count">
              {flowers.length}
            </h3>
            <p className="app__PanelStatystic-title-count">Kwiaty</p>
          </div>
        </div>
        <div className="app__PanelStatystic-stat-container">
          <div className="app__PanelStatystic-content">
            <div className="app__PanelStatystic-container-img">
              <img
                src="../img/ziola.png"
                alt=""
                className="app__PanelStatystic-img"
              />
            </div>
            <h3 className="app__PanelStatystic-title-count">{herbs.length}</h3>
            <p className="app__PanelStatystic-title-count">Zioła</p>
          </div>
        </div>
        <div className="app__PanelStatystic-stat-container">
          <div className="app__PanelStatystic-content">
            <div className="app__PanelStatystic-container-img">
              <img
                src="../img/bonsai.png"
                alt=""
                className="app__PanelStatystic-img"
              />
            </div>
            <h3 className="app__PanelStatystic-title-count">{bonsai.length}</h3>
            <p className="app__PanelStatystic-title-count">Bonsai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelStatystic;
