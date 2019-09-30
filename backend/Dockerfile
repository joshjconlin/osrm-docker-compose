FROM osrm/osrm-backend:latest

RUN mkdir -p /usr/src/app/backend
COPY . /usr/src/app/backend
WORKDIR /usr/src/app/backend

ADD http://download.geofabrik.de/north-america/us/washington-latest.osm.pbf /data/washington-latest.osm.pbf

RUN ["osrm-extract", "-p", "/opt/car.lua", "/data/washington-latest.osm.pbf"]

RUN ["osrm-partition", "/data/washington-latest.osrm"]

RUN ["osrm-customize", "/data/washington-latest.osrm"]

ENTRYPOINT ["osrm-routed", "--algorithm", "mld"]

CMD ["/data/washington-latest.osrm"]

VOLUME ["/data"]

EXPOSE 5000
