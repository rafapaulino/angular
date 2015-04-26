pessoas
    .factory('PessoasSrv', function($resource) {
       return $resource(
           'http://localhost/angularjs/curso/index.php/pessoas/:id', {
               id: '@id'
           },
           {
               update: {
                   method: 'PUT',
                   url: 'http://localhost/angularjs/curso/index.php/pessoas/:id'
               }
           }
       );
    });