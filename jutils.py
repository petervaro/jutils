#!/usr/bin/env python3
## INFO ########################################################################
##                                                                            ##
##                                   jutils                                   ##
##                                   ======                                   ##
##                                                                            ##
##                         Handy JavaScript Snippets                          ##
##                       Version: 0.2.01.109 (20150215)                       ##
##                              File: jutils.py                               ##
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

# Import flask modules
from flask import Flask, render_template, jsonify, request

#------------------------------------------------------------------------------#
app  = Flask(__name__,
             static_folder='test',
             template_folder='test')


#------------------------------------------------------------------------------#
@app.route('/')
def index():
    return render_template('index.html')


#------------------------------------------------------------------------------#
if __name__ == '__main__':
    app.debug = True
    app.run()
