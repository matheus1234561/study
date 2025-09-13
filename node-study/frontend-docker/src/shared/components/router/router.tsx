import { Routes, Route } from "react-router-dom";
import { Home } from "../../../features/home/pages/home";
import { UserOptions } from "../../../features/user/pages/user-options/user-option";
import { ListUser } from "../../../features/user/pages/list-user/list-user";
import { Login } from "../../../features/auth/pages/login";
import { ProtectedRoute } from "../ProtectedRoute/protected-route";
import { AddUser } from "../../../features/user/pages/add-user/add-user";

export const Pages = () => {
  const protectedRoute = [
    { path: "/home", component: <Home /> },
    { path: "/user-options", component: <UserOptions /> },
    { path: "/list-users", component: <ListUser /> },
    { path: "/add-user", component: <AddUser/>}
  ];
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {protectedRoute.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          element={<ProtectedRoute>{component}</ProtectedRoute>}
        />
      ))}
    </Routes>
  );
};
