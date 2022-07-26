import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
<<<<<<< HEAD
<<<<<<< HEAD
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@200;400;600;800&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-stone-900 text-stone-400 px-8 py-16 max-w-screen-lg mx-auto">
=======
          href="https://fonts.googleapis.com/css2?family=Albert+Sans&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-neutral-800 text-neutral-400">
>>>>>>> 4cf4833 (🔧 Add custom next/document)
=======
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@200;400;600;800&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-stone-900 text-stone-400 px-8 py-16 max-w-screen-lg mx-auto">
>>>>>>> 1e641bb (🔧 Add font weights and base styles to next/document)
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
