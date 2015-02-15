/* INFO ************************************************************************
**                                                                            **
**                                   jutils                                   **
**                                   ======                                   **
**                                                                            **
**                         Handy JavaScript Snippets                          **
**                       Version: 0.2.01.126 (20150215)                       **
**                             File: src/meta.js                              **
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

(function ()
{
    'use strict';
    /* Set/get name-space object */
    var globals = __JUTILS_GLOBAL_OBJECT_REFERENCE_6508856906534193__;
    if (!globals)
        throw new Error("[module jutils.meta] jutils hasn't been initialised");

    /* Private constant */
    var SINGLETONS = {};

    /*------------------------------------------------------------------------*/
    var meta =
    {
        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        __module__: 'meta',

        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        /* Singleton can be called on any constructor and it acts like a
           decorator: it will wrap the original constructor with a constructor,
           which will guard the creation of an object */
        singleton: function (Constructor)
        {
            /* Check arguments */
            if (!(Constructor instanceof Object))
                throw new TypeError("[function jutils.meta.singleton] " +
                                    "first argument is not an Object");

            /* Return wrapper */
            return function (args)
            {
                /* Get instance */
                var instance = SINGLETONS[Constructor];
                /* If instance does not exist yet */
                if (!instance)
                    /* Create and store a new one */
                    instance = SINGLETONS[Constructor] = new Constructor(args);
                /* Return the singleton object */
                return instance;
            };
        },
    };

    /*------------------------------------------------------------------------*/
    /* Export to global namespace */
    globals.meta = meta;
})();
