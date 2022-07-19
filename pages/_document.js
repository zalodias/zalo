import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-neutral-800 text-neutral-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
