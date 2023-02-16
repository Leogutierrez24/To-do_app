import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/routes/home/Home";
import { EditPage } from "./components/routes/editPage/EditPage";
import { NewPage } from "./components/routes/newPage/NewPage";
import { NotFoundPage } from "./components/routes/notFoundPage/NotFoundPage";

function App(){
  

  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </>
  );
}

export default App;