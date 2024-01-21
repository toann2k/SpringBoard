from codecs import latin_1_decode
from flask import Flask, url_for, render_template, redirect, flash, jsonify, request, session
import requests
from forms import SearchByAddress, SearchByGeo, Login, RegistrationForm
from models import connect_db, db, User
from authlib.integrations.flask_client import OAuth
from authlib.common.security import generate_token
import os




GOOGLE_CLIENT_ID = '262073976139-pktdjtr69cab2s336d9q7243hpoae4q3.apps.googleusercontent.com'
GOOGLE_CLIENT_SECRET = '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'

app = Flask(__name__)
app.secret_key = os.urandom(12)
oauth = OAuth(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///user'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_EHCO'] = True
app.config['SECRET_KEY'] = "shhhhh"

connect_db(app)
app.app_context().push()
db.create_all()


class DataStore():
    lati = None
    longi = None 
    radius = None
    limit = None
    station_array  = []
    location = None
  

data = DataStore()

@app.route("/", methods=['GET', 'POST'])
def start_screen():
    return render_template("StartWindow.html")





@app.route("/baselogin", methods=['GET', 'POST'])
def base_login():
   print("2")
   return render_template("baselogin.html")

@app.route('/register', methods=['GET', 'POST'])
def registration():
    User.check()
    regForm =  RegistrationForm()

    print()
    print(regForm.validate_on_submit())
    print(regForm.validate_on_submit())
    if regForm.validate_on_submit():

        userID = regForm.userID.data
        email = regForm.email.data
        name = regForm.name.data
        phoneNum = regForm.phoneNum.data
        password = regForm.password.data
        
        user = User.register(userID, email, name, phoneNum, password)
        print(user)
        db.session.add(user)
        db.session.commit()

        session["userID"] = user.userID

        return redirect("/")
    else:
      
        return render_template("RegForm.html", form=regForm)
    

@app.route("/login", methods=["GET", "POST"])
def login():
   
 
    form = Login()

    if form.validate_on_submit():
        name = form.username.data
        pwd = form.password.data
        # authenticate will return a user or False
        print(pwd)
        user = User.authenticate(name, pwd)
       
        print(user)
        print("test 1")
        print(request.method)
        print("test 2")
        if request.method == "POST":
            session["userID"] = name  # keep logged in
            return redirect("/protected")

        else:
            form.username.errors = ["Bad name/password"]

    return render_template("login.html", form=form)
# end-login

@app.route("/secret")
def secret():
   
    print("test")
    print("userId" not in session)
    if "userId" not in session:
        flash("You must be logged in to view!")
        return redirect("/login")
   
    else:
        return render_template("/Search")
    


@app.route("/Search", methods=['GET', 'POST'])
def searchForm():
    form = SearchByAddress()
    print("search")
    if form.validate_on_submit():
        address = form.address.data
        city = form.city.data
        state = form.state.data
        radius = form.radius.data
        limit = form.limit.data
        
        return redirect("/search")
    else:
        return render_template("StandardForm.html", form=form)

  
@app.route("/GeolocationSearch", methods=['GET', 'POST'])
def searching():
    form = SearchByAddress()
    address = form.address.data
    city = form.city.data
    state = form.state.data
    data.radius = form.radius.data
    data.limit = form.limit.data

    addressurl = "https://api.positionstack.com/v1/forward?access_key=090d50f15e46e6388e86507a26a2b1ea&query=" + address + "," + city + "," + state
    response = requests.get(addressurl)
 
    data1 = response.json()
    for position in data1['data']:
        data.lati = position['latitude']
        data.longi = position['longitude']
      
    return redirect('/LocateStation')




@app.route('/LocateStation')
def LocateStation():
       i = 0
       url = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?latitude=" + str(data.lati) +  "&longitude="  + str(data.longi) + "&radius=" + str(data.radius) + "&fuel_type=all" + "&limit=" + str(data.limit) + "&api_key=mvgrqawMpXAQEgiAZNTNNHP0qwMzcuuoELnfgmi4"
       response = requests.get(url)
       overall = response.json()

       fuelStation = overall['fuel_stations']
       print("Fuel Station")
  
 
    
       location = str(data.lati) + "," + str(data.longi) 

       for result in fuelStation:
          data.station_array.append("************************")
          data.station_array.append(result['station_name'])
          data.station_array.append(result['street_address'])
          data.station_array.append(result['city'] + " ," + result['state'])
          data.station_array.append(str(result['distance']) + " miles")
        
          location += "||" + str(result['latitude']) + "," + str(result['longitude'])
          
          
       print(data.station_array)
       return render_template("Result.html", form = data.station_array) 

@app.route('/protected', methods=['GET', 'POST'])
def secure_login():
    print("check 1")
    return render_template("protected.html")

@app.route("/thanks",  methods=['GET', 'POST'])
def thanks():
     return render_template("thanks.html")

@app.route("/google/")
def google():
    GOOGLE_CLIENT_ID = '62073976139-pktdjtr69cab2s336d9q7243hpoae4q3.apps.googleusercontent.com'
    GOOGLE_CLIENT_SECRET = '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'
    
    CONF_URL = 'https://accounts.google.com/.well-known/openid-configuration'

    oauth.register(
        name='google',
        client_id='762073976139-pktdjtr69cab2s336d9q7243hpoae4q3.apps.googleusercontent.com',
        client_secret='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',
        server_metadata_url=CONF_URL,
        client_kwargs={
            'scope': 'openid email profile'
        }
    )
  
  
    # Redirect to google_auth function

    redirect_uri = url_for('google_auth', _external=True)
    session['nonce'] = generate_token()
    
    return oauth.google.authorize_redirect(redirect_uri, nonce=session['nonce'])


@app.route("/google/auth/")
def google_auth():
    token = oauth.google.authorize_access_token()
    user = oauth.google.parse_id_token(token, nonce=session['nonce'])
    session['user'] = user
    
    return redirect('/protected')

@app.route("/Logout")
def logout():
    session.pop('user', None)
    return redirect('/')



