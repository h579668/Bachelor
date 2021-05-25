set search_path = user_tables;

drop table if exists questions;

create table questions(
	questions_id serial,
	question_category varchar,
	question varchar,
	constraint questions_PK primary key(questions_id)
);

insert into questions(question_category, question) values 
	('Styrkeøvelser', '(armhevinger, knebøy, situps, vekter osv)'),
	('Spenst/hurtighet','(hopping, sprint, kasting osv)'),
	('Utholdenhet','(gåturer, jogging, svømme langt, sykkeltur osv)'),
	('Bevegelighet','(tøying, spagat, utstrekking osv)'),
	('Balanse', '(gå på bom/line, stå på en fot, bygge store tårn, stå på tærne osv)'),
	('Rytme', '(å danse/ bevegelse til musikk)'),
	('Dynamikk','(something)'),
	('Øye-fot','(something)'),
	('Øye-hånd','(something)'),
	('Romorientering','(something)'),
	('Presisjon/Perfeksjonisme','(something)'),
	('Taktikk', '(something)'),
	('Krav om selvstenighet','(gjøre ting på egenhånd)'),
	('Høyt spenningsnivå','(something)'),
	('Kroppskontakt','(å være borti andre eller andre kommer borti deg)'),
	('Samspill','(jobbe sammen med andre i en gruppe)'),
	('Estetikk/Kunst (Subjektivt)', '(something)'),
	('Kamp (vinner-taper)', '(er det viktig å kunne vinne?)'),
	('MSK (Meter, Sekund, Kilo) (Rangering)', '(something)'),
	('Utendørs', '(gjøre aktivitetene ute)'),
	('Innendørs', '(gjøre aktivitetene inne)'),
	('Is', '(aktiviteter på is, som for eksempel skøyte og curling)'),
	('Sno', '(aktiviteter i snøen som aking og ski)'),
	('Vann', '(aktiviter i vann som for eksempel svømming)'),
	('Dyr', '(aktiviteter som innebære dyr som hester)'),
	('Motor/fartøy', '(something)'),
	('Faste rammer og forutsigbarhet', '(something)'),
	('Arenabundet','(something)');
