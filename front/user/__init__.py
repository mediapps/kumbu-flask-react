# flake8: noqa
from flask import Blueprint

from config.config import MACHINE

user = Blueprint(
    'user',
    __name__,
    template_folder='templates',
    static_folder='../common/static'
)

from . import views
