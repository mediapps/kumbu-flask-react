# flake8: noqa
from flask import Flask

from config.config import MACHINE

app = Flask(__name__, static_folder='../client/static', template_folder='../client/templates')
app.debug = MACHINE["DEBUG"]

from . import front
from . import views
