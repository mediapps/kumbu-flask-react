from flask import Flask, render_template
import random
import json
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
def hello():
    print("hello route")
    result = json.dumps({"greeting": get_hello()})
    print(result)
    return result


def get_hello():
    greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Hej']
    print(random.choice(greeting_list))
    return random.choice(greeting_list)

if __name__ == '__main__':
    app.run(debug=True)
