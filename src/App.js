import React, { useEffect, useState } from "react";
import { short } from "./api/data";
import { SearchOutlined, FileCopyOutlined } from "@material-ui/icons";
import { Button, LinearProgress } from "@material-ui/core";
import style from "./App.module.css";
import copy from "copy-to-clipboard";

const App = ({ value }) => {
  const [url, setUrl] = useState([]);
  const [result, setResult] = useState([]);

  const getInfo = async () => {
    try {
      if (url.length == 0) {
        return alert("Please fill the box");
      }
      const getResult = await short(url);
      setResult([getResult]);
    } catch (error) {
      console.log(error);
    }
  };

  const copied = () => {
    const output = document.querySelector("#output").innerHTML;
    copy(result[0].result_url);
    alert("Successfully copied: " + result[0].result_url);
  };

  return (
    <div className={style.container}>
      <h1>Url Shortner</h1>
      <div className={style.inputBox}>
        <input
          type="url"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          placeholder="Enter the Long URL....."
        />
        <SearchOutlined
          className={style.search}
          onClick={getInfo}
        ></SearchOutlined>
      </div>

      <Button className={style.btn} onClick={getInfo}>
        Submit
      </Button>
      {result.length > 0 && result[0].result_url ? (
        <div className={style.result} onClick={copied}>
          <h2 id="output">
            {result.length > 0 && result[0].result_url
              ? result[0].result_url
              : null}
          </h2>
          <FileCopyOutlined className={style.file}></FileCopyOutlined>
        </div>
      ) : null}
    </div>
  );
};

export default App;
