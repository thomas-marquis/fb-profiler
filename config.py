import os

FB_APP_ID = 387432608450166
SECRET_KEY = "1qe*i-^mds6#a1gcm5rl&1%!u7=9m8pu!2x-wwyq@p7ras#i1w"

basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(basedir, "app.db")
