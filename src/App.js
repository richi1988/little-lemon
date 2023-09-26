import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReservationPage from "./pages/ReservationPage";
import "../src/assets/css/styles.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </>
  );
}
