import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import globalStyles from "~/styles/global.css";
import navBarStyles from "~/styles/navbar.css";
import canvasStyles from "~/styles/canvas.css";
import houseStyles from "~/styles/house.css";
import atomStyles from "~/styles/atom.css";
import platonicStyles from "~/styles/platonic.css";
export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="home_nav">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/scripture">Scripture</NavLink>
          <NavLink to="/musings">Musings</NavLink>
          <div className="underbar"></div>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


// styles is now something like /build/global-AE33KB2.css

export function links() {
  return [
    { rel: "stylesheet", href: navBarStyles }, 
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: canvasStyles },
    { rel: "stylesheet", href: houseStyles },
    { rel: "stylesheet", href: atomStyles },
    { rel: "stylesheet", href: platonicStyles },
    { rel: "preconnect", href: "https://fonts.gstatic.com"},
    { rel: "preconnect", href: "https://fonts.googleapis.com"},
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap"},
  ];
  
}