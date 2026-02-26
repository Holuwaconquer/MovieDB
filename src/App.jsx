import React from "react";
import MovieProvider from "./components/MovieProvider";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <MovieProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            {/* <Route path="/:id" element={}/>*/}
          </Route>
        </Routes>
      </BrowserRouter>
      </MovieProvider>
    </div>
  );
};

export default App;
