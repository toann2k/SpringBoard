from flask import Flask, request, render_template, jsonify, session 
from boggle import Boggle

app = Flask(__name__)
app.config["SECRET_KEY"] = "ABCD1234"

boggle_game = Boggle()


@app.route('/')
def say_hello():
    
    board = boggle_game.make_board()
    session['board'] = board
    high_score = session.get("high_score", 0)
    nplays = session.get("nplays", 0)

    return render_template("index.html", board=board, highscore=high_score, nplays=nplays)
   
@app.route("/check-word")
def check_word():
    word = request.args["word"]
    board = session["board"]
    response = boggle_game.check_valid_word(board, word)
    return jsonify({'result':response})

@app.route("/post-score", methods=["POST"])
def post_score():
    score = request.json["score"]
    high_score = session.get("high_score", 0)
    nplays = session.get("nplays", 0)

    session['nplays'] = nplays + 1
    session['high_score'] = max(score, high_score)

    return jsonify(brokeRecord=score>high_score)