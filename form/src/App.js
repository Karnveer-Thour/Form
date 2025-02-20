import { useState } from "react";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress,setProgress]=useState(0);
  return (
    <div className="App btn fs-5">
      <Navbar />
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Form setProgress={setProgress}/>
    </div>
  );
}

export default App;
