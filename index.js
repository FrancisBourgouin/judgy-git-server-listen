/**
 * Original getCurrentBranchName created by heweiguang on 2018/4/21.
 */

const fs = require("fs");
const path = require("path");

const getCurrentBranchName = (p = process.cwd()) => {
  const gitHeadPath = `${p}/.git/HEAD`;

  return fs.existsSync(p)
    ? fs.existsSync(gitHeadPath)
      ? fs
          .readFileSync(gitHeadPath, "utf-8")
          .trim()
          .split("/")[2]
      : getCurrentBranchName(path.resolve(p, ".."))
    : false;
};

const judgyServerListen = (serverInstance, listenCallback) => {
  const currentBranch = getCurrentBranchName();

  if (currentBranch !== "master" || process.argv.includes("--pollo")) {
    console.log(`Starting server listen on branch ${currentBranch}`);
    return serverInstance.listen(listenCallback);
  } else {
    console.log("🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑");
    console.log("🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑");
    console.log("WHY ARE YOU RUNNING THIS SERVER ON MASTER");
    console.log("🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑");
    console.log("🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑");
  }
};

module.exports = { getCurrentBranchName, judgyServerListen };
