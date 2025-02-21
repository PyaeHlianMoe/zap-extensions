import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Components/Sidebar/Sidebar";
import HeaderBase from "./Components/Header/HeaderBase";
import SideTree from "./Components/SitesTree/SitesTree";
import RequestBar from "./Components/Request-Response/Req-Resp-Bar";
import { sendChildNode } from "./Utilities/requests";
import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {

  return (
    <div className="flex mt-16 overflow-auto">
      <HeaderBase />
      <Sidebar />
      <SideTree />

      <div className="w-full bg-gray-600 text-white ">
        <SearchBar />
        <div className="h-[400px]  mr-2 ml-2 bg-gray-800 rounded-lg ">
          <div className="flex flex-row text-center justify-center ">
            <div className=" w-1/3 p-4 font-serif text-center ">
              ID | Method | Host | Path | URI
            </div>
          </div>
          <div className="flex flex-row  justify-center text-center">
            <div className=" p-4">
              <p className="font-mono "></p>
              {/* {childNode &&
                childNode.map((node) => (
                  <p className="" key={childNode}>
                    {node.hrefId}
                  </p>
                ))} */}
            </div>
          </div>
        </div>

        <RequestBar />
      </div>
    </div>
  );
};

export default App;
