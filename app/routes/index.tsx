import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import stylesHref from "../styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesHref }];
};

function Index() {
  return <div>Hello from Index Route</div>;
}
export default Index;
