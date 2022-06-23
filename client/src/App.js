import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [contents, setContents] = useState([]);

  const fetchContents = async () => {
    const response = await fetch("http://localhost:8000/api");
    console.log(await response.json());
  };
  useEffect(() => {
    fetchContents();
  }, []);

  return <></>;
}
export default App;
