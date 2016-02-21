#!/bin/sh

echo ====================================================================================
echo   Sydney : http://ec2-52-62-188-164.ap-southeast-2.compute.amazonaws.com:9500
echo ====================================================================================

cp ../www/js/app-sydney.js ../www/js/app.js
cd ..
ionic serve -p 9500 
