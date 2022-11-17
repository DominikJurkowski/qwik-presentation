/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import globalStyles from "./global.css?inline";

import Simple from "./components/simple";
import Star from "./components/star";
import Photos from "./components/photos";
import Clock from "./components/clock";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" id="section">
        {/* <RouterOutlet /> */}
        {/* <ServiceWorkerRegister /> */}
        {/* <Simple /> */}
        {/* <Photos /> */}
        {/* <Star /> */}
        <Clock />
      </body>
    </QwikCity>
  );
});
