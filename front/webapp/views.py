from flask import render_template
import random
import json

from . import webapp


@webapp.route('/')
def index():
    return render_template('index.html')


@webapp.route('/hello')
def hello():
    print("hello route")
    result = json.dumps({"greeting": get_hello()})
    print(result)
    return result


def get_hello():
    greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Hej']
    print(random.choice(greeting_list))
    return random.choice(greeting_list)
