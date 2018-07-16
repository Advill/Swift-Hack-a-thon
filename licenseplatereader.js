const { exec } = require('child_process');
/* I cannot for the life of me figure out how to install openalpr so heres a
 * shell command
 */
module.exports = {
    parse(filename) {
        console.log('asdf');
        exec('alpr -j -c us '+ filename, function(error, stdout, stderr) {
            if(error != null)
            {
                console.log('oh no');
            }
            var output = JSON.parse(stdout);
            console.log(output.results[0]);
            return output.results[0];
        });
    }
}

