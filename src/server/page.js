export default (html, store)=>{
    return `
    <!doctype html>
    <html>
    <head>
        <link rel="stylesheet" href="/dist/style.css">
    </head>
      <body>
        <div id="root">${html}</div>
        <script>window.__data = ${JSON.stringify(store.getState())};</script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
`
}
