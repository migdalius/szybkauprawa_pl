import "../adminIndex.css";
import SideBar from "../../../../components/SideBar/SideBar";
import Navigation from "../../../../components/navigation/Navigation";
import Footer from "../../../../components/footer/Footer";
import List from "../../../../components/List/List";

export const ListInstruction = () => {
  return (
    <div>
      <Navigation />
      <div className="app__AdminIndex-main-container">
        <div className="app__AdminIndex-content-container">
          <div className="app__AdminIndex-contanet-wrap">
            <div className="app__AdminIndex-sidebar">
              <div className="app__AdminIndex-sidebar-content">
                <SideBar />
              </div>
            </div>
            <div className="app__AdminIndex-content">
              <List />
            </div>
          </div>
        </div>
      </div>
      <Footer type="banner" />
    </div>
  );
};

export default ListInstruction;
