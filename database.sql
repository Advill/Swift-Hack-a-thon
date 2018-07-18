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
insert into license_plate (plate_text) values ('ILOV-C33S');
insert into license_plate (plate_text) values ('V3R-S8FE');
insert into license_plate (plate_text) values ('HI-SWIFT');
insert into license_plate (plate_text) values ('777-DATA');
insert into license_plate (plate_text) values ('HOWRU?');
insert into license_plate (plate_text) values ('N33D-CFFE');
insert into license_plate (plate_text) values ('WXV-5555');
insert into license_plate (plate_text) values ('NO-Parking');
insert into license_plate (plate_text) values ('NUMBER1');
insert into license_plate (plate_text) values ('TGH-1345');
insert into license_plate (plate_text) values ('NOP-5848');
insert into license_plate (plate_text) values ('RUY-2829');
insert into license_plate (plate_text) values ('JOLP-380');
insert into license_plate (plate_text) values ('N33D-TIME');
insert into license_plate (plate_text) values ('ICANTDVE55');
insert into license_plate (plate_text) values ('NICE-CAR');
insert into license_plate (plate_text) values ('CVB-9035');
insert into license_plate (plate_text) values ('ZYE-1973');
insert into license_plate (plate_text) values ('QVC4EVER');


insert into employee (id) values (3);
insert into employee (id) values (4);
insert into employee (id) values (5);
insert into employee (id) values (7);
insert into employee (id) values (8);
insert into employee (id) values (9);
insert into employee (id) values (10);
insert into employee (id) values (11);
insert into employee (id) values (16);
insert into employee (id) values (17);
insert into employee (id) values (18);
insert into employee (id) values (21);

insert into other (id) values (1);
insert into other (id) values (2);
insert into other (id) values (6);
insert into other (id) values (12);
insert into other (id) values (13);
insert into other (id) values (14);
insert into other (id) values (15);
insert into other (id) values (19);
insert into other (id) values (20);

insert into activity (id, time_stamp) values (3, current_timestamp);
insert into activity (id, time_stamp) values (4, current_timestamp);
insert into activity (id, time_stamp) values (5, current_timestamp);
insert into activity (id, time_stamp) values (7, current_timestamp);
insert into activity (id, time_stamp) values (8, current_timestamp);
insert into activity (id, time_stamp) values (9, current_timestamp);
insert into activity (id, time_stamp) values (10, current_timestamp);
insert into activity (id, time_stamp) values (11, current_timestamp);
insert into activity (id, time_stamp) values (16, current_timestamp);
insert into activity (id, time_stamp) values (17, current_timestamp);
insert into activity (id, time_stamp) values (18, current_timestamp);
insert into activity (id, time_stamp) values (21, current_timestamp);
insert into activity (id, time_stamp) values (21, current_timestamp);
insert into activity (id, time_stamp) values (10, current_timestamp);
insert into activity (id, time_stamp) values (10, current_timestamp);
insert into activity (id, time_stamp) values (1, current_timestamp);
insert into activity (id, time_stamp) values (1, current_timestamp);
insert into activity (id, time_stamp) values (1, current_timestamp);
insert into activity (id, time_stamp) values (2, current_timestamp);
insert into activity (id, time_stamp) values (2, current_timestamp);
insert into activity (id, time_stamp) values (12, current_timestamp);
insert into activity (id, time_stamp) values (15, current_timestamp);
insert into activity (id, time_stamp) values (15, current_timestamp);
insert into activity (id, time_stamp) values (19, current_timestamp);
insert into activity (id, time_stamp) values (20, current_timestamp);
insert into activity (id, time_stamp) values (20, current_timestamp);