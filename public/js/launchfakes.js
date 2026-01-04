 function launchAboutBlank() {
  const currentURL = location.href;
  const win = window.open("about:blank");

  if (!win) return;

  win.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>about:blank</title>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
          iframe {
            border: none;
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <iframe src="${currentURL}"></iframe>
      </body>
    </html>
  `);

  win.document.close();
}

function launchBlob() {
  const currentURL = location.href;
  const blob = new Blob([`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Blob</title>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
          iframe {
            border: none;
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <iframe src="${currentURL}"></iframe>
      </body>
    </html>
  `], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}
