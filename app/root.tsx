import { LiveReload, Outlet } from "@remix-run/react";
import stylesheet from "~/tailwind.css";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <link rel="stylesheet" href="./tailwind.css" />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
