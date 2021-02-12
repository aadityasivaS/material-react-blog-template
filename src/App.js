import React from "react";
import AppBar from "./components/AppBar";
import FAB from "./components/FAB";
import BlogGrid from "./components/BlogGrid";
function App() {
  return (
    <main>
      <AppBar />
      <div className="edge-spacing">
        <BlogGrid />
      </div>
      <FAB />
    </main>
  );
}

export default App;
