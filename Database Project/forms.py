"""Forms for adopt app."""

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField, BooleanField
from wtforms.validators import InputRequired, Length, NumberRange, URL, Optional


class PlaylistForm(FlaskForm):
    """Form for adding playlists."""

    # Add the necessary code to use this form
    id = IntegerField("Play List ID")
    name = StringField("Play List Name")
    description = StringField("Play List Description")

class SongForm(FlaskForm):
    """Form for adding songs."""

    # Add the necessary code to use this form

    id = IntegerField("Song ID")
    title = StringField("Title of Song")
    artist = StringField("Artist Name")


# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
