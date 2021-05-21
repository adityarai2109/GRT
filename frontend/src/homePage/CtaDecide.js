import React, { useEffect, useState } from "react";
import Cta from "./Cta";
import Cta2 from "./Cta2";

function CtaDecide() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  if (width < 550) {
    return (
      <div>
        <Cta2 />
      </div>
    );
  } else {
    return (
      <div>
        <Cta />
      </div>
    );
  }
}

export default CtaDecide;
