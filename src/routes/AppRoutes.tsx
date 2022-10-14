import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import UseRef from "../pages/useRef/UseRef";
import UseState from "../pages/useState/UseState";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/useRef" element={<UseRef />}></Route>
                <Route path="/useState" element={<UseState />}></Route>
            </Routes>
        </BrowserRouter>
    )
}