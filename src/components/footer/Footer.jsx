import "./footer.css";
import { InstagramEmbed } from "react-social-media-embed";
import { Link } from "react-router-dom";

const Footer = ({ type }) => {
  return (
    <div>
      {type !== "banner" && (
        <>
          <div className="instagram-title-container">
            <h2 className="instagram-title">
              Jeżeli jesteś ciekaw jak będzie wyglądać twoja roślina, sprawdź
              nasz instagram!
            </h2>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "15px" }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/CdLXojdtBLF/"
              width={328}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/CQsimvMNpUD/"
              width={328}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/CRyJSvqNjUB/"
              width={328}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/CRoPZdtNPYb/"
              width={328}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/CNR-rElBJUm/"
              width={328}
            />
          </div>

          <div className="baner-allegro">
            <div className="baner-a">
              <h2 className="baner-title">Kup gotowe zestawy na allegro!</h2>
              <a
                href="https://allegro.pl/uzytkownik/Szybkauprawa?string=zestaw%20do%20uprawy"
                target="_blank"
                rel="noreferrer"
              >
                <button className="buy-in-allegro">
                  Sprawdź ofertę na allegro
                </button>
              </a>
              <img src="../img/jalapeno_box.png" alt="" className="baner-img" />
              <div className="baner-b">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-5"></div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="main-footer">
        <div className="footer">
          <div className="logo-footer">
            <div className="footer-circle">
              <img src="../img/logo.png" alt="" className="footer-logo" />
            </div>
            <div className="footer-circle-1"></div>
          </div>
          <div className="footer-1">
            <div className="ft-category cat">Dla klientów</div>
            <Link to="/zestawy-do-uprawy" className="footer-link">
              <div className="ft-category">Zestawy do uprawy</div>
            </Link>
            <Link to="/instrukcje" className="footer-link">
              <div className="ft-category">Instrukcje uprawy</div>
            </Link>
            <a
              href="https://allegro.pl/uzytkownik/Akadama"
              className="footer-link"
            >
              <div className="ft-category">Kup zestaw na Allegro</div>
            </a>
          </div>
          <div className="footer-1">
            <div className="ft-category cat">O firmie</div>
            <Link to="/#" className="footer-link">
              <div className="ft-category">Regulamin</div>
            </Link>
            <Link to="/kontakt" className="footer-link">
              <div className="ft-category">Kontakt</div>
            </Link>
          </div>
          <div className="footer-1">
            <div className="ft-category cat">Panel</div>
            <Link to="/b2b/login" className="footer-link">
              <div className="ft-category">Panel klienta</div>
            </Link>
          </div>
        </div>

        <hr className="footer-hr" />

        <div className="second-footer">
          <div className="footer-desc">
            <div className="footer-privacy">
              <span className="privacy">
                Szybkauprawa 2022 - Wszelkie prawa zastrzeżone
              </span>
            </div>
            <div className="footer-privacy">
              <span className="privacy">Regulamin</span>
              <span className="privacy">Polityka prywatności</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
