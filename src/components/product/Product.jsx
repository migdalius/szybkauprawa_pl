import "./product.css";
import "../../main.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Pagination from "../Pagination/Pagination";

const Product = () => {
  const location = useLocation();

  const Category = [
    {
      id: 1,
      title: "Chilis",
      img: "../img/chilis.png",
      category: "chilis",
    },
    {
      id: 2,
      title: "Pomidory",
      img: "../img/pomidory.png",
      category: "tomatos",
    },
    {
      id: 3,
      title: "Dla kota",
      img: "../img/kot.png",
      category: "cat",
    },
    {
      id: 4,
      title: "Sukulenty",
      img: "../img/sukulenty.png",
      category: "succulents",
    },
    {
      id: 5,
      title: "Kwiaty",
      img: "../img/kwiaty.png",
      category: "flowers",
    },
    {
      id: 6,
      title: "Zioła",
      img: "../img/ziola.png",
      category: "herbs",
    },
    {
      id: 7,
      title: "Bonsai",
      img: "../img/bonsai.png",
      category: "bonsai",
    },
  ];

  const [query, setQuery] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    setQuery(location.state);
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

  //
  let chosenProductsData = data;
  if (query) {
    chosenProductsData = data.filter(
      (el) => el.title.toLowerCase().includes(query) || el.category === query
    );
  }

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = chosenProductsData.slice(
    firstProductIndex,
    lastProductIndex
  );

  return (
    <section className="product-body">
      <div>
        <div className="search-container pt-20">
          <div className="search-title">
            <h2 className="s-title">Szukaj instrukcji dla zestawu</h2>
          </div>
          <div className="instruction-count">
            Obecna ilość instrukcji: {data.length}
          </div>
          <div className="search-input pt-40">
            <input
              type="text"
              placeholder="np: Zestaw do uprawy jalapeno"
              className="search"
              onChange={(e) => {
                setQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="category-product pt-20">
            {Category.map((cat) => (
              <div
                key={cat.id}
                className="single-category"
                id={cat.category}
                onClick={(e) => {
                  setQuery(cat.category);
                  setCurrentPage(1);
                }}
              >
                <div className="detail-category pt-10">
                  <div className="category-img">
                    <img src={cat.img} alt="" className="img" />
                  </div>
                  <span className="cat-title">{cat.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="product mt-60 ">
          {currentProducts.map((el) => (
            <div
              key={el.id}
              className={`single-product-container ${el.category}`}
            >
              <div className="single-product-img-container">
                <img src={el.thumbnail} alt="" className="img" />
              </div>
              <div className="single-product-title ">{el.title}</div>

              <a href={`/product/${el.id}`}>
                <button className="single-product-button">Instrukcja</button>
              </a>
            </div>
          ))}
        </div>
        <div className="app__Product-component-pagination-container">
          <Pagination
            totalProducts={chosenProductsData.length}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
