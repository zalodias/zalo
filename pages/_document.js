import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@200;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-stone-900 text-stone-400 px-8 py-16 max-w-screen-lg mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
