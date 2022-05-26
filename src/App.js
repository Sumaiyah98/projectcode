import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqScreen from "./screens/FaqScreen";
import MakeAppointment from "./screens/customer/MakeAppointment";


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path = "/FaqScreen" element = {<FaqScreen />}/>
        <Route path = "/makeappointment" element = {<MakeAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
