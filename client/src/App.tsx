import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable={false}
        theme={"colored"}
      />
      <MainPage />
    </>
  );
}

export default App;
