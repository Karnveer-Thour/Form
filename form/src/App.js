import { useState } from "react";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress,setProgress]=useState(0);
  return (
    <div className="App w-100 h-100 d-flex flex-column align-items-center justify-content-center">
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
