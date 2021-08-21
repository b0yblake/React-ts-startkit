import React from "react";

type Props = {
  children?: JSX.Element;
};

function TheFooter({ children }: Props) {
  return (
    <>
      <footer className="footer">
        <p className="copyright">Allright reserved.</p>
      </footer>
    </>
  );
}

export default TheFooter;
