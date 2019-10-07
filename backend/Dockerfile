FROM osrm/osrm-backend:latest

ADD http://download.geofabrik.de/north-america/us/hawaii-140101.osm.pbf /data/hawaii-140101.osm.pbf

#http://download.geofabrik.de/north-america/us/hawaii-140101.osm.pbf

RUN ["osrm-extract", "-p", "/opt/car.lua", "/data/hawaii-140101.osm.pbf"]

RUN ["osrm-partition", "/data/hawaii-140101.osrm"]

RUN ["osrm-customize", "/data/hawaii-140101.osrm"]

ENTRYPOINT ["osrm-routed", "--algorithm", "mld"]

CMD ["/data/hawaii-140101.osrm"]

VOLUME ["/data"]

EXPOSE 5000
