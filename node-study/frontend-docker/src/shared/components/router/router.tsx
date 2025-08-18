import { Routes, Route } from "react-router-dom";
import { Home } from "../../../features/home/pages/home";
import { UserOptions } from "../../../features/user/pages/user-options/user-option";
import { ListUser } from "../../../features/user/pages/list-user/list-user";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-options" element={<UserOptions/>}/>
      <Route path="/list-users" element={<ListUser/>}/>
    </Routes>
  );
};
