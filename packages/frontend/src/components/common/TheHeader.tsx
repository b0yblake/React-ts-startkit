import React from "react";

type Props = {
  children?: JSX.Element;
};

function TheHeader({ children }: Props) {
  return (
    <>
      <header className="header">
        <h1 className="">Welcome back! Anthony!</h1>
      </header>
    </>
  );
}

export default TheHeader;
