const taglookup = new (require('@mapbox/route-annotator')).Annotator();
const path = require('path');

const data = "47.46284,-122.25853 47.4631,-122.25928 47.46323,-122.25973 47.46334,-122.26012 47.46338,-122.26033 47.46341,-122.26045 47.46351,-122.26101 47.46355,-122.26145 47.46356,-122.2619 47.46355,-122.26235 47.4635,-122.26287 47.46346,-122.26313 47.46344,-122.26325 47.46337,-122.26358 47.46329,-122.26387 47.46317,-122.26425 "

const parsedCoordinates = data.split(' ').filter(val => val && val !== ' ').map((val => [...(val.split(',').map(v => parseFloat(v)))]));

console.warn(parsedCoordinates, 'ccords');

const results = [];

//// Do the same thing, but this time use coordinates instead
// // of node ids.  Internally, a radius search finds the closest
// // node within 5m
taglookup.loadOSMExtract(path.join(__dirname,'../build/washington-latest.osm.pbf'), (err) => {
  if (err) throw err;
    taglookup.annotateRouteFromLonLats(parsedCoordinates, (err, tags) => {

        if (err) {
            console.warn('err', err);
        } else {
            results.push(tags);
        }
    })
// todo:
  //   annotator.getAllTagsForWayId(wayIds[0], (err, tags) => {
  //     if (err) throw err;
  //     console.log(tags);
  //   });
  // });
});

