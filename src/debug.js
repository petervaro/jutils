/* INFO ************************************************************************
**                                                                            **
**                                   jutils                                   **
**                                   ======                                   **
**                                                                            **
**                         Handy JavaScript Snippets                          **
**                       Version: 0.2.01.120 (20150215)                       **
**                             File: src/debug.js                             **
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

var DEBUG;

/*----------------------------------------------------------------------------*/
(function ()
{
    'use strict';

    /* Set/get name-space object */
    var globals = __JUTILS_GLOBAL_OBJECT_REFERENCE_6508856906534193__;
    if (!globals)
        throw new Error("[module jutils.debug] jutils hasn't been initialised");

    /* Include guard */
    globals.module.include({
        namespace    : globals,
        module       : 'debug',
        requirements : [
            'io',
        ],
    });

    /*------------------------------------------------------------------------*/
    var debug =
    {
        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        __module__: 'debug',

        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        /* The `debug` function can be used to log values to a file-like object
           with the proper position where the function was called. The file like
           object will always be the io.STDOUT.

           Example usages:

           // Call without any arguments
           g.jutils.debug.debug();
           // OUTPUT:
           // "[function jutils.debug.debug]"

           // Call with several arguments
           g.jutils.debug.debug(true, false, 12, 0.98, {}, []);
           // OUTPUT:
           // "[function jutils.debug.debug]
           // ==> true
           // ==> false
           // ==> 12
           // ==> 0.98
           // ==> [object Object]
           // ==> []
           // "

           // Call it with a single error-object
           g.jutils.debug.debug(new Error());
           // OUTPUT:
           // "[function jutils.debug.debug]
           // in file: test/main.js, in line: 60, at column: 25"

           // Call it with an error-object and several arguments
           g.jutils.debug.debug(new Error(), true, false, 12, 0.98, {}, []);
           // OUTPUT:
           // "[function jutils.debug.debug]
           // in file: test/main.js, in line: 65, at column: 25
           // ==> true
           // ==> false
           // ==> 12
           // ==> 0.98
           // ==> [object Object]
           // ==> []
           // "
         */
        debug: function ()
        {
            /* If debugging is turned off globally */
            if (!DEBUG)
                return;

            /* Disassemble arguments */
            var args,
                error  = arguments[0],
                prefix = '[function jutils.debug.debug]';

            /* If first argument is a new error-object */
            if (error instanceof Error)
            {
                prefix += '\nin file: '  + error.fileName   +
                          ', in line: '   + error.lineNumber +
                          ', at column: ' + error.columnNumber;
                args = Array.prototype.slice.call(arguments, 1);
            }
            /* If first argument is not an error object */
            else
                args = Array.prototype.slice.call(arguments);

            /* Prepare arguments array */
            args.splice(0, 0, prefix);

            /* Print content to file */
            globals.io.print.call(undefined,
                                  args,
                                  {sep  : globals.io.STDOUT.newline + '==> ',
                                   end  : args.length - 1 ? '\n' : '',
                                   file : globals.io.STDOUT});
        },
    };

    /*------------------------------------------------------------------------*/
    /* Export to global namespace */
    globals.debug = debug;
})();
