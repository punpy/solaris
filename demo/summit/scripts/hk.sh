#!/bin/bash

echo ====================================================================================
echo   Hong Kong : http://ec2-52-62-188-164.ap-southeast-2.compute.amazonaws.com:9100
echo ====================================================================================

cp ../www/js/app-hk.js ../www/js/app.js
cd ..
ionic serve -p 9100
