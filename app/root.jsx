import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";

export const meta = () => ({
  charset: "utf-8",
  title: "Blog do Guilherme Sousa",
  viewport: "width=device-width,initial-scale=1",
  description: "Publicações sobre tecnologia, desenvolvimento e programação.",
  "og:locale": "pt_BR",
  "og:type": "website",
  "og:title": "Blog do Guilherme Sousa",
  "og:description":
    "Publicações sobre experiências, técnicas e truques de desenvolvimento por Guilherme Sousa.",
  "og:site_name": "Blog do Guilherme Sousa",
  "og:image": "https://github.com/pic.jpg",
  "og:image:width": "383",
  "og:image:height": "383",
  "og:image:secure_url": "https://github.com/pic.jpg",
  "og:image:type": "image/jpg",
  "twitter:card": "summary",
  "twitter:title": "Blog do Guilherme Sousa",
  "twitter:site": "@krteazy",
  "twitter:creator": "@krteazy",
  "twitter:url": "https://blog.guilherssousa.dev",
  "twitter:description":
    "Publicações sobre experiências, técnicas e truques de desenvolvimento por Guilherme Sousa.",
  "twitter:image": "https://github.com/pic.jpg",
});

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
