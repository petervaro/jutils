/* INFO ************************************************************************
**                                                                            **
**                                   jutils                                   **
**                                   ======                                   **
**                                                                            **
**                         Handy JavaScript Snippets                          **
**                       Version: 0.2.01.146 (20150216)                       **
**                             File: src/ajax.js                              **
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

/*----------------------------------------------------------------------------*/
(function ()
{
    'use strict';

    /* Set/get name-space object */
    var globals = __JUTILS_GLOBAL_OBJECT_REFERENCE_6508856906534193__;
    if (!globals)
        throw new Error("[module jutils.ajax] jutils hasn't been initialised");

    /* Private constants */
    var FN_CONNECTION_REPR = "[function jutils.ajax.connect]";

    /*------------------------------------------------------------------------*/
    var ajax =
    {
        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        __module__: 'ajax',

        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        connect: function (args)
        {
            /* Get/set values based on arguments */
            if (args.connectionType !== 'GET' &&
                args.connectionType !== 'POST')
                throw new TypeError(FN_CONNECTION_REPR +
                                    " invalid 'connectionType' argument for request");
            var connectionType = args.connectionType;

            if (typeof args.connectionURL !== 'string' &&
                !(args.connectionURL instanceof String))
                throw new TypeError(FN_CONNECTION_REPR +
                                    " argument 'connectionURL' is not a string");
            var connectionURL = args.connectionURL;

            if (typeof args.onSuccess !== 'function')
                throw new TypeError(FN_CONNECTION_REPR +
                                    " argument 'onSuccess' is not a function");
            var onSuccess = args.onSuccess;

            if (typeof args.onFailure !== 'function')
                throw new TypeError(FN_CONNECTION_REPR +
                                    " argument 'onFailure' is not a function");
            var onFailure = args.onFailure;

            if (typeof args.onError !== 'function')
                throw new TypeError(FN_CONNECTION_REPR +
                                    " argument 'onError' is not a function");
            var onError = args.onError;

            /* Create a new AJAX request */
            var request = new XMLHttpRequest();
            request.open(connectionType, connectionURL, true);

            /* Bind callback if response has been loaded */
            request.addEventListener('load',
                function ()
                {
                    /* On success */
                    if (request.status >= 200 && request.status < 400)
                        onSuccess(request);
                    /* On failure */
                    else
                        onFailure(request);
                });

            /* Bind callback if there has been an error */
            request.addEventListener('error', onError.bind(undefined, request));

            /* Trigger AJAX request */
            request.send();
        },
    };

    /*------------------------------------------------------------------------*/
    /* Export to global namespace */
    globals.ajax = ajax;
})();
