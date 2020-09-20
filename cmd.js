var cmd = require('node-cmd');


module.exports = {
    getls: () => {
        cmd.get(
            'dir',
            function (err, data, stderr) {
                return data;
               // console.log(' ', data)
            }
        );
    }

};