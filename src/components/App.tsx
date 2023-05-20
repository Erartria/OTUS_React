import React from "react";
import cl from "clsx";

import s from "./App.module.sass";

type TAppProps = {
  text: string;
};
const App = (props: TAppProps) => {
  return (
    <>
      <p className={cl(s.root)}>{props.text}</p>
    </>
  );
};

export { App, TAppProps };
