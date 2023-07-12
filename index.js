const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.set("Content-Security-Policy", "connect-src https://*.amazonaws.com");
  res.send(`
  <a ping="https://auth-qa-staging-wisepipe.auth.us-east-1.amazoncognito.com/oauth2/token">
  <script>
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://auth-qa-staging-wisepipe.auth.us-east-1.amazoncognito.com/oauth2/token");
    xhr.send();

    const ws = new WebSocket("wss://not-example.com/");

    const es = new EventSource("https://example.com/");

    navigator.sendBeacon("https://cognito-idp.us-east-1.amazonaws.com", {
      /* … */
    });
  </script></a
>
  `);
});

app.listen(port, () => {
  console.log(`example app listening to port ${port}`);
});
