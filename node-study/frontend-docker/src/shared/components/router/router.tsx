import { Routes, Route } from "react-router-dom";
import { Home } from "../../../features/home/pages/home";
import { UserOptions } from "../../../features/user/pages/user-options/user-option";
import { ListUser } from "../../../features/user/pages/list-user/list-user";
import { Login } from "../../../features/auth/pages/login";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/user-options" element={<UserOptions/>}/>
      <Route path="/list-users" element={<ListUser/>}/>
    </Routes>
  );
};
