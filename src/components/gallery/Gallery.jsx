import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../gallery/gallery.css";

const Gallery = () => {
  const images = [
    {
      id: 1,
      title: "Doniczka brązowa 13 cm",
      original: "../img/kit/doniczka_1.png",
      thumbnail: "../img/kit/doniczka_1.png",
    },
    {
      id: 2,
      title: "Podłoże organiczne 1L",
      original: "../img/kit/podloze_1.png",
      thumbnail: "../img/kit/podloze_1.png",
    },
    {
      id: 3,
      title: "Keramzyt 1.op (ok.60g)",
      original: "../img/kit/keramzyt.png",
      thumbnail: "../img/kit/keramzyt.png",
    },
    {
      id: 4,
      title: "Nasiona do uprawy domowej (różne ilości)",
      original: "../img/kit/nasiona_do_uprawy.png",
      thumbnail: "../img/kit/nasiona_do_uprawy.png",
    },
    {
      id: 5,
      title: "Hydrożel 1op. (ok.0.5g)",
      original: "../img/kit/hydrozel_1.png",
      thumbnail: "../img/kit/hydrozel_1.png",
    },
    {
      id: 6,
      title: "Pałeczki nawozowe na cały rok",
      original: "../img/kit/paleczki_nawozowe_1.png",
      thumbnail: "../img/kit/paleczki_nawozowe_1.png",
    },
    {
      id: 7,
      title: "Tablicza biała od opisywania roślin",
      original: "../img/kit/wskaznik_1.png",
      thumbnail: "../img/kit/wskaznik_1.png",
    },
    {
      id: 8,
      title: "Papierowa instrukcja uprawy",
      original: "../img/kit/instrukcja_uprawy.png",
      thumbnail: "../img/kit/instrukcja_uprawy.png",
    },
  ];

  return (
    <div className="gallery-main">
      <div className="gallery-title-container">
        <h2 className="gallerysss-title">Co zawiera każdy zestaw do uprawy?</h2>
      </div>
      <div className="gallery-main-container">
        <div className="gallery-left-container">
          {images.map((images, i) => (
            <div className="gallery-card border-vertical">
              {images.id}. {images.title}
            </div>
          ))}
        </div>

        <div className="gallery-right-container">
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
