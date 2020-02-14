# judgy-git-server-listen

Get the current git branch name using Node.js and create a wrapper around the server listen instance to be judgy when coding.

## Install

```bash
npm install judgy-git-server-listen --save
```

## Usage

```javascript
const { getCurrentBranchName } = require("judgy-git-server-listen");

getCurrentBranchName(); // branch name or false
```

```javascript
const { judgyServerListen } = require("judgy-git-server-listen");

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});

judgyServerListen(server, PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
```

## API

### getCurrentBranchName([ path ]);

Returns branch name or false

## Props

##### path

Type: `string`

Default: `process.cwd()`

Required: `false`

The path which you want to get it's git repository's branch name.

> Actually you don't need to pass anything, just call the function anywhere inside your git repository.

## CHANGE LOG

`v2.0.x` no longer requires you to pass the **root path which you initialized your git repository**, it will automatically find the branch name if it exists (git initialized).
