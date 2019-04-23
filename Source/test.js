const osg = require('./index');

osg.readFile('./Samples/grass1.osgb',function (err, data) {
    console.log(err,data)
});