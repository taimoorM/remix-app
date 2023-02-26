import { Outlet } from "@remix-run/react";

function jokes() {
  return (
    <div>
      <h1>JOKES 🤣</h1>
      <Outlet />
    </div>
  );
}
export default jokes;
