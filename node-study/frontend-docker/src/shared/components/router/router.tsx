import { Routes, Route } from "react-router-dom";
import { Home } from "../../../features/home/pages/home";
import { UserOptions } from "../../../features/user/pages/user-options/user-option";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-options" element={<UserOptions/>}/>
    </Routes>
  );
};
