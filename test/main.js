/* INFO ************************************************************************
**                                                                            **
**                                   jutils                                   **
**                                   ======                                   **
**                                                                            **
**                         Handy JavaScript Snippets                          **
**                       Version: 0.2.01.146 (20150216)                       **
**                             File: test/main.js                             **
**                                                                            **
**               For more information about the project, visit                **
**                   <https://github.com/petervaro/jutils>.                   **
**                       Copyright (C) 2015 Peter Varo                        **
**                                                                            **
**  This program is free software: you can redistribute it and/or modify it   **
**   under the terms of the GNU General Public License as published by the    **
**       Free Software Foundation, either version 3 of the License, or        **
**                    (at your option) any later version.                     **
**                                                                            **
**    This program is distributed in the hope that it will be useful, but     **
**         WITHOUT ANY WARRANTY; without even the implied warranty of         **
**            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.            **
**            See the GNU General Public License for more details.            **
**                                                                            **
**     You should have received a copy of the GNU General Public License      **
**     along with this program, most likely a file in the root directory,     **
**        called 'LICENSE'. If not, see <http://www.gnu.org/licenses>.        **
**                                                                            **
************************************************************************ INFO */

var DEBUG = 1;
var g = g || {};

function main()
{
    'use strict';

    /* Initialise jutils */
    jutils({globals: g});

    /* Use it */
    g.jutils.io.print(['Hello', 'World'], {sep: ', ', end: '!'});
    g.jutils.io.print(['Hello', 'World'], {sep: ', ', end: '!', file: g.jutils.io.DOCUMENT});
    g.jutils.io.format('{}, {}!', ['hello', 'world']);

    g.jutils.io.format('{0} > {1} > {1} > {0}!', ['hello', 'world']);
    g.jutils.io.format('{0.first} and {1.first} and {0.second}',
                       [{first: 12, second: true},
                        {first: undefined}]);

    g.jutils.io.format('{param} and {option.x} or {option.y}',
                       {param: []});

    function oups()
    {
        console.log('Oups, something bad has happened!');
    }

    g.jutils.ajax.connect({
        connectionType : 'GET',
        connectionURL  : '/data',
        onSuccess: function (request)
        {
            console.log(JSON.parse(request.response));
        },
        onFailure: oups,
        onError: oups,
    });

    g.jutils.ajax.connect({
        connectionType : 'POST',
        connectionURL  : '/data',
        onSuccess: function (request)
        {
            console.log(JSON.parse(request.response));
        },
        onFailure: oups,
        onError: oups,
    });
}
