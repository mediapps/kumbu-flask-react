from front import app
from config.config import MACHINE

app.run(host=MACHINE["HOST"], debug=True)
