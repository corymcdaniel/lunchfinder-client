# Restaurant Finder
### Webclient

#### Installation / Run
To run locally, make sure you have the Restaurant Finder API running locally
or point your dev webpack config to a hosted location of it.

`git clone` repo

`npm install`

`npm start` (optionally `-s` for less console noise)


#### About
The webclient uses React, Redux, React-Router, and other libraries.

Currently there is not much separation from Containers (or Smart components) and
dumb components, although each page will be within it's respective component folder.
Components tied closely to the page will be within that directory, re-usable components
will be found in /common.

Different environments use different webpack configurations.  You must specify the
API url within them (defaults to localhost:3000). 

Linting is provided.

#### Deployment
Using your CI tool of choice, you simply need to have a script run `npm run build`
and deploy the `dist` folder.  This will compile all necessary packages for production.
