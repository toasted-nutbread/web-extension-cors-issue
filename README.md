Repository testing an issue where a web extension making a CORS request will succeed when using
`fetch` with a setting of `mode: 'no-cors'`.

For testing, run the test server using `node server.js`, load the `ext` folder as an extension
in a browser, then open the extension's settings page. Check the console to see the result of the
request.
