#!/bin/bash

echo ====================================================================================
echo   Melbourne : http://ec2-52-62-188-164.ap-southeast-2.compute.amazonaws.com:9200
echo ====================================================================================

cp ../www/js/app-melbourne.js ../www/js/app.js
cd ..
ionic serve -p 9200 
