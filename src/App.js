import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const ChangeMode = (color, bgColor) => {
      setMode("dark");
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = color;
      toggleAlert(" Mode is Changed", "success");
    };
    

  return (
    <>
      <Router>
        <Navbar title="TextAnalyzer" mode={"dark"} ChangeMode={ChangeMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={Mode}/>} />
            <Route
              exact
              path="/TextUtils-React_JS"
              element={
                <TextForm
                  toggleAlert={toggleAlert}
                  heading="Enter text to analyse"
                  mode={Mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
