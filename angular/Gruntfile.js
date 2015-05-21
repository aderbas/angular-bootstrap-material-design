var global = {
  path: {
    less    : 'dev/less',
    css     : 'dist/css',
    jslib   : 'dist/js/lib',
    js      : 'dist/js',
    scripts : 'dev/scripts'
  },
  mainless: 'dev/less/main.less'
};

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    config       : global,
    pkg          : grunt.file.readJSON('package.json'),
    // BOWER CONCAT, CREATE LIB
    bower_concat : {
      libs: {
        dest    : '<%= config.path.jslib %>/lib.js',
        include : ['jquery','bootstrap-material-design', 'bootstrap', 'angular', 'angular-route'],
        dependencies: {
          'bootstrap-material-design' : 'jquery',
          'bootstrap' : 'jquery',
          'angular-route' : 'angular'
        }
      }
    },  
    // LESS
    less : {
      production:{
        options: {
          paths: ['<%=config.path.less%>'],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
            new (require('less-plugin-clean-css'))({})
          ],
        },
        files: {
          '<%=config.path.css%>/main.css' : '<%=config.mainless%>'
        }
      }
    },
    // CONCAT
    concat : {
      options:{ 
        separator: ';',
        // Replace all 'use strict' statements in the code with a single one at the top
        banner: "'use strict';\n",
        process: function(src, filepath) {
          return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        }        
      },
      temp: {
        src: ["<%=config.path.scripts%>/**/*.js"],
        dest: 'tmp/scripts.js'
      },
      views: {
        src: ["dev/views/**/*.js"],
        dest: 'tmp/views.js'
      },
      dist: {
        src: ['tmp/scripts.js', 'tmp/views.js'],
        dest: '<%=config.path.js%>/app.<%=pkg.version%>.js'
      }      
    }, 
    // UGLIFY
    uglify: {
      options: {
        report: 'min',
        mangle: false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%=config.path.js%>/app.<%=pkg.version%>.min.js': ['<%= concat.dist.dest %>'],
          'dist/js/lib/lib.min.js': '<%= bower_concat.libs.dest %>' // <-- bower_concat
        }
      }
    },
    // COPY 
    copy: {
      fonts: {
        files: [ 
          // copy fonts
           {expand: true, cwd: 'bower_components/bootstrap-material-design/fonts/', src: ['**'], dest: 'dist/fonts/'}
        ],
      }
    },   
    // STRING REPLACE
    'string-replace': {
      procuction:{
        files: [{'dist/index.html': 'dist/index.html'}],        
        options: {
          replacements: [{
            pattern: /<% @importjs (.*?) %>/ig,
            replacement: '<script src="js/app.<%=pkg.version%>.js"></script>'
          }]
        }        
      },
      dist:{
        files: [{'dist/index.html': 'dist/index.html'}],        
        options: {
          replacements: [{
            pattern: /<% @importjs (.*?) %>/ig,
            replacement: '<script src="js/app.<%=pkg.version%>.min.js"></script>'
          }]
        }        
      }
    },  
    // HTML COMPRESSOR
    htmlcompressor: {
      compile: {
        files: [{
          expand: true,
          cwd: 'dev/',
          src: ['**/*.html'],
          dest: 'dist/'
        }],
        options: {
          type: 'html',
          preserveServerScript: true
        }
      }
    },
    // CONNECT
    connect : {
      server: {
        options: {
          port: 9001,
          base: 'dist',
          //keepalive: true,
          open: true
        }
      }
    },
    // WATCH
    watch : {
      src: {
        options: { livereload: true },
        files: ['Gruntfile.js', 'dev/scripts/**/*.js', 'dev/**/*.html', 'dev/less/**/*.less', 'dev/views/**/*.js'],
        tasks: ['live']
      }
    }
  });

  grunt.registerTask('server', 'Server App', ['connect:server', 'watch']);
  grunt.registerTask('live', 'Run changes', ['concat','htmlcompressor','string-replace:procuction','less']);
  grunt.registerTask('build', ['bower_concat','less','concat','copy','htmlcompressor','string-replace:dist','uglify']);
  grunt.registerTask('test', ['string-replace', 'htmlcompressor']);
}
