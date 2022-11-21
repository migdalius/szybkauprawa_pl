import "./addProduct.css";

import { useEffect, useState } from "react";
import {
  doc,
  serverTimestamp,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  //array img
  const [filesObject, setFilesObject] = useState({});
  //img upload percentage
  const [per, setPer] = useState(null);
  //object with information about product
  const [data, setData] = useState({});
  //Initialisation useNavigate hook
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = (id, fileObject) => {
      const storageRef = ref(storage, fileObject.name);
      const uploadTask = uploadBytesResumable(storageRef, fileObject);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, [id]: downloadURL }));
          });
        }
      );
    };

    //Iterate through filesObject
    for (let [id, fileObject] of Object.entries(filesObject)) {
      uploadFile(id, fileObject);
    }
  }, [filesObject]);

  //Reach data from input and change specified by id property in data object
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  //Reach all data in form, and send to db
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      const res = await addDoc(collection(db, "instruction"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate("/admin/lista-instrukcji");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app__sideBarAdmin-right-container">
      <div className="app__sideBarAdmin-header">
        <div className="app__sideBarAdmin-title">
          <h2>Dodaj Instrukcje</h2>
        </div>
        <form onSubmit={handleAdd}>
          <div className="app__sideBarAdmin-form-container">
            <div className="app__sideBarAdmin-container">
              <label>Tytuł Zestawu</label>
              <input
                id="title"
                className="app__SideBarAdmin-input"
                type="text"
                onChange={handleInput}
              />
            </div>
            <div className=" img-input">
              <div className="file">
                <p className="new-title">Miniatura</p>

                <div>
                  <label className="file-upload">
                    <input
                      type="file"
                      id="thumbnail"
                      onChange={(e) =>
                        setFilesObject({
                          ...filesObject,
                          [e.target.id]: e.target.files[0],
                        })
                      }
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="new-icons"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </label>
                </div>
                <div className="old-img-container">
                  {data.thumbnail ? (
                    <>
                      <p class="old-img-desc">Obecne zdjęcie</p>
                      <img src={data.thumbnail} alt="" className="old-img" />
                    </>
                  ) : (
                    <>
                      <p class="old-img-desc">Brak zdjęcia</p>
                      <img
                        src="../../img/brak_zdjecia.png"
                        alt=""
                        className="old-img"
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="just-hr"></div>
              <div className="file">
                <p className="new-title">Kiełkowanie</p>
                <label className="file-upload">
                  <input
                    type="file"
                    id="germination"
                    onChange={(e) =>
                      setFilesObject({
                        ...filesObject,
                        [e.target.id]: e.target.files[0],
                      })
                    }
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="new-icons"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </label>
                <div className="old-img-container">
                  {data.germination ? (
                    <>
                      <p class="old-img-desc">Obecne zdjęcie</p>
                      <img src={data.germination} alt="" className="old-img" />
                    </>
                  ) : (
                    <>
                      <p class="old-img-desc">Brak zdjęcia</p>
                      <img
                        src="../../img/brak_zdjecia.png"
                        alt=""
                        className="old-img"
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="just-hr"></div>
              <div className="file">
                <p className="new-title">Dorastanie</p>
                <label className="file-upload">
                  <input
                    type="file"
                    id="growing"
                    onChange={(e) =>
                      setFilesObject({
                        ...filesObject,
                        [e.target.id]: e.target.files[0],
                      })
                    }
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="new-icons"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </label>
                <div className="old-img-container">
                  {data.growing ? (
                    <>
                      <p class="old-img-desc">Obecne zdjęcie</p>
                      <img src={data.growing} alt="" className="old-img" />
                    </>
                  ) : (
                    <>
                      <p class="old-img-desc">Brak zdjęcia</p>
                      <img
                        src="../../img/brak_zdjecia.png"
                        alt=""
                        className="old-img"
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="just-hr"></div>
              <div className="file">
                <p className="new-title">Owocowanie</p>
                <label className="file-upload">
                  <input
                    type="file"
                    id="fructification"
                    onChange={(e) =>
                      setFilesObject({
                        ...filesObject,
                        [e.target.id]: e.target.files[0],
                      })
                    }
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="new-icons"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </label>
                <div className="old-img-container">
                  {data.fructification ? (
                    <>
                      <p class="old-img-desc">Obecne zdjęcie</p>
                      <img
                        src={data.fructification}
                        alt=""
                        className="old-img"
                      />
                    </>
                  ) : (
                    <>
                      <p class="old-img-desc">Brak zdjęcia</p>
                      <img
                        src="../../img/brak_zdjecia.png"
                        alt=""
                        className="old-img"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="app__sideBarAdmin-container">
              <label className="textarea-label">
                Czas kiełkowania
                <span className="span-light"> np: od 3 do 14 dni</span>
              </label>
              <input
                id="germinationTime"
                className="app__SideBarAdmin-input"
                type="text"
                onChange={handleInput}
              />
            </div>
            <div className="app__sideBarAdmin-container">
              <label className="textarea-label">
                Link do aukcji z produktem
              </label>
              <input
                id="allegroLink"
                className="app__SideBarAdmin-input"
                type="text"
                onChange={handleInput}
              />
            </div>
            <div className="app__sideBarAdmin-container">
              <label className="textarea-label">Poziom Trudności</label>
              <select
                id="difficultyLevel"
                name="difficulty level"
                className="select"
                onChange={handleInput}
              >
                <option>Wybierz poziom trudności</option>
                <option value="veryEasy">Bardzo łatwy</option>
                <option value="easy">Łatwy</option>
                <option value="medium">Średni</option>
                <option value="hard">Trudny</option>
                <option value="veryHard">Bardzo Trudny</option>
              </select>
            </div>
            <div className="app__sideBarAdmin-container">
              <label className="textarea-label">Podlewanie</label>
              <textarea
                className="textarea"
                id="desc_watering"
                type="text"
                rows="15"
                onChange={handleInput}
              />
            </div>
            <div className="app__sideBarAdmin-container">
              <label className="textarea-label">Kategoria</label>
              <select
                id="category"
                name="category"
                className="select"
                onChange={handleInput}
              >
                <option>Dodaj kategorie</option>
                <option value="chilis">Papryki chili</option>
                <option value="tomatos">Pomidory</option>
                <option value="cat">Dla kota</option>
                <option value="succulents">Sukulenty</option>
                <option value="flowers">Kwiaty</option>
                <option value="herbs">Zioła</option>
                <option value="bonsai">Bonsai</option>
              </select>
            </div>
            <div className="app__sideBarAdmin-container">
              <label className="textarea-label">Sadzenie</label>
              <textarea
                className="textarea"
                id="desc_planting"
                type="text"
                rows="10"
                onChange={handleInput}
              />
            </div>
            <div className="app__sideBarAdmin-container">
              <label className="textarea-label">Kiełkowanie</label>
              <textarea
                className="textarea"
                id="desc_germination"
                type="text"
                rows="10"
                onChange={handleInput}
              />
            </div>
            <div className="app__sideBarAdmin-container">
              <label className="textarea-label">Nawożenie</label>
              <textarea
                className="textarea"
                id="desc_fertilization"
                type="text"
                rows="10"
                onChange={handleInput}
              />
            </div>
            <div className="app__sideBarAdmin-container">
              <label className="textarea-label">Owocowanie / Przycinanie</label>
              <textarea
                className="textarea"
                id="desc_fructification"
                type="text"
                rows="10"
                onChange={handleInput}
              />
            </div>
            <div className="app__sideBarAdmin-container">
              <label className="textarea-label">*Doddatkowe pole</label>
              <textarea
                className="textarea"
                id="desc_additional"
                type="text"
                rows="10"
                onChange={handleInput}
              />
            </div>
            <button className="new-button" type="submit">
              Dodaj instrukcje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
