
"""Forms for adopt app."""

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField, BooleanField, PasswordField
from wtforms.validators import InputRequired, Length




class RegistrationForm(FlaskForm):
    userID =     StringField("User ID:")
    email =      StringField("User Email:")
    name =       StringField("User Name:")
    phoneNum =   StringField("Phone Number:")
    password = PasswordField("Enter yoru Password:")

class SearchByAddress(FlaskForm):
    address = StringField("Street Address")
    city = StringField("City")
    state = StringField("State")
    radius = IntegerField("Radius")    
    limit = IntegerField("Search Limit")

class SearchByGeo(FlaskForm):
    longt = IntegerField("Long")
    lati = IntegerField("Lat")

class Login(FlaskForm):
    username = StringField("Enter User ID")
    password = PasswordField("Enter your password")
    
