const { exec } = require('child_process');
/* I cannot for the life of me figure out how to install openalpr so heres a
 * shell command
 */
//takes a filename string and a single variable callback function
function parse(filename, callback) { 
    //run the command
    exec('alpr -j -c us '+ filename, function(error, stdout, stderr) {
        // if null, bad things
        if(error != null)
        {
            // if error, bad things
            console.log('oh no');
        }
        output = JSON.parse(stdout);
        callback(output.results[0]);
    });
}

// export parse
module.exports = {
    parse: parse
}

