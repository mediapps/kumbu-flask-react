# flake8: noqa
from flask import Blueprint

from config.config import MACHINE

common = Blueprint(
    'common',
    __name__,
    subdomain=MACHINE["NAME"],
    template_folder='templates',
    static_folder='static'
)

