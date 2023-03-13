import { FC } from "react";
import { Outlet } from "react-router-dom";

const Test: FC = () => {
  return (
    <div>
      <p>Esto es pa testear ruteado</p>
      <Outlet />
    </div>
  );
};

export { Test };
