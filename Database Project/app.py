from flask import Flask, url_for, render_template, redirect, flash, jsonify
from models import db, connect_db, Playlist, Song, PlaylistSong
from forms import PlaylistForm, SongForm, NewSongForPlaylistForm

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///playlist-app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = '1234'

connect_db(app)
app.app_context().push()
db.create_all()

###############################################################################################


@app.route("/")
def root():
    """Homepage: redirect to /playlists."""
    return redirect("/playlists")

@app.route("/playlists")
def show_all_playlists():
    """Return a list of playlists."""
    
    playlists = Playlist.query.all()
    return render_template("playlists.html", playlists=playlists)



@app.route("/playlists/<int:playlist_id>")
def show_playlist(playlist_id):
    """Show detail on specific playlist."""

    playlist = Playlist.query.get_or_404(playlist_id)
    return jsonify(playlist=playlist.to_dict())


@app.route("/playlists/add", methods=["GET", "POST"])
def add_playlist():
    """Handle add-playlist form:

    - if form not filled out or invalid: show form
    - if valid: add playlist to SQLA and redirect to list-of-playlists
    """

    # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK

    form = PlaylistForm()
   
    if form.validate_on_submit():
        id = form.id.data
        name = form.name.data
        description = form.description.data
        playlistadd = Playlist(id=id, name=name, description=description)
        db.session.add(playlistadd)
        db.session.commit()
        return redirect('/playlists')
    else:   
        return render_template("add_playlist_form.html", form=form)



##############################################################################
# Song routes


@app.route("/songs")
def show_all_songs():
    """Show list of songs."""

    songs = Song.query.all()
    return render_template("songs.html", songs=songs)


@app.route("/songs/<int:song_id>")
def show_song(song_id):
    """return a specific song"""

    # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK

    songlist = Playlist.query.get_or_404(song_id)
    return jsonify(songlist=songlist.to_dict())


@app.route("/songs/add", methods=["GET", "POST"])
def add_song():
    """Handle add-song form:

    - if form not filled out or invalid: show form
    - if valid: add playlist to SQLA and redirect to list-of-songs
    """

    # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK

    form1 =SongForm()
   
    if form1.validate_on_submit():
        id = form1.id.data
        title = form1.title.data
        artist = form1.artist.data
        songlist = Song(id=id, title=title, artist=artist)

        db.session.add(songlist)
        db.session.commit()
        return redirect('/songs')
    else:   
        return render_template("add_songlist_form.html", form1=form1)


