import * as React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimateInView({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <dnpiv ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(300px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2.3s ",
        }}
      >
        {children}
      </span>
    </dnpiv>
  );
}

export default AnimateInView;
