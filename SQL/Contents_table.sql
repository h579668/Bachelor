
set search_path = user_tables;

---- CATEGORIES ----
insert into categories(categories_name) values
('Fysiske egenskaper'),
('Koordinative egenskaper'),
('Psykologiske faktorer'),
('Konkurranse'),
('Rammer');

select * from categories;

---- FEATURES ----
insert into features(categories_id, features_name) values
(1, 'Styrke'),
(1, 'Spenst/Hurtighet'),
(1, 'Utholdenhet'),
(1, 'Bevegelighet'),
(2, 'Balanse'),
(2, 'Rytme'),
(2, 'Dynamikk'),
(2, 'Øye-fot'),
(2, 'Øye-hånd'),
(2, 'Romorientering'),
(3, 'Presisjon/Perfeksjonisme'),
(3, 'Taktikk'),
(3, 'Krav om selvstenighet'),
(3, 'Høyt spenningsnivå'),
(3, 'Kroppskontakt'),
(3, 'Samspill'),
(4, 'Estetikk/Kunst (Subjektivt)'),
(4, 'Kamp (vinner-taper)'),
(4, 'MSK (Meter, Sekund, Kilo) (Rangering)'),
(5, 'Utendørs'),
(5, 'Innendørs'),
(5, 'Is'),
(5, 'Sno'),
(5, 'Vann'),
(5, 'Dyr'),
(5, 'Motor/fartøy'),
(5, 'Faste rammer og forutsigbarhet'),
(5, 'Arenabundet')
;

select * from features;

---- AREAS ----
insert into areas(country, municipality, county) values 
('Norge', 'Bergen', 'Vestland');

select * from areas;

---- AGE_INTERVALS ----
insert into age_intervals(age_values) values 
('0 til 5'),
('6 til 9'),
('10 til 13'),
('14 og oppover');

select * from age_intervals;

---- ASSOCIASTIONS ----
insert into associations(associations_name) values
('Brettforbundet'),
('Det frivillige Skyttervesen (ingen tilknytning til NIF)'),
('Luftsportforbundet'),
('NIF/Norges Bueskytterforbund. Og Norsk Langbuelag (NL)'),
('NMF'),
('Norges Aikidoforbund'),
('Norges amerikanske idretters forbund'),
('Norges Badminton Forbund'),
('Norges Bandyforbund');

select * from associations;


---- ACTIVITIES ----
insert into activities(associations_id, activities_name, telephone, email, activities_comments,individual) values
(1, 'Skateboard', '454 64 166', 'henning@norb.no', '', 1),
(1, 'Snøbrett', '922 49 073', 'magnus@snowboardforbundet.no', '', 1),
(2, 'Baneskyting', '975 92 754', 'ofh@dfs.no', '', 1),
(3, 'Fallskjermhopping', '907 04 646', 'janerik.wang@nlf.no', '', 1),
(4, 'Bueskyting', '', '', '', 1),
(5, 'Enduro motorsykkel', '415 64 430', 'a.sletholt@gmail.com', '', 2),
(6, 'Aikido', '918 64 797', 'idalagosandersen@gmail.com', '', 1),
(7, 'Amerikansk fotball', '47201596', 'tone.sparby@nif.idrett.no', '', 0),
(7, 'Cheerleading', '98666494', 'daniela.ohnstad@nif.idrett.no', '', 0),
(7, 'Freesbeegolf', '472 01 596', 'tone.sparby@nif.idrett.no', '', 1),
(7, 'Lacrosse', '971 80 074', 'leder@naiflacrosse.no', '', 0),
(8, 'Badminton', '93038999', 'espen.larsen@badminton.no', '', 1),
(9, 'Innebandy', '450 35 235', 'eivind.tysdal@bandyforbundet.no', '', 0)
;

select * from activities;

--- ACTIVITIES_FEATURES ---
insert into activities_features(activities_id, features_id, activities_features_values) values 
(1, 1, 2),
(1, 2, 3),
(1, 3, 2),
(1, 4, 2),
(1, 5, 3),
(1, 6, 2),
(1, 7, 3),
(1, 8, 3),
(1, 9, 2),
(1, 10, 3),
(1, 11, 2),
(1, 12, 1),
(1, 13, 3),
(1, 14, 2),
(1, 15, 1),
(1, 16, 1),
(1, 17, 1),
(1, 18, 0),
(1, 19, 0),
(1, 20, 1),
(1, 21, 1),
(1, 22, 0),
(1, 23, 0),
(1, 24, 0),
(1, 25, 0),
(1, 26, 1),
(1, 27, 1),
(1, 28, 2),

(2, 1, 2),
(2, 2, 3),
(2, 3, 2),
(2, 4, 2),
(2, 5, 3),
(2, 6, 3),
(2, 7, 3),
(2, 8, 2),
(2, 9, 2),
(2, 10, 3),
(2, 11, 2),
(2, 12, 1),
(2, 13, 2),
(2, 14, 2),
(2, 15, 1),
(2, 16, 1),
(2, 17, 1),
(2, 18, 0),
(2, 19, 0),
(2, 20, 1),
(2, 21, 0),
(2, 22, 0),
(2, 23, 1),
(2, 24, 0),
(2, 25, 0),
(2, 26, 1),
(2, 27, 1),
(2, 28, 2),

(3, 1, 1),
(3, 2, 1),
(3, 3, 1),
(3, 4, 1),
(3, 5, 2),
(3, 6, 1),
(3, 7, 1),
(3, 8, 1),
(3, 9, 3),
(3, 10, 1),
(3, 11, 3),
(3, 12, 2),
(3, 13, 3),
(3, 14, 3),
(3, 15, 1),
(3, 16, 1),
(3, 17, 0),
(3, 18, 0),
(3, 19, 1),
(3, 20, 1),
(3, 21, 1),
(3, 22, 1),
(3, 23, 0),
(3, 24, 0),
(3, 25, 0),
(3, 26, 0),
(3, 27, 3),
(3, 28, 3),

(4, 1, 2),
(4, 2, 1),
(4, 3, 2),
(4, 4, 3),
(4, 5, 2),
(4, 6, 1),
(4, 7, 2),
(4, 8, 2),
(4, 9, 3),
(4, 10, 3),
(4, 11, 3),
(4, 12, 1),
(4, 13, 3),
(4, 14, 3),
(4, 15, 3),
(4, 16, 3),
(4, 17, 1),
(4, 18, 1),
(4, 19, 1),
(4, 20, 1),
(4, 21, 1),
(4, 22, 0),
(4, 23, 0),
(4, 24, 0),
(4, 25, 0),
(4, 26, 1),
(4, 27, 3),
(4, 28, 3);

select * from activities_features;

---- USERS ----
insert into users(age_id, areas_id) values
(1,1),
(1,1);

select * from users;

---- USERS_FEATURES ----
insert into users_features(users_id, features_id, users_features_values) values
(1, 1, 3),
(1, 2, 2),
(1, 3, 1),
(1, 4, 1),
(1, 5, 1),
(1, 6, 3),
(1, 7, 2),
(1, 8, 3),
(1, 9, 2),
(1, 10, 3),
(1, 11, 1),
(1, 12, 2),
(1, 13, 2),
(1, 14, 1),
(1, 15, 1),
(1, 16, 3),
(1, 17, 3),
(1, 18, 1),
(1, 19, 1),
(1, 20, 0),
(1, 21, 1),
(1, 22, 1),
(1, 23, 1),
(1, 24, 0),
(1, 25, 0),
(1, 26, 1),
(1, 27, 1),
(1, 28, 2),

(2, 1, 2),
(2, 2, 1),
(2, 3, 3),
(2, 4, 3),
(2, 5, 3),
(2, 6, 3),
(2, 7, 1),
(2, 8, 3),
(2, 9, 1),
(2, 10, 2),
(2, 11, 1),
(2, 12, 2),
(2, 13, 2),
(2, 14, 3),
(2, 15, 3),
(2, 16, 2),
(2, 17, 1),
(2, 18, 0),
(2, 19, 0),
(2, 20, 1),
(2, 21, 1),
(2, 22, 0),
(2, 23, 1),
(2, 24, 1),
(2, 25, 0),
(2, 26, 0),
(2, 27, 1),
(2, 28, 2);

select * from users_features;

insert into activities_age_interval(activities_id, age_id) values 
(1, 2),
(1, 3),
(1, 4),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(3, 3),
(3, 4),
(4, 4),
(5, 2),
(5, 3),
(5, 4),
(6, 2),
(6, 3),
(6, 4),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(8, 3),
(8, 4),
(9, 3),
(9, 4),
(10, 3),
(10, 4),
(11, 3),
(11, 4),
(12, 1),
(12, 2),
(12, 3),
(12, 4),
(13, 1),
(13, 2),
(13, 3),
(13, 4)
;

select * from activities_age_interval;

insert into associations_areas(associations_id, areas_id) values
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1);

select * from associations_areas;
