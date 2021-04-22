set search_path = bruker_tabeller;

---AKTIVITET ----
--insert into aktivitet(navn) values
--('styrkeloft'),
--('kickboksing');


select * from aktivitet;

--- KATEGORI ---
insert into kategori(navn) values
('Fysiske egenskaper'),
('Koordinative egenskaper'),
('Psykologiske faktorer'),
('Konkurranse'),
('Rammer');

select * from kategori;

---- EGENSKAP -----
insert into egenskap(navn,kategori_id) values
('Styrke',1),
('Spenst/Hurtighet',1),
('Utholdenhet',1),
('Bevegelighet',1),
('Balanse',2),
('Rytme',2),
('Dynamikk',2),
('Øye-fot',2),
('Øye-hånd',2),
('Romorientering',2),
('Presisjon/Perfeksjonisme',3),
('Taktikk',3),
('Krav om selvstenighet',3),
('Høyt spenningsnivå',3),
('Kroppskontakt',3),
('Samspill',3),
('Estetikk/Kunst (Subjektivt)',4),
('Kamp (vinner-taper)',4),
('MSK (Meter, Sekund, Kilo) (Rangering)',4),
('Utendørs',5),
('Innendørs',5),
('Is',5),
('Sno',5),
('Vann',5),
('Dyr',5),
('Motor/fartøy',5),
('Faste rammer og forutsigbarhet',5),
('Arenabundet',5)
;

select * from egenskap;

