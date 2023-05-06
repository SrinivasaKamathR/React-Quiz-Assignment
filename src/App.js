import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./UI/LoadingSpinner";
const Home = React.lazy(() => import("./Components/Home"));
const Instructions = React.lazy(() => import("./Components/Instructions"));
const Quiz = React.lazy(() => import("./Components/Quiz"));

//import Home from "./Components/Home";
//import Instructions from "./Components/Instructions";
//import Quiz from "./Components/Quiz";
function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [name, setName] = useState("");
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home setName={setName} name={name} />} />
          <Route
            path="/quiz"
            element={<Quiz startTimer={startTimer} setName={setName} />}
          />
          <Route
            path="/instructions"
            element={<Instructions setStartTimer={setStartTimer} name={name} />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
