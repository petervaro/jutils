#!/usr/bin/env python3
## INFO ########################################################################
##                                                                            ##
##                                   jutils                                   ##
##                                   ======                                   ##
##                                                                            ##
##                         Handy JavaScript Snippets                          ##
##                       Version: 0.2.01.109 (20150215)                       ##
##                               File: build.py                               ##
##                                                                            ##
##               For more information about the project, visit                ##
##                   <https://github.com/petervaro/jutils>.                   ##
##                       Copyright (C) 2015 Peter Varo                        ##
##                                                                            ##
##  This program is free software: you can redistribute it and/or modify it   ##
##   under the terms of the GNU General Public License as published by the    ##
##       Free Software Foundation, either version 3 of the License, or        ##
##                    (at your option) any later version.                     ##
##                                                                            ##
##    This program is distributed in the hope that it will be useful, but     ##
##         WITHOUT ANY WARRANTY; without even the implied warranty of         ##
##            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.            ##
##            See the GNU General Public License for more details.            ##
##                                                                            ##
##     You should have received a copy of the GNU General Public License      ##
##     along with this program, most likely a file in the root directory,     ##
##        called 'LICENSE'. If not, see <http://www.gnu.org/licenses>.        ##
##                                                                            ##
######################################################################## INFO ##

# Import python modules
from sys import argv
from copy import deepcopy

# Module level constants
CURRENT_DIR = '.'
RESET_CACHE = len(argv) - 1

# Import cutils modules
try:
    import cutils.ccom
    import cutils.clic
    import cutils.cver

    web_dev = '.js', '.css', '.html'

    exclude = deepcopy(cutils.ccom.EXCLUDE)
    exclude['folders'].append('build')

    ccom_include = deepcopy(cutils.ccom.INCLUDE)
    ccom_include['extensions'].extend(web_dev)

    clic_include = deepcopy(cutils.clic.INCLUDE)
    clic_include['extensions'].extend(web_dev)

    # Update version
    cutils.cver.version(CURRENT_DIR, sub_max=9, rev_max=99, build_max=999)
    # Collect all special comments
    cutils.ccom.collect(CURRENT_DIR,
                        include=ccom_include,
                        exclude=exclude,
                        overwrite=RESET_CACHE)
    # Update header comments
    cutils.clic.header(CURRENT_DIR,
                       include=clic_include,
                       exclude=exclude,
                       overwrite=RESET_CACHE)
except ImportError:
    print('[WARNING] cutils modules are missing: '
          'install it from http://www.cutils.org')
