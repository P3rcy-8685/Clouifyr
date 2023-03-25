import React, { useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";
import { ABI } from "./ABI";
import { providers, ethers } from "ethers";
import axios from "axios";
const Upload = () => {
  const [title, setTitle] = useState("");
  const [charge, setCharge] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const deploy = async (title, file, desc, charge) => {
    setLoading(true);
    const output = await lighthouse.upload(
      file,
      "f3a509cf-00d5-4c5c-ad49-c9e033a8805f",
      progressCallback
    );
    console.log("File Status:", output);
    console.log(
      "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
    );

    const data = new URLSearchParams();
    data.append("uri", output.data.Hash);
    data.append("appName", title);

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("Using account: ", accounts[0]);
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(accounts[0]);
    const addToChain = new ethers.Contract(
      "0x44D7bc6f4CAE9dA760789B6Bc4A99F36513183cc",
      ABI,
      provider
    );
    await addToChain
      .connect(signer)
      .addData(desc, charge, title)
      .then((tx) => {
        console.log("added on chain tx:", tx);
      });
    const response = await axios.post("http://20.197.4.167:3000/deploy", data);
    console.log(response);
    setLoading(false);
  };

  return (
    // if loading is false render the code
    // else render the loading screen
    loading ? (
    <div className="appInput">
      <div className="appForm">
        <h1>
          Deploy <span className="red">App</span>
        </h1>
        <label>
          <p>App Name</p>
          <input
            className="appText"
            type="text"
            name="name"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          <p>Charges</p>
          <input
            className="appText"
            type="number"
            step="any"
            name="charge"
            onChange={(e) => {
              setCharge(e.target.value);
            }}
          />
        </label>
        <label>
          <p>Description</p>
          <input
            className="appText"
            type="text"
            name="desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <input
          className="appDeploy"
          onChange={(e) => {
            setFile(e);
          }}
          type="file"
        />
        <br />
        <br />
        <button
          className="appBtn"
          onClick={() => {
            deploy(title, file, desc, charge);
          }}
        >
          Upload
        </button>
      </div>
    </div>) : (
      <div className="loading">
        <div className="loadingText">
          <h1>Deploying App</h1>
          <h2>Please wait...</h2>
        </div>
      </div>
    )
  );
};


export default Upload;
