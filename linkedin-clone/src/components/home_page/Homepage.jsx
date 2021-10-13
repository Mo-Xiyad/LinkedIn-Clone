import React from "react";
import { fetchData } from "../../assats/js";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

export default function Homepage({ authorized }) {
  return (
    <div className="homepage">
      <Sidebar />
      <Feed authorized={authorized} />
      <Widget />
    </div>
  );
}
