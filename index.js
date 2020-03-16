const core = require("@actions/core");
const github = require("@actions/github");

try {
  const time = +(new Date());
  core.setOutput("time", String(time));
} catch (error) {
  core.setFailed(error.message);
}
