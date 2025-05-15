from flask import *
app = Flask(__name__)
@app.route("/", methods=["GET", "POST"])
def default():
    return render_template("index.html")

@app.route("/about", methods=["GET","POST"])
def about():
    return render_template("about.html")

@app.route("/help", methods=["GET","POST"])
def help():
    return render_template("help.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    return render_template("login.html")
@app.route("/newuser")
def newuser():
    return render_template("newuser.html")
    
@app.route("/mailhome")
def mailhome():
    return render_template("mailhome.html")
@app.route("/composemail")
def composemail():
    return render_template("composemail.html")
@app.route("/mailinbox")
def mailinbox():
    return render_template("mailinbox.html")
@app.route("/mailsent")
def mailsent():
    return render_template("mailsent.html")
@app.route("/mailstarred")
def mailstarred():
    return render_template("mailstarred.html")
@app.route("/mailtrash")
def mailtrash():
    return render_template("mailtrash.html")
@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html")
if __name__=="__main__":
    app.run(debug=True)