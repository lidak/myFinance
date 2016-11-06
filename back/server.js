'use strict';

var express = require('express'),
    app = express(),
    server,
    port = process.env.PORT || 5000,
    serverStarted = false,
    path = require('path');

app.use('/bower_components', express.static(path.resolve('./front/bower_components')));
app.use('/js', express.static(path.resolve('./front/js')));
// app.use('/css', express.static(`${__dirname}/app/css`));
// app.use('/views', express.static(`${__dirname}/app/views`));

app.get('*', function(req, res) {
    res.sendFile(path.resolve('./front/index.html'));
});


function start(callback) {
    if (serverStarted) {
        return;
    }

    server = app.listen(port, function() {
        serverStarted = true;
        console.log(`Static was served by express on ${port}-th port.`);
        if (typeof callback === 'function') {
            callback();
        }
    });
}

function stop(callback) {
    if (!serverStarted) {
        return;
    }
    server.close();
    if (typeof callback === 'function') {
        callback();
    }
    serverStarted = false;
}


module.exports = {
    start: start,
    stop: stop
};