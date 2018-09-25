# flake8: noqa
from flask import Flask, render_template

from config.config import MACHINE

app = Flask(__name__, static_folder='./static')
app.debug = MACHINE["DEBUG"]

import client.views
