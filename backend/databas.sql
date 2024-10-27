import { format } from 'sql-formatter';

console.log(format('SELECT * FROM tbl', { language: 'mysql' }));

 CREATE TABLE courses (
 id serial PRIMARY KEY,
 name text UNIQUE NOT NULL);


-- CREATE TABLE recipes ( id serial PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL, cook_time INTEGER NOT NULL, servings INTEGER NOT NULL, img_url TEXT, ingredients TEXT[], instructions TEXT[], type INTEGER, FOREIGN KEY(type) REFERENCES courses(id));

    CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    cook_time INTEGER NOT NULL,
    servings INTEGER NOT NULL,
    img_url TEXT,
    type INTEGER,
    FOREIGN KEY(type) REFERENCES courses(id)
 );

CREATE TABLE
 CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
    ingredient TEXT NOT NULL,
    amount TEXT NOT NULL
 );

CREATE TABLE
 CREATE TABLE instructions (
     id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
     step_number INTEGER NOT NULL,
     instruction TEXT NOT NULL
);

INSERT INTO recipes (name, description, cook_time, servings, img_url, type)
VALUES (
    'Bouillabaisse',
    'Bouillabaisse är en fransk fisksoppa från Provence, känd för sin rika smak och användning av färska fiskar, skaldjur och kryddor.',
    45,
    4,
    'image1',
    6
);


WITH new_recipe AS (
    INSERT INTO recipes (name, description, cook_time, servings, img_url, type)
    VALUES (
        'Bouillabaisse',
        'Bouillabaisse är en fransk fisksoppa från Provence, känd för sin rika smak och användning av färska fiskar, skaldjur och kryddor.',
        45,
        4,
        'url_to_image',
        6
    )
    RETURNING id
)

INSERT INTO ingredients (recipe_id, ingredient, amount)
SELECT id,
       unnest(ARRAY['Torskfilé', 'Laxfilé', 'Räkor, skalade', 'Purjolök', 'Vitlöksklyfta',
                     'Skaldjursfond', 'Vatten', 'Vitt vin/matlagningsvin', 'Saffran (1 paket)',
                     'Salt', 'Svartpeppar', 'Timjan', 'Basilika', 'Olivolja']),
       unnest(ARRAY['400 g', '300 g', '150 g', '1 st', '1 st',
                     '3 msk', '2 dl', '0.5 dl', '0.45 g',
                     '1 tsk', '0.5 krm', '1 tsk', '1 tsk', 'efter behov'])
FROM new_recipe;
