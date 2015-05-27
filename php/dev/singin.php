<!DOCTYPE html> 
<html> 
  <head> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css"> 
    <title>Material Design</title> 
  </head> 
  <body role="document"> 
    <% @importhtml common/top-header.html %> 
    <div class="container" role="main"> 
      <div><h3>Sing Up</h3></div>

      <form class="form-horizontal">

        <div class="form-group">
            <input class="form-control floating-label" id="name" type="text" placeholder="Name" data-hint="Will be presented on the main page">
        </div>

        <div class="form-group">
            <input class="form-control floating-label" id="email" type="text" placeholder="E-mail" data-hint="You will log in using email">
        </div>  

        <div class="form-group">
            <input class="form-control floating-label" id="pwd" type="password" placeholder="Password" data-hint="Containing numbers and letters">
        </div>  

        <div class="form-group">
            <input class="form-control floating-label" id="repwd" type="password" placeholder="Confirm" data-hint="Confirm your password">
        </div>      

        <div class="togglebutton">
          <label>
            <input type="checkbox" checked="checked"> Send me news
          </label>
        </div> 

        <div class="form-group">
          <div>
            <button type="submit" class="btn btn-primary">Sing Up</button>
            <button class="btn btn-default">Cancel</button>
          </div>
        </div>  
      </form>
    </div> 
    <% @importhtml common/footer.html %>
  </body> 
  <script src="js/lib/lib.min.js"></script> 
  <% @importjs js/app.js %> 
</html>