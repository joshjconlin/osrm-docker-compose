#!/bin/sh

wget -O /data/washington-latest.osm.pbf http://download.geofabrik.de/north-america/us/washington-latest.osm.pbf

osrm-extract -p /opt/car.lua /data/washington-latest.osm.pbf
osrm-partition /data/washington-latest.osrm
osrm-customize /data/washington-latest.osrm
