import "./list.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import Pagination from "../Pagination/Pagination";

export const List = () => {
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "instruction", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const [deleteButtonState, setDeleteButtonState] = useState(true);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = data.slice(firstProductIndex, lastProductIndex);

  const toggleDeleteHandler = () => {
    const btns = document.getElementsByClassName("disabled-button");
    // for (let i = 0; i < btns.length; i++) {
    if (btns[0].disabled) {
      setDeleteButtonState(false);
    } else {
      setDeleteButtonState(true);
    }
    // }
  };
  return (
    <div className="main-container">
      <div className="app__sideBarAdmin-header">
        <div className="app__sideBarAdmin-title flex-space-between">
          <div>
            <h2>Lista instrukcji</h2>
          </div>

          <div className="app__sideBardAdmin-toggle-container">
            <div className="app__sideBarAdmin-toggle-title">
              Włącz usuwanie instrukcji
              {deleteButtonState ? " nieaktywne" : " aktywne"}
            </div>
            <input
              type="checkbox"
              className="app__sideBarAdmin-toggle"
              onClick={toggleDeleteHandler}
            />
          </div>
          <div>
            <Link to="/admin/dodaj-instrukcje">
              <button className="app__sideBarAdmin-button-add">
                Dodaj Instrukcje
              </button>
            </Link>
          </div>
        </div>
      </div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Kategoria</th>
            <th>Miniatura</th>
            <th>Edytuj</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((data) => (
            <tr>
              <td>{data.title}</td>
              <td>{data.category}</td>
              <td>
                <img src={data.thumbnail} alt="" className="app__table-img" />
              </td>
              <td>
                <button
                  className="list-delete-button disabled-button"
                  disabled={deleteButtonState}
                  onClick={() => handleDelete(data.id)}
                >
                  Usuń
                </button>
                <Link to={`/admin/edytuj-produkt/${data.id}`}>
                  <button className="list-edit-button">Edytuj</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="app__List-pagination">
        <Pagination
          totalProducts={data.length}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default List;
