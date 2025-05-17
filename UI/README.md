# Semi-Dynamic portfolio to be hosted on Github Pages

## How to set up and run?

To set up you firt need to clone this repo

- run `git clone https://github.com/UmerBaig123/semi-dynamic-portfolio.git`
  Now install dependencies
- run `npm install`

## How to run locally?

After setting up, now you wish to run this locally

- run command `npm run dev`
- This will run the app on localhost at port 5000 by default
- ctrl+click the link in the console to see your website running

## How to make change?

To make high level changes

- Go to ./public/data, there are json files for everything, you can modify them to see changes
  To make low level changes
- Go to ./src, this folder contains code for pages
- Go to ./src/components, this folder contains code for all components organized in folders

## How to deploy on github pages?

Follow these instructions step by step

- Push this code into a github remote repository
- Go to ./vite.config.js and replace "/semi-dynamic-portfolio/" with "/{your_repo_name}/"
- Go to ./package.json and replace "homepage": "https://umerbaig123.github.io/semi-dynamic-portfolio/", with "homepage": "https://{your_github_username}.github.io/{your_repo_name}/"
- Go to ./src/RouteAppend.js and replace export const routeAppend = "/semi-dynamic-portfolio/"; with export const routeAppend = "/{your_repo_name}/";
- run on terminal npm run deploy, and your portfolio will be hosted on url "https://{your_github_username}.github.io/{your_repo_name}/"
