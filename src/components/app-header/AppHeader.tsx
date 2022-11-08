import React from "react";
import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <div className="flex">
      <ul className="flex">
        <li className="">
          <Link className="inline-block p-4 hover:bg-[#ddd]" to="/home">
            Home
          </Link>
        </li>
        <li className="">
          <Link className="inline-block p-4 hover:bg-[#ddd]" to="/about-us">
            About us
          </Link>
        </li>
        <li className="">
          <Link className="inline-block p-4 hover:bg-[#ddd]" to="/404">
            404
          </Link>
        </li>
      </ul>
    </div>
  );
}
