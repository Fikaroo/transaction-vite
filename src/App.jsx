import { Route, Routes } from "react-router-dom";
import { Create, Header, Read, Update, Delete, Tab } from "./components";

const App = () => {
  return (
    <div className=" w-full pb-8 min-h-screen bg-white">
      <Header />
      <Tab />

      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/getTransaction" element={<Read />} />
        <Route path="/updateTransaction" element={<Update />} />
        <Route path="/deleteTransaction" element={<Delete />} />
      </Routes>
    </div>
  );
};

export default App;
