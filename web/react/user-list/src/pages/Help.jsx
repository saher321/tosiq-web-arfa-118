import React from "react";
import WebLayout from "../layouts/WebLayout";
import { GoAlertFill } from "react-icons/go";

const Help = () => {
  return (
    <WebLayout>
      <div className="bg-green-200 p-3 rounded-lg text-green-800">
        <div className="flex items-center gap-3">
          <GoAlertFill /> <span>Click on Users list to see the records</span>
        </div>
      </div>
    </WebLayout>
  );
};

export default Help;
