set search_path = user_tables;

drop table if exists questions;
drop table if exists questions_categories;

create table questions_categories(
	questions_category_id serial,
	title varchar,
	constraint questions_categories_PK primary key(questions_category_id)
);

create table questions(
	questions_id serial,
	questions_category_id int,
	feature varchar,
	description varchar,
	constraint questions_PK primary key(questions_id)
);

alter table questions
add constraint questions_FK foreign key (questions_category_id) references questions_categories(questions_category_id);

insert into questions_categories(title) values 
('Hvordan liker du å trene?'),
('Hva slags konkurranseform liker du best?'),
('Hvilken aktivtetsarena liker du best?');

select * from questions_categories;


insert into questions(questions_category_id, feature, description) values 
(1, 'Styrkeøvelser', '(armhevinger, knebøy, situps, vekter osv)'),
(1, 'Spenst/hurtighet','(hopping, sprint, kasting osv)'),
(1, 'Utholdenhet','(gåturer, jogging, svømme langt, sykkeltur osv)'),
(1, 'Bevegelighet','(tøying, spagat, utstrekking osv)'),
(1, 'Balanse', '(gå på bom/line, stå på en fot, bygge store tårn, stå på tærne osv)'),
(1, 'Rytme', '(å danse/ bevegelse til musikk)'),
(1, 'Dynamikk','(bevege seg raskt og smidig i terrenget/over forskjellig hinder, tarzantikken, krabbing osv)'),
(1, 'Øye-fot koordinasjon','(sparke småstein, hinke paradis, trikse med føttene osv)'),
(1, 'Øye-hånd koordinasjon','(sjonglere, kaste på blink, ta imot, bygge ting med hendene osv)'),
(1, 'Romorientering','(løse labyrinter, gjøre saltoer osv)'),
(1, 'Presisjon/Perfeksjonisme','(repetisjon for å fininnstille, jobbe med detaljer, trene på små justeringer osv)'),
(1, 'Taktikk', '(legge planer, evaluere planer, jobbe med å velge smart, analysere situasjoner osv)'),
(1, 'Krav om selvstenighet','(sette i gang på egenhånd, finne på ting og øvelser, aktivisere seg selv, lage leker og aktiviteter osv)'),
(1, 'Høyt spenningsnivå','(gjøre nifse ting, gjøre ting som krever maks innsats, gjøre ting på grensen av kontroll osv)'),
(1, 'Kroppskontakt','(øvelser som innebærer å være helt inntil en annen, lekeslossing, pardans osv)'),
(1, 'Samspill','(aktiviteter som er helt avhengig av andre, gruppearbeid, rollefordeling osv)'),
(2, 'Estetikk/Kunst (Subjektivt)', '(der man blir bedømt ut fra utførelse av dommere)'),
(2, 'Kamp (vinner-taper)', '(to lag eller to personer kjemper mot hverandre og skal prøve å slå motstanderen)'),
(2, 'Meter, Kilo, Sekund (Rangering)', '(resultatet kan objektivt måles med måleverktøy og resultatet blir en liste fra best til dårligst)'),
(3, 'Utendørsaktiviteter', ''),
(3, 'Innendørsaktiviteter', ''),
(3, 'Aktiviteter på is', ''),
(3, 'Aktiviteter på snø', ''),
(3, 'Aktiviteter i og på vann', ''),
(3, 'Aktiviteter med dyr', ''),
(3, 'Aktiviteter med kjøretøy eller fartøy', '(motorfartøy, seilfartøy, båt, slede osv)'),
(3, 'Faste rammer og forutsigbarhet', '(fast, regelmessig og bestemt i forhold til tid, sted, tema, øvelser, trener, personer osv)'),
(3, 'Arenabundet','(aktiviteter som bare kan drives i helt spesielle baner, haller eller rom, med helt spesielt utstyr)');

select * from questions;

