# flake8: noqa
from flask import Blueprint

from config.config import MACHINE

webapp = Blueprint(
    'webapp',
    __name__,
    subdomain=MACHINE["NAME"],
    template_folder='templates',
    static_folder='../common/static'
)

from . import views
