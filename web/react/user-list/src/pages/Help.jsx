import React from "react";
import WebLayout from "../layouts/WebLayout";
import { GoAlertFill } from "react-icons/go";
import useWareHouse from "../store/useWareHouse";

const Help = () => {
  const laysStock = useWareHouse((state) => state.laysStock)
  const checkStock = useWareHouse((state) => state.checkStock)
  return (
    <WebLayout>
      <div className="bg-green-200 p-3 rounded-lg text-green-800">
        <div className="flex items-center gap-3">
          <GoAlertFill /> <span>Click on Users list to see the records</span>
        </div>
        <div>
          Lays Stock: <strong>{laysStock}</strong>
        </div>
        <div>
          <button onClick={checkStock}>Check Stock</button>
        </div>
      </div>
    </WebLayout>
  );
};

export default Help;
