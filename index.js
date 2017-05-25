let request = require('request-promise');
let fs = require('fs');

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let url = 'https://landsat365.org/retina/2017-';
let times = 144;
for(let imagenumber = 1; imagenumber <= times; imagenumber++) {
  let urlmodified = url + pad(imagenumber, 3) + '.png';
  request(urlmodified)
    .pipe(fs.createWriteStream('./images/2017-' + pad(imagenumber, 3) + '.png'));
}