// npm install express puppeteer --save-dev
// 設定路由 routes.json 檔

const puppeteer = require('puppeteer');
const express = require('express');
const { join, dirname } = require('path');
const { readFileSync, writeFileSync, mkdirSync, existsSync } = require('fs');

function getJSON(fileName) {
  if (!existsSync(fileName)) return {};
  return JSON.parse(readFileSync(fileName));
}

const getDefaultProject = json => json.defaultProject || '';

const getProjectOutput = json =>
  json.projects[getDefaultProject(json)].architect.build.options.outputPath;

const getProjectRoot = json => json.projects[getDefaultProject(json)].root;

const PORT = 4000;
const HOST = `http://localhost:${PORT}`;
const angularJSON = getJSON('angular.json');

async function main(routes) {
  const projectOutputFolder = getProjectOutput(angularJSON);

  const app = new express();
  const index = readFileSync(
    join(process.cwd(), projectOutputFolder, 'index.html')
  ).toString();
  app.get('*.*', express.static(join(process.cwd(), projectOutputFolder)));
  app.get('*', (req, res) => res.send(index));

  const server = await new Promise((resolve, reject) => {
    const s = app.listen(PORT, e => (e ? reject(e) : resolve(s)));
  });

  console.log(`Started server ${HOST}!`);
  const browser = await puppeteer.launch();
  return Promise.all(
    routes.map(async route => {
      const page = await browser.newPage();
      await page.goto(HOST + route);
      const result = await page.content();
      // // Defining the html file name that will be created
      const file = join(
        process.cwd(),
        projectOutputFolder,
        route,
        'index.html'
      );

      const dir = dirname(file);

      // Test if the directory exist, if not create the directory
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

      // Write the rendered html file
      writeFileSync(file, result);
    })
  ).then(() => {
    browser.close();
    server.close();
  });
}

const routesFile =
  getProjectRoot(angularJSON) + '/' + (process.argv[2] || 'routes.json');

Promise.resolve(getJSON(routesFile))
  .then(async routes => await main(routes))
  .then(() => console.log(`Finished Prerendering`));
