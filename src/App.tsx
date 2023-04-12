import{ useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import Info from "./components/info/info";
import Header from "./components/header/header";
import Tags from './components/tags/tags';

function App() {
  const [data, setData] = useState(null);
  const [, setError] = useState(null);

  useEffect(() => {
    axios("https://petstore.swagger.io/v2/swagger.json")
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch(setError);
  }, []);

  return (
    <div>
      <Header title={data?.info.title} version={data?.info.version} />
      <div className='container'>
        <Info info={data?.info} />
        <Tags tags={data?.tags} paths={data?.paths} />
      </div>
    </div>
  );
}

export default App;
