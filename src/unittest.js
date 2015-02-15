/* INFO ************************************************************************
**                                                                            **
**                                   jutils                                   **
**                                   ======                                   **
**                                                                            **
**                         Handy JavaScript Snippets                          **
**                       Version: 0.2.01.114 (20150215)                       **
**                           File: src/unittest.js                            **
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
    var unittest =
    {
        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        __module__: 'unittest',

        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        assert: function(condition)
        {
            return;
        },

        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        Test: function (args)
        {
            this._tests = [];

            this.newTest = function ()
            {

            };

            this.runTests = function ()
            {

            };
        },
    };

    /*------------------------------------------------------------------------*/
    /* Export to global namespace */
    globals.unittest = unittest;
})();
