CREATE TABLE wine (
    id INT PRIMARY KEY AUTOINCREMENT,
    producer TEXT NOT NULL,
    brand TEXT,
    appellation TEXT NOT NULL,
    country TEXT NOT NULL,
    region TEXT NOT NULL,
    vintage INTEGER NOT NULL,
    barcode TEXT NOT NULL
);

INSERT INTO wine (producer, brand, appellation, country, region, vintage, barcode) 
VALUES ('Tua Rita', 'Redigaffi', 'Toscana', 'Italy', 'Tuscany', 2016, '1');

INSERT INTO wine (producer, brand, appellation, country, region, vintage, barcode) 
VALUES ('Tua Rita', 'Redigaffi', 'Toscana', 'Italy', 'Tuscany', 2019, '2');

INSERT INTO wine (producer, brand, appellation, country, region, vintage, barcode) 
VALUES ('Favia', 'Cerro Sur', 'Napa Valley', 'USA', 'California', 2019, '3');

INSERT INTO wine (producer, brand, appellation, country, region, vintage, barcode) 
VALUES ('Chateau Lafleur', NULL, 'Pomerol', 'France', 'Bordeaux', 1982, '4');

INSERT INTO wine (producer, brand, appellation, country, region, vintage, barcode) 
VALUES ('AXR', 'Beckstoffer To Kalon Vineyard Cabernet Sauvignon', 'Napa Valley', 'USA', 'California', 2019, '5');

INSERT INTO wine (producer, brand, appellation, country, region, vintage, barcode) 
VALUES ('Harlan Estate', NULL, 'Napa Valley', 'USA', 'California', 2019, '6');

INSERT INTO wine (producer, brand, appellation, country, region, vintage, barcode) 
VALUES ('Vine Hill Ranch', 'VHR Cabernet Sauvignon', 'Napa Valley', 'USA', 'California', 2019, '7');

INSERT INTO wine (producer, brand, appellation, country, region, vintage, barcode) 
VALUES ('Lithology', 'Beckstoffer To Kalon Vineyard', 'Napa Valley', 'USA', 'California', 2019, '8');

INSERT INTO wine (producer, brand, appellation, country, region, vintage, barcode) 
VALUES ('Screaming Eagle', NULL, 'Napa Valley', 'USA', 'California', 2019, '9');

INSERT INTO wine (producer, brand, appellation, country, region, vintage, barcode) 
VALUES ('Jim Barry', 'The Armagh Shiraz', 'Clare Valley', 'Australia', 'South Australia', 2018, '10');