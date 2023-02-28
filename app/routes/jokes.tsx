import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

function jokes() {
  return (
    <div>
      <h1>JOKES 🤣</h1>
      <Outlet />
    </div>
  );
}
export default jokes;
