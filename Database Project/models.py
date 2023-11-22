from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Playlist(db.Model):
    """Playlist."""

    # ADD THE NECESSARY CODE HERE

    __tablename__="playlists"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String,primary_key=False, autoincrement=False)
    description = db.Column(db.String,primary_key=False, autoincrement=False )

    def to_dict(self):

        return {
            "id":self.id, 
            "name":self.name, 
            "description":self.description
        }
        
    

class PlaylistSong(db.Model):
    """Mapping of a playlist to a song."""

    # ADD THE NECESSARY CODE HERE

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    playlist_id = db.Column(db.String,  autoincrement=True)
    song_Id = db.Column(db.String,primary_key=False, autoincrement=False )


    def to_dict(self):
        
        return {
            "id":self.id, 
            "playlist_id":self.playlist_id, 
            "song_id":self.song_id, 
            
        }
        

class Song(db.Model):
    """Song."""

    # ADD THE NECESSARY CODE HERE

    __tablename__="songs"
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String,primary_key=False, autoincrement=False)
    artist = db.Column(db.String,primary_key=False, autoincrement=False )


def connect_db(app):
     """Connect to database."""

     db.app = app
     db.init_app(app)
 


    


