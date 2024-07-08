import * as React from "react";
import "./styles.css";
interface IAppProps {}

const Loading: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="three-body  w-full ">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default Loading;
