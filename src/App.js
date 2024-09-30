import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Your header with nav links
import Home from "./pages/Home"; // The main layout that includes Leftside and Rightside (for home)
import Network from "./pages/Network"; // Network page component
import Jobs from "./pages/Jobs"; // Jobs page component
import Notifications from "./pages/Notifications"; // Notifications page component

function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
    //  <Header />
    
      <Routes>
  <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route
          path="/home"
          element={<Home username={username} showRightside={true} />}
        />
        <Route
          path="/network"
          element={<Home username={username} showRightside={false} content="network" />}
        />
        <Route
          path="/jobs"
          element={<Home username={username} showRightside={false} content="jobs" />}
        />
        <Route
          path="/notifications"
          element={<Home username={username} showRightside={false} content="notifications" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
