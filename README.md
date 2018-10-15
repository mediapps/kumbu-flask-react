
# React + Flask + Webpack 4 starter kit

A starter repo that includes Flask, React, and Webpack 4.

### How to setup

```
pip install virtualenv                          // install virtualenv if not installed yet
virtualenv -p python3 venv                      // create our environment for the project
source venv/bin/activate                        // activate the environment
pip install -r requirements.txt                 // install our python dependencies
npm install -g webpack                          // install webpack globally if not installed yet
yarn                                            // install js dependencies
cp config/config.sample.py config/config.py     // copy the sample config file (no changes needed for now)
```

### How to run the app

```
source venv/bin/activate        // don't forget to start the virtualenv
webpack                         // or webpack --watch to enable hot-reloading
python runserver.py             // run this in another tab if you ran webpack with --watch
```

This is still very much a work in progress:
- The Flask routes are all in the `api` folder: `front.py` routes only render templates, and all the other routes (for now only in `views.py`) render JSON
- In the `client` folder we have:
    - The templates (we only have a few basic ones where we import our JS)
    - The `static` folder, where all the Webpack outputs go (css and JS)
    - The `src` folder, which contains the React/Redux code structure (actions, components, reducers), and the Sass styles
    - The entry point `app.js` and the Store

For now:
- On the home page (the root `/`), there is a redirect to the login page
- The email entered in the login form is then displayed on the home page, after the submit
- The "Say Hello" button changes the greeting language by calling a Flask route from `api/views.py`


