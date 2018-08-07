
# React + Flask Blueprints + Webpack 4 starter kit

A starter repo that includes Flask Blueprints,React, and Webpack 4.

### How to setup

```
pip install virtualenv                          // install virtualenv if not installed yet
virtualenv -p python3 venv                      // create our environment for the project
source venv/bin/activate                        // activate the environment
pip install -r requirements.txt                 // install our python dependencies
npm install -g webpack                          // install webpack globally if not installed yet
npm install                                     // install js dependencies
cp config/config.sample.py config/config.py     // copy the sample config file (no changes needed for now)
```

### How to run the app

```
source venv/bin/activate        // don't forget to start the virtualenv
webpack                         // or webpack --watch to enable hot-reloading
python runserver.py             // run this in another tab if you ran webpack with --watch
```

This is still very much a work in progress. For now :
- The main routes are in `front/webapp/views.py`
- The JS entry point is `front/webapp/src/js/app.js`
- The Sass is in `front/webapp/src/styles/`
- All the Webpack outputs go to `front/common/static/`
- This app does nothing except change the greeting language when you click on the button

