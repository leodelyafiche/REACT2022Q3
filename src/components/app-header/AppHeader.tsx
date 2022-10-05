import React from "react";
import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <div>
      <ul className="flex">
        <li className="mr-3">
          <Link
            className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
            to="/home"
          >
            Home
          </Link>
        </li>
        <li className="mr-3">
          <Link
            className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/about-us"
          >
            About us
          </Link>
        </li>
        <li className="mr-3">
          <Link
            className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/404"
          >
            404
          </Link>
        </li>
      </ul>
    </div>
  );
}
