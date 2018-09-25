from flask import render_template
import random
import json

from front import app


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
def hello():
    result = json.dumps({"greeting": get_hello()})
    return result


@app.route('/login/')
def login():
    return render_template('login.html')


def get_hello():
    greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Hej']
    return random.choice(greeting_list)
