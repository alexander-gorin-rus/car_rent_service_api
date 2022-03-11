-- psql commands

CREATE DATABASE car_rent_service;

CREATE TABLE cars (
    id serial PRIMARY KEY,
    state_id VARCHAR ( 50 ) UNIQUE NOT NULL,
    startRent DATE,
    endRent DATE,
    available BOOLEAN,
    mark VARCHAR(20),
    car_type VARCHAR(10),
    model VARCHAR(20)
);

CREATE TABLE car-rent-report (
    id INT,
);

DROP TABLE cars;

ALTER TABLE cars DROP COLUMN rentRange;
ALTER TABLE cars ADD COLUMN car_type VARCHAR(20); 

INSERT INTO cars 
(state_id, startRent, endRent, available, mark, car_type, model) 
VALUES 
('234iud', NULL, NULL, true, 'opel', 'sedan', 'Omega');