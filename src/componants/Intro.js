import React from "react";
import { useSpring, animated } from "react-spring";

export default function Intro() {
    const props = useSpring({ to: {opacity: 1}, from: {opacity: 0}})

  return (
    <>
      <p>test 2</p>
    </>
  );
}
