from flask import Flask, request, render_template, redirect, flash, session
import requests, locale
from forex_python.converter import CurrencyRates, CurrencyCodes



RESPONSES_KEY = "responses"
app = Flask(__name__)
app.config['SECRET_KEY'] = "i-don't-know"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

@app.route("/")
def start_app():
   return render_template("form.html") 




@app.route("/redirect")
def redirect():
    print("4")
    return render_template("form.html") 


@app.route("/connection")
def result():

    convert_from = request.args["convert_from"]
    convert_to   = request.args["convert_to"]
    amount       = request.args["amount"]

    r = CurrencyRates(force_decimal=True)
    c = CurrencyCodes()

    symbol_from  = c.get_symbol(convert_from)
    symbol_to =  c.get_symbol(convert_to)

  
    if symbol_from is None and symbol_to is None:
        print("1")
        return render_template("SymbolError.html", message = "Both Currency Symobl are wrong : ", convert_from = convert_from, convert_to = convert_to)
    
    elif symbol_from is None:
        print("2")
        return render_template("SymbolError.html", message = "Convert from is wrong : ", convert_from = convert_from, convert_to = convert_to)
    
    elif symbol_to is None:
        print("3")
        return render_template("SymbolError.html", message = "Convert to is wrong: ", convert_from = convert_from, convert_to = convert_to)
    else:      
      url = "https://api.exchangerate.host/convert?from=" + convert_from + "&" + "to=" + convert_to + "&" + "amount=" + amount
      response = requests.get(url)
      data = response.json()
      data1 = data['result']
    return render_template("result.html", result=round(data1, 2), convert_from=convert_from, convert_to=convert_to, amount=amount, symbol_from = symbol_from,
                            symbol_to = symbol_to)



