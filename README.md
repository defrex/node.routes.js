
node.routes.js
=============
A simple url router.

Two methods are provided:

<strong>router.route(request, response, urls)</strong>

urls should be an array of arrays in the from:

    urls = [
        ['/regex', function(request, response){}]
    ]

Additionally, if your regex contains capture groups, they will be passed
as arguments after request and response to your function. For example:

    urls = [
        ['^/media/(.*)$', function(request, response, files){
            /* serve file */
        }]
    ]

In this case, if the url /media/img/logo.png is fetched, the argument files
would be passed to the function as "img/logo.png".

<strong>router.include(urls)</strong>

urls should be in the same form as for route. This is used for nesting
url lookups. That is all /forum/ urls go to forum.urls and so on.


