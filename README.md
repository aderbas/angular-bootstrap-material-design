# angular-bootstrap-material-design

![Alt text](https://raw.githubusercontent.com/aderbas/angular-bootstrap-material-design/master/print.png "Print")

<p>Simple project layout using Bootstrap Material Design</p>

- INSTALL (Linux)<br>
Dependencies: <b>node</b>, <b>npm</b>, <b>grunt</b> and <b>bower</b> (If already installed skip to step 'RUN')
<br />
<div class="highlight highlight-javascript">
<pre>
-- install nodejs
$ sudo apt-get update
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y build-essential npm
-- if node not found Ubuntu 12.04 / 14.04
$ sudo ln -s /usr/bin/nodejs /usr/bin/node
-- install bower and grunt
$ sudo npm install -g bower
$ sudo npm install -g grunt-cli
</pre>
</div>
Mac OS: http://goo.gl/l4vSBD<br>
Windows: http://goo.gl/i0feLy


- RUN<br>
After unpacking the desired version (angular or static) open a terminal and navigate to the folder you unzipped. In both versions will be created a folder 'dist' which is what goes to production server.
<div class="highlight highlight-javascript">
<pre>
$ cd path/unpacking/static
$ bower install
$ npm install
$ grunt build
$ grunt server
</pre>
</div>

- DEV<br>

-- Angular version
<div class="highlight highlight-javascript">
<pre>
-/
 |_dev/
	|_ index.html
	|_common/
		|_ footer.html
		|_ top-header.html
	|_images/
	|_less/
		|_ main.less // all less
	|_scripts/
		|_ app.js // modules
		|_ index.js // index Controller
		|_ nav-top.js // implementation of module 'NavTopMenu'
		|_ router-config.js // all router config
	|_views/
		|_cad/
			|_ cad.html
			|_ cad.js // own implementation of Controller
		|_main/
			|_ main.html
			|_ main.js
</pre>
</div>

All the app screens will stay within 'views', to create a new view simply create a folder with your html file and js. Only see the default folder 'cad'. See the file 'scripts/router-config.js', it has all routes of ngRouter

-- Static version
<div class="highlight highlight-javascript">
<pre>
-/
 |_dev/
	|_ index.html
	|_ static.html
	|_common/
		|_ footer.html
		|_ top-header.html
	|_images/
	|_less/
		|_ main.less // all less
	|_scripts/
		|_ app.js // any javascript
</pre>
</div>

All other sub pages are at the root. Only use based on the file static.html

-- PHP version
<div class="highlight highlight-javascript">
<pre>
-/
 |_dev/
	|_ index.php
	|_ static.php
	|_common/
		|_ footer.html
		|_ top-header.html
	|_images/
	|_less/
		|_ main.less // all less
	|_scripts/
		|_ app.js // any javascript
</pre>
</div>

* Change color base<br>
To change the color base of your project, change the file .less <code>dev/less/main.less</code>.
<pre>
	@primary: <b>@blue-400</b>;
</pre>
All colors listed in the documentation: https://goo.gl/mndwWf

* References
<pre>
Bootstrap Material Design
https://fezvrasta.github.io/bootstrap-material-design/
Components
http://fezvrasta.github.io/bootstrap-material-design/bootstrap-elements.html
Bootstrap
http://getbootstrap.com/
Angular
https://angularjs.org/ 
Grunt
http://gruntjs.com/
Less
http://lesscss.org/
Bower
http://bower.io/
Angular Material
https://material.angularjs.org
</pre>

