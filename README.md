
A simple url router.

Two methods are provided:

<strong>router.route(request, response, urls)</strong>

urls should be an array of arrays in the from:

urls = [
    ['regex', function(request, response){}]
]

<strong>router.include(urls)</strong>

urls should be in the same form as for route. This is used for nesting
url lookups. That is all /forum/ urls go to forum.urls and so on.


