const { exec, spawn, execFile } = require("child_process");

const executePy = (filepath) => {
  var param2 = 1
  var param3 = 2
  var command = "python `${filepath}  ` "  + param2 + " " + param3;
  console.log("what")
  console.log(filepath)
  return new Promise((resolve, reject) => {
    exec(
      `python3 ./test/twosum.py ${filepath} 2 3 4 5`,
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        resolve(stdout);
      }
    );
  });
};

module.exports = {
  executePy,
};
