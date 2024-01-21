from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt


db = SQLAlchemy()
bcrypt = Bcrypt()

def connect_db(app):
    db.app = app
    db.init_app(app)

class User(db.Model):
    __tablename__ = "users"

    userID = db.Column(db.String, 
                       primary_key = True, 
                       autoincrement=False, 
                       nullable = False, 
                       unique = True)

    email = db.Column(db.String, 
                      primary_key = False, 
                      autoincrement = False, 
                      nullable = False
                      )
    
    name = db.Column(db.String, 
                     primary_key = False, 
                     autoincrement = False, 
                     nullable = False)
    
    phoneNum = db.Column(db.String, 
                         primary_key = False,
                         autoincrement = False,
                         nullable = False
                         )
    
    password = db.Column(db.String,
                           primary_key = False, 
                           nullable = False
                           )
    
    #start register
    @classmethod
    def register(cls, userID, email, name, phoneNum, pwd):
       
        hashed = bcrypt.generate_password_hash(pwd)
        
         # turn bytestring into normal (unicode utf8) string
        hashed_utf8 = hashed.decode("utf8")
        print(hashed_utf8)

         # return instance of user w/username and hashed pwd
        return cls(userID=userID, email=email, name = name, phoneNum = phoneNum, password=hashed_utf8)
    # end_register

    #start_authenticate
    @classmethod
    def authenticate(cls, userID, pwd):
        """Validate that user exits & password is correct. 

        Return user if valid; else return False."""
        hashed = bcrypt.generate_password_hash(pwd)
        
         # turn bytestring into normal (unicode utf8) string
        hashed_utf8 = hashed.decode("utf8")
        print(hashed_utf8)


        print(userID)
        u = User.query.get_or_404(userID)
        print("u passowrd")
        print(u.password)
        print(hashed_utf8)
        
        print(bcrypt.check_password_hash(u.password, pwd))
        if bcrypt.check_password_hash(u.password, pwd):
            print("return this")
            #return user instance 
            return True
        else:
            return False
        
        #end_authenticate

    @classmethod
    def check(cls):
        print("This is a test")



    
    
                 

    





