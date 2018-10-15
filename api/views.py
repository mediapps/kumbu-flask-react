from api import app

import random
import json


@app.route('/hello')
def hello():
    result = json.dumps({"greeting": get_hello()})
    return result


def get_hello():
    greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Hej']
    return random.choice(greeting_list)
