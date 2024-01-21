import hmac
import hashlib
import datetime
import requests
import urllib
import base64
import uuid



AccessKey = "A8D8541E-94CA-4DD3-B6DD-15C827D126DF"

SecretKey = bytes("PnJGzKO5OupKT4ChkhB8OSHryTJL87KhZpApqRRA3jwXtfHBEw1gBdMZ0RC4xW+2QVZxrGdzUVExmsc4r64j8w==", 'utf-8')
    
    

def getRandomNonce():
    return uuid.uuid4()
   

def getSignature(nonce, method, url, timestamp, body):
   
    bodyHash = hashlib.md5(bytes(body, 'utf-8'))
    encodedBody = str(base64.b64encode(bodyHash.digest()), 'utf-8')
    
    message = bytes(f"{AccessKey}{method}{url}{timestamp}{nonce}{encodedBody}", 'utf-8')
    
    signature = hmac.new(
        base64.decodebytes(SecretKey),
        msg=message,
        digestmod=hashlib.sha256
    ).digest()
    
       
    return str(base64.b64encode(signature), 'utf-8')

def main():
    baseUrl = "https://train.caseworthy.com/CaseWorthy.ClientApi.Web/rest"
    testEndpoint = baseUrl + "/gwsr/DataWarehouse_GetData?sproc=X_Datawarehouse_Client_Get"
    testEndpoint = testEndpoint.lower()
    
    
    encodedEndPoint = urllib.parse.quote(testEndpoint, safe="") #Python won't encode "/" unless we tell it to
     
    method = "POST"
    body = "Test body"
    
    timestamp = int((datetime.datetime.utcnow()-datetime.datetime(1970,1,1,0,0,0)).total_seconds())
    nonce = getRandomNonce()
       
    
    signature = getSignature(nonce, method, encodedEndPoint, timestamp, body)

    
    Auth = f"amx {AccessKey}:{signature}:{nonce}:{timestamp}"
    
     
    r = requests.post(testEndpoint, headers = {'Authorization': Auth}, data = body)

    print(r)
    print(r.text)