FROM osrm/osrm-backend:latest

ADD build.sh .

RUN apt-get update
RUN apt-get install -y wget

ENTRYPOINT ["./build.sh"]
