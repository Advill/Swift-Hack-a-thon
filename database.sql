drop database if exists hackathon;
create database hackathon;
\c hackathon;

create table license_plate (
    id SERIAL,
    plate_text VARCHAR(25) NOT NULL,
    PRIMARY KEY(id)
);

create table employee (
    id INTEGER REFERENCES license_plate(id),
    PRIMARY KEY(id)
);

create table other (
    id INTEGER REFERENCES license_plate(id),
    PRIMARY KEY(id)
);

create table activity (
    id INTEGER REFERENCES license_plate(id),
    time_stamp timestamp without time zone,
    PRIMARY KEY(id, time_stamp)
);

insert into license_plate (plate_text) values ('WTM-9090');
insert into license_plate (plate_text) values ('ABC-9770');
insert into license_plate (plate_text) values ('sdsdds-909ss0');

insert into employee (id) values (1);
insert into employee (id) values (2);

insert into activity (id, time_stamp) values (1, current_timestamp);
insert into activity (id, time_stamp) values (1, current_timestamp);
insert into activity (id, time_stamp) values (2, current_timestamp);
insert into activity (id, time_stamp) values (2, current_timestamp);
insert into activity (id, time_stamp) values (2, current_timestamp);
insert into activity (id, time_stamp) values (2, current_timestamp);
insert into activity (id, time_stamp) values (3, current_timestamp);
