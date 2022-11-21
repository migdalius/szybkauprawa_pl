import "./topProduct.css";

const TopProduct = () => {
  const products = [
    {
      id: 1,
      img: "../img/jalapeno_product.png",
      title: "Zestaw do uprawy jalapeno",
      desc: "Najpopularniejsza odmiana papryki chili na świecie, również w naszej firmie jest to najczęściej kupowany zestaw do uprawy.",
      growdesc: "6 - 26 dni",
      link: "https://allegro.pl/uzytkownik/Akadama?string=jalapeno",
      style: "single-product top-1",
    },
    {
      id: 2,
      img: "../img/owies_dla_kota_product.png",
      title: "Zestaw do uprawy owies dla kota",
      desc: "Owies dla kota szybko rośnie i wspomaga trawienie każdemu kotu.",
      growdesc: "6 - 14 dni",
      link: "https://allegro.pl/uzytkownik/Akadama?string=owies",
      style: "single-product",
    },
    {
      id: 3,
      img: "../img/mimoza_wstydliwa_product.png",
      title: "Zestaw do uprawy mimoza",
      desc: "Specyficzna roślina reagująca na pory dnia i dotyk człowieka.",
      growdesc: "28 - 35 dni",
      link: "https://allegro.pl/uzytkownik/Akadama?string=mimoza",
      style: "single-product",
    },
    {
      id: 4,
      img: "../img/zywe_kamienie_product.png",
      title: "Zestaw do uprawy żywe kamienie",
      desc: "Sukulent przypominający małe kolorowe kamienie, najlepiej rośnie w grupach.",
      growdesc: "40 - 60 dni",
      link: "https://allegro.pl/uzytkownik/Akadama?string=%C5%BCywe%20kamienie",
      style: "single-product",
    },
    {
      id: 5,
      img: "../img/habanero_czerwone_product.png",
      title: "Zestaw do uprawy habanero czerwone",
      desc: "Habanero druga najpopularniejsza, odmiana chili, 20-krotnie mocniejsza od jalapeno.",
      growdesc: "6 - 26 dni",
      link: "https://allegro.pl/uzytkownik/Akadama?string=habanero%20czerwone",
      style: "single-product",
    },
    {
      id: 6,
      img: "../img/trawa_dla_kota_product.png",
      title: "Zestaw do uprawy trawa cypryjska",
      desc: "Trawa cypryjska, idealne uzupełnienie dla owsa. Szczególnie dla kotów, które jedzą surowe mięso.",
      growdesc: "3 - 14 dni",
      link: "https://allegro.pl/uzytkownik/Akadama?string=trawa%20cypryjska",
      style: "single-product",
    },
    {
      id: 7,
      img: "../img/plomien_afryki_product.png",
      title: "Zestaw do uprawy płomień afryki",
      desc: "Bonsai płomień afryki szybko kiełkuje i ma bardzo duże początkowe przyrosty ok.30 cm w pierwszym roku.",
      growdesc: "30 - 84 dni",
      link: "https://allegro.pl/uzytkownik/Akadama?string=p%C5%82omie%C5%84%20afryki",
      style: "single-product",
    },
  ];

  return (
    <div className="tp">
      <div className="top-product-title-container">
        <h2 className="top-product-title">
          TOP 7 najpopularniejszych zestawów do uprawy
        </h2>
      </div>
      <div className="top-product-main-container">
        <div className="top-product">
          {products.map((product) => (
            <div className={product.style}>
              {product.id === 1 ? (
                <img src={product.img} alt="" className="product-img-top" />
              ) : (
                <img src={product.img} alt="" className="product-img" />
              )}
              {product.id === 1 ? <div className="top-label">TOP 1</div> : ""}
              <a href={product.link} target="_blank" rel="noreferrer">
                <div className="product-title">{product.title}</div>
              </a>
              <p className="product-desc">{product.desc}</p>
              <span className="grow-time">
                Czas kiełkowania <br />
              </span>
              <span className="grow-time-desc">{product.growdesc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
