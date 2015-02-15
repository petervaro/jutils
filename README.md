jutils
======

*Handy Javascript Snippets*

Initialise `jutils`
-------------------

Inside `init.js` (which is included after `jutils.js`):

    var myGlobals = {};
    jutils({globals: myGlobals});

After all `jutils` modules has been included:

    var print = myGlobals.jutils.io.print;
    print(['Hello', 'World'], {sep: ', ', end: '!'});
