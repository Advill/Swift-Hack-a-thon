drop database if exists hackathon;
create database hackathon;
\c hackathon;

create table license_plates (
    id SERIAL,
    plate_text VARCHAR(25) NOT NULL,
    PRIMARY KEY(id)
);

create table employee (
    id INTEGER REFERENCES license_plates(id),
    PRIMARY KEY(id)
);

create table other (
    id INTEGER REFERENCES license_plates(id),
    PRIMARY KEY(id)
);

create table activity (
    id INTEGER REFERENCES license_plates(id),
    time_stamp timestamp without time zone,
    PRIMARY KEY(id, time_stamp)
);
