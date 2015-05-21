# angular-bootstrap-material-design
Simple project using Bootstrap Material Design

** Template base usando o Bootstrap Material Design **
** Autor: Aderbal Nunes <aderbalnunes@gmail.com>    **

- INSTALAÇÃO
Dependências: node, npm, grunt e bower (Se já estiver instalado pule para o passo 'EXECUTAR')

$ sudo apt-get update
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y build-essential npm
$ sudo ln -s /usr/bin/nodejs /usr/bin/node
$ sudo npm install -g bower
$ sudo npm install -g grunt-cli

- EXECUTAR
Depois de descompactar a versão desejada (angular ou static) abra o terminal e navegue até a pasta que foi descompactado. Em ambas as versões será criada uma pasta 'dist' que é o que irá para servidor de produção.

$ cd caminho/decompactado/static
$ bower install
$ npm install
$ grunt build
$ grunt server

- DEV
* Modelo Angular *

-/<br/>
 &nbsp;|_dev/<br/>
	&nbsp;|_ index.html<br/>
	&nbsp;|_common/<br/>
		&nbsp;&nbsp;|_ footer.html<br/>
		&nbsp;&nbsp;|_ top-header.html<br/>
	&nbsp;|_images/<br/>
	&nbsp;|_less/<br/>
		&nbsp;&nbsp;|_ main.less<br/>
	&nbsp;|_scripts/<br/>
		&nbsp;&nbsp;|_ app.js<br/>
	&nbsp;|_views/<br/>
		&nbsp;&nbsp;|_cad/<br/>
			&nbsp;&nbsp;&nbsp;|_ cad.html<br/>
		&nbsp;&nbsp;&nbsp;|_ cad.js<br/>
		&nbsp;|_main/
			&nbsp;|_ main.html<br/>
			&nbsp;|_ main.js<br/>

Todos as telas do app irão ficar dentro de 'views', para criar uma nova view basta criar uma pasta com seu arquivo html e js. Só ver o padão da pasta 'cad'. Veja o arquivo 'scripts/app.js', nele tem todas as rotas do ngRouter e a declaração dos Controllers. Requer conhecimento em Angular < https://angularjs.org/ >

* Modelo Static *

-/
 |_dev/
	|_ index.html
	|_ static.html
	|_common/
		|_ footer.html
		|_ top-header.html
	|_images/
	|_less/
		|_ main.less
	|_scripts/
		|_ app.js

Todas as outras sub páginas ficam na raiz. Só usar como base o arquivo static.html


* Referências *
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





