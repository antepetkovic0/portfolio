import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              window.__onThemeChange = function() {};

              function setTheme(newTheme) {
                document.body.className = newTheme;
                window.__theme = newTheme;
                window.__onThemeChange(newTheme);
              }

              window.__setPreferredTheme = function (newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem("theme", JSON.stringify(window.__theme));
                } catch (err) {}
              };

              const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
              darkQuery.addListener(function (event) {
                window.__setPreferredTheme(event.matches ? "dark" : "light");
              });

              let preferredTheme;
              try {
                preferredTheme = JSON.parse(localStorage.getItem("theme"));
              } catch (err) {}

              setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
            })()`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
