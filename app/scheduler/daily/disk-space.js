var exec = require("child_process").exec;
var config = require("config");

function main(callback) {
  // if (config.environment !== "production") return callback();

  exec("df -h", function(err, stdout) {
    if (err) return callback(err);

    var disk = stdout
      .split("\n")[1]
      .replace(/\s+/g, " ")
      .split(" ");

    callback(null, {
      disk_space_usage: disk[4],
      disk_space_available: disk[3]
    });
  });
}

if (require.main === module) require("./cli")(main);

module.exports = main;
