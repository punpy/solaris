#!/bin/sh

echo ==================================================================================

echo   Hong Kong : http://ec2-52-62-188-164.ap-southeast-2.compute.amazonaws.com:9100
echo   Melbourne : http://ec2-52-62-188-164.ap-southeast-2.compute.amazonaws.com:9200
echo   Auckland  : http://ec2-52-62-188-164.ap-southeast-2.compute.amazonaws.com:9300
echo   Singapore : http://ec2-52-62-188-164.ap-southeast-2.compute.amazonaws.com:9400
echo   Sydney    : http://ec2-52-62-188-164.ap-southeast-2.compute.amazonaws.com:9500

echo ==================================================================================

nohup ./hk.sh > hk.log 2>&1 &

echo Started hk server

nohup ./mel.sh > mel.log 2>&1 &

echo Started Melbourne server

nohup ./nz.sh > nz.log 2>&1 &

echo Started Auckland server

nohup ./sg.sh > sg.log 2>&1 &

echo Started Singapore server

nohup ./syd.sh > syd.log 2>&1 &

echo Started Sydney server
