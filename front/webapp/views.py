from flask import render_template
import random
import json

from . import webapp


@webapp.route('/')
def index():
    return render_template('index.html')


@webapp.route('/hello')
def hello():
    result = json.dumps({"greeting": get_hello()})
    return result


def get_hello():
    greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Hej']
    return random.choice(greeting_list)
