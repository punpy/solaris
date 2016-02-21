#!/bin/bash

echo ====================================================================================
echo   Auckland : http://ec2-52-62-188-164.ap-southeast-2.compute.amazonaws.com:9300
echo ====================================================================================

cp ../www/js/app-auckland.js ../www/js/app.js
cd ..
ionic serve -p 9300 
