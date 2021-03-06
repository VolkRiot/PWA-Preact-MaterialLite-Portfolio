import { isProd } from './config';

const renderView = () => `
<!doctype html>
<head>
  <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue_grey-pink.min.css">
  <title>Misha Portfolio</title>
</head>
<body>
  <div id="app"></div>
  <script src="${isProd
    ? '/static/'
    : 'http://localhost:8000/dist/'}js/bundle.js"></script>
  <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
</body>
</html>
`;

export default renderView;
