const express = require('express');
let axios = require('axios');
let cors = require('cors');
let parrotOptions = require('./parrot-options');
const app = express();
let corsOptions = {
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const Parrot = require('../api-parrot/index').Parrot(app, parrotOptions);

// sourcesystem url scrubber middleware
// app.use(function(req, res, next) {
//   console.log(req.url);
//   if (req.url.indexOf('[') >= 0 && req.url.indexOf(']') >= 0) {
//     req.sourceSystemUrl = req.url.substring(
//       req.url.indexOf('[') + 1,
//       req.url.indexOf(']')
//     );
//     req.url = req.url.replace(/\[.*\]/g, '');
//   }
//   next();
// });
// if scrubbed url is in parrot -> respond to it
app.use(Parrot);

// if bypass parrot -> go to source system
// app.use(function(req, res, next) {
//   console.log(req.sourceSystemUrl + req.url);
//   axios
//     .get(req.sourceSystemUrl + req.url, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(d => {
//       // console.log(d);
//       res.send(d.data);
//     })
//     .catch(err => {
//       // console.log(err);
//       res.send(err);
//     });
// });

app.listen(4003, function() {
  console.log('listening on port 4003');
});
