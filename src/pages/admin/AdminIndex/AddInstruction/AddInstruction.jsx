import "../adminIndex.css";
import SideBar from "../../../../components/SideBar/SideBar";
import AddProduct from "../../../../components/AddProduct/AddProduct";
import Navigation from "../../../../components/navigation/Navigation";
import Footer from "../../../../components/footer/Footer";


export const AddInstruction = () => {
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
                <AddProduct />
               </div>
            </div>

        </div>

    </div>
    


    <Footer type="banner"/>
    </div>
  
  )
}

export default AddInstruction