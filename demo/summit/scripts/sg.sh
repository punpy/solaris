#!/bin/bash

echo ====================================================================================
echo   Singapore : http://ec2-52-62-188-164.ap-southeast-2.compute.amazonaws.com:9400
echo ====================================================================================

cp ../www/js/app-singapore.js ../www/js/app.js
cd ..
ionic serve -p 9400 
