import { Outlet } from "@remix-run/react";

function jokes() {
  return (
    <div className="flex justify-center items-center flex-col space-y-2 mt-10">
      <h1 className="text-2xl">JOKES 🤣</h1>
      <Outlet />
    </div>
  );
}
export default jokes;
