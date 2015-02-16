#!/usr/bin/env python3
## INFO ########################################################################
##                                                                            ##
##                                   jutils                                   ##
##                                   ======                                   ##
##                                                                            ##
##                         Handy JavaScript Snippets                          ##
##                       Version: 0.2.01.146 (20150216)                       ##
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

# Import python modules
from random import choice

# Import flask modules
from flask import Flask, render_template, jsonify, request

#------------------------------------------------------------------------------#
app = Flask(__name__,
            static_folder='test',
            template_folder='test')

#------------------------------------------------------------------------------#
@app.route('/')
def index():
    return render_template('index.html')



#------------------------------------------------------------------------------#
@app.route('/data', methods=['GET', 'POST'])
def data():
    if request.method == 'GET':
        return jsonify(method='GET')
    else:
        return jsonify(method='POST')



#------------------------------------------------------------------------------#
if __name__ == '__main__':
    app.debug = True
    # Try to run app on random, but free ports
    for port in range(5000, 65000):
        try:
            print(' * Get new port:', port)
            app.run(port=port)
            break
        except OSError as exception:
            try:
                # [Errno 98] Address already in use
                if exception.errno != 98:
                    raise exception
            except AttributeError:
                raise exception
