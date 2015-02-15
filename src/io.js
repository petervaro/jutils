/* INFO ************************************************************************
**                                                                            **
**                                   jutils                                   **
**                                   ======                                   **
**                                                                            **
**                         Handy JavaScript Snippets                          **
**                       Version: 0.2.01.129 (20150215)                       **
**                              File: src/io.js                               **
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
        throw new Error("[module jutils.io] jutils hasn't been initialised");

    /* Include guard */
    globals.module.include({
        namespace    : globals,
        module       : 'meta',
        requirements : [
            'meta',
        ],
    });

    /* Module object */
    var io = {__module__: 'io'};

    /*------------------------------------------------------------------------*/
    /* Add singleton-pattern decoration */
    io.Stream = globals.meta.singleton(
    function (args)
    {
        this.newline = '';

        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        this.toString = function ()
        {
            return '[object io.Stream]';
        };


        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        this.write = function (string)
        {
            this._buffer = this._buffer || [];
            this._buffer.push(string);
        };
    });



    /*------------------------------------------------------------------------*/
    io.CONSOLE = globals.meta.singleton(
    function (args)
    {
        io.Stream.call(this, args);
        this.newline = '\n';

        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        this.toString = function ()
        {
            return '[object io.Console]';
        };


        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        this.write = function (string)
        {
            console.log(string);
        };
    })();



    /*------------------------------------------------------------------------*/
    io.DOCUMENT = globals.meta.singleton(
    function (args)
    {
        io.Stream.call(this, args);
        this.newline = '<br />';


        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        this.toString = function ()
        {
            return '[object io.Document]';
        };


        /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        this.write = function (string)
        {
            /* If not running inside a browser */
            if (!document)
                throw new TypeError("[object jutils.io.Document] " +
                                    "document is not defined");

            var div = document.createElement('div');
            div.className = 'jutils-io-document-output';
            div.innerHTML = string;
            document.body.appendChild(div);
        };
    })();



    /*------------------------------------------------------------------------*/
    io.STDOUT   = io.CONSOLE;


    /*------------------------------------------------------------------------*/
    /* Default options for print function */
    var DEFAULT = {sep: ' ',          /* separator between items */
                   end: '\n',         /* line ending */
                   file: io.CONSOLE,  /* output stream */
                   flush: false};     /* TODO: make this meaningful */
    /* Default keys-array of DEFAULT options */
    var DEFAULT_KEYS = Object.keys(DEFAULT);



    /*------------------------------------------------------------------------*/
    /* Python3 like print function */
    io.print = function (args, options)
    {
        /* Check arguments */
        args = args || [];
        if (!(args instanceof Array))
            throw new TypeError("[function jutils.io.print] " +
                                "first argument is not an Array");
        options = options || {};
        if (!(args instanceof Object))
            throw new TypeError("[function jutils.io.print] " +
                                "second argument is not an Object");

        /* Construct details */
        var i,
            key,
            details = {};
        for (i=0; i<DEFAULT_KEYS.length; i++)
        {
            key = DEFAULT_KEYS[i];
            details[key] = key in options ? options[key]
                                          : DEFAULT[key];
        }

        /* Fill buffer */
        var arg,
            buffer = [];
        for (i=0; i<args.length; i++)
        {
            /* Get next argument */
            arg = args[i];

            /* If argument is special */
            if (arg === undefined)
                arg = 'undefined';
            else if (arg === null)
                arg = 'null';
            else if (arg.toString instanceof Function)
                if (arg instanceof Array && !arg.length)
                    arg = '[' + arg.toString() + ']';
                else
                    arg = arg.toString();

            /* Add argument to the output buffer */
            buffer.push(arg);
        }

        /* Write buffer to file with line-ending */
        details.file.write(buffer.join(details.sep) + details.end);
    };


    /*------------------------------------------------------------------------*/
    /* Python3 like string.format method */
    io.format = function (string, values)
    {
        /* Check arguments */
        if (!(string instanceof String ||
              typeof string === 'string'))
                throw new TypeError("[function jutils.io.format] " +
                                    "first argument has too be a string");

        values = values || [];
        if (!(values instanceof Array ||
              values instanceof Object))
                throw new TypeError("[function jutils.io.format] " +
                                    "second argument has to be an Array or Object");
    };

    /*------------------------------------------------------------------------*/
    /* Export to global namespace */
    globals.io = io;
})();
