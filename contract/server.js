const express = require("express");
const { exec } = require("child_process");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const pullImage = (dockerhubName, callback) => {
  const command = `docker pull ""/${dockerhubName}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    callback();
  });
};

const makeNodeImage = (appName, uri, callback) => {
  const command = `~/pack/out/pack build ""/${appName}  --path ~/test/${uri}/ --buildpack paketo-buildpacks/nodejs --builder paketobuildpacks/builder:base --publish
`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    callback();
  });
};

const makeNodeContainer = (appName, callback) => {
  const command = `docker run -d --name ${appName} -p 4000:9000 ""/${appName}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    callback();
  });
};

const downloadSrc = (uri, callback) => {
  const command = `wget --recursive --no-parent -nH --cut-dirs=1 -P ~/test/ https://gateway.lighthouse.storage/ipfs/${uri}/`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log("finished");
    console.error(`stderr: ${stderr}`);
    callback(); // call the callback function when finished
  });
};

const stopNodeContainer = (appName, callback) => {
  const command = `docker stop appName`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log("finished");
    console.error(`stderr: ${stderr}`);
    callback(); // call the callback function when finished
  });
};
app.post("/deploy", (req, res) => {
  const { uri, appName } = req.body;
  console.log(req.body);
  downloadSrc(uri, () => {
    makeNodeImage(appName, uri, () => {
      res.send("Deployed");
    }); // call makeNodeImage when downloadSrc is finished
  });
});

app.get("/play", (req, res) => {
  const id = req.query.appName;
  pullImage(id, () => {
    makeNodeContainer(id, () => {
      res.send("play game on url");
    });
  });
});

app.get("/stop", (req, res) => {
  const id = req.query.appName;
  stopNodeContainer(id, () => {
    res.send("playtimeover");
  });
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
