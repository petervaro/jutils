/* INFO ************************************************************************
**                                                                            **
**                                   jutils                                   **
**                                   ======                                   **
**                                                                            **
**                         Handy JavaScript Snippets                          **
**                       Version: 0.2.01.114 (20150215)                       **
**                            File: src/jutils.js                             **
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
/* Private constants */
var __JUTILS_GLOBAL_OBJECT_REFERENCE_6508856906534193__;

/*----------------------------------------------------------------------------*/
/* Public constants */
var DEBUG;

/*----------------------------------------------------------------------------*/
/* Initialiser */
function jutils(args)
{
    'use strict';

    /* Get/set globals */
    var globals = args.globals || {};
    if (args.hasExtraNameSpaceLevel)
        globals = globals.jutils = globals.jutils || {};

    /* Check if 'globals' is valid or not */
    if (!(globals instanceof Object))
        throw new TypeError("[function jutils] 'globals' is not an Object");

    /* Make it available for public */
    __JUTILS_GLOBAL_OBJECT_REFERENCE_6508856906534193__ = globals;

    /*------------------------------------------------------------------------*/
    /* Essential module requirement */
    var module =
    {
        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        __module__: 'module',

        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        include: function (args)
        {
            var namespace    = args.namespace,
                requirements = args.requirements,
                thisName = '[function jutils.module.include]',
                includer = args.module ? '[module jutils.' + args.module + ']'
                                       : '';

            /* Check namespace argument */
            if (!(namespace instanceof Object))
                throw new TypeError(thisName + " 'namespace' is not an Object");

            /* Check 'requirements' argument */
            if (!(requirements instanceof Array))
                throw new TypeError(thisName + " 'requirements' is not an Array");

            /* Check if required modules are available */
            for (var i=0; i<requirements.length; i++)
                /* If namespace does not have the required module */
                if (!namespace[requirements[i]])
                    throw new Error(includer + " missing module '" +
                                    requirements[i] + "'");
        },
    };

    /*------------------------------------------------------------------------*/
    /* Export to global namespace */
    globals.module = module;
}
