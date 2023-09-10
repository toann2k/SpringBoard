### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?

Javascript is uses to developed for front end Python is uses to for the back end. 

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.

- What is a unit test?

Unit testing is the testing of function. You test each function as it own. 

- What is an integration test?

Integration test is the test of each function that lead to the next step. For example, you test function 1 first. After that test
function 1 and 2. Then test function 1, 2, 3. 

- What is the role of web application framework, like Flask?

An applicaton frmework is a software library that provides a fundamental structure to support the development of applications for a specific envirement. 

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application? 

  If you don't need to pass any parameter then route URL is betteer. On the other hand if you need to pass parameter in the code then it is 
  best to uses URL query. 

- How do you collect data from a URL placeholder parameter using Flask?

It is being collect after the /. For example @app.route('/landingpage/<id>')  will collect id. 

- How do you collect data from the query string using Flask?

Data are being collect after the question mark ('foods?type=pretzel).

- How do you collect data from the body of the request using Flask?

Use the request.args. 

- What is a cookie and what kinds of things are they commonly used for?

Cookies are small text files containing unique data to identify your computer to the network.

- What is the session object in Flask?

A session object is also a directonary object that contains key value pairs of session variables and associated values. 

- What does Flask's `jsonify()` do? 

It convert parameter to JSON.
