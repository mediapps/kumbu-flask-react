# flake8: noqa
from flask import Flask, render_template

from config.config import MACHINE

app = Flask(__name__, static_folder='./common/static')
app.debug = MACHINE["DEBUG"]

from .common import common
from .webapp import webapp

app.register_blueprint(common)
app.register_blueprint(webapp)
