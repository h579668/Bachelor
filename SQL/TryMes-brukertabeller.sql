drop schema if exists bruker_tabeller cascade;
create schema bruker_tabeller;

set search_path = bruker_tabeller;

--drop table if exists bruker;

create table bruker(
	bruker_id serial,
	aktivitet_id int,
	alder_id int,
	resultat_id int, 
	omraade_id int,
	constraint bruker_PK primary key(bruker_id)
	--constraint aktivitet_FK foreign key (aktivitet_id) references aktivitet(aktivitet_id),
	--constraint aldersgruppe_FK foreign key (alder_id) references aldersgruppe(alder_id),
	--constraint resultat_FK foreign key (resultat_id) references resultat(resultat_id),
	--constraint omraade_FK foreign key (omraade_id) references omraade(omraade_id)
);

create table omraade(
	omraade_id serial,
	land varchar,
	kommune varchar,
	fylke varchar,
	constraint omraade_PK primary key(omraade_id)
);

create table egenskap(
	egenskap_id serial,
	navn varchar,
	verdi int,
	kategori_id int,
	constraint egenskap_PK primary key(egenskap_id)
	--constraint kategori_FK foreign key (kategori_id) references kategori(kategori_id)
);

create table bruker_egenskap(
	bruker_egenskap_id serial,
	bruker_id int,
	egenskap_id int,
	bruker_verdi int,
	constraint bruker_egenskap_PK primary key(bruker_egenskap_id)
	--constraint bruker_FK foreign key(bruker_id) references bruker(bruker_id),
	--constraint egenskap_FK foreign key(egenskap_id) references egenskap(egenskap_id)
	
);

create table forbund(
	forbund_id serial,
	navn varchar,
	tlf int,
	epost varchar,
	kommentar varchar,
	omraade_id int,
	constraint forbund_PK primary key(forbund_id)
	--constraint omraade_FK foreign key(omraade_id) references omraade(omraade_id)
);

create table aktivitet(
	aktivitet_id serial,
	navn varchar,
	egenskap_id int,
	alder_id int,
	forbund_id int,
	constraint aktivitet_PK primary key(aktivitet_id)
	--constraint egenskap_FK foreign key(egenskap_id) references egenskap(egenskap_id),
	--constraint aldersgruppe_FK foreign key(alder_id) references aldersgruppe(alder_id),
	--constraint forbund_FK foreign key(forbund_id) references forbund(forbund_id)
);

create table aldersgruppe(
	alder_id serial,
	alder int,
	constraint aldersgruppe_PK primary key(alder_id)
);

create table kategori(
	kategori_id serial,
	navn varchar,
	constraint kategori_PK primary key(kategori_id)
);

create table resultat (
	resultat_id serial,
	aktivitet_id int,
	skaare int,
	treff int,
	aktuell int,
	styrke int,
	constraint resultat_PK primary key(resultat_id)
);

alter table bruker
add constraint aktivitet_FK foreign key (aktivitet_id) references aktivitet(aktivitet_id),
add constraint aldersgruppe_FK foreign key (alder_id) references aldersgruppe(alder_id),
add constraint resultat_FK foreign key (resultat_id) references resultat(resultat_id),
add constraint omraade_FK foreign key (omraade_id) references omraade(omraade_id);

alter table egenskap
add constraint kategori_FK foreign key (kategori_id) references kategori(kategori_id);

alter table bruker_egenskap
add constraint bruker_FK foreign key(bruker_id) references bruker(bruker_id),
add constraint egenskap_FK foreign key(egenskap_id) references egenskap(egenskap_id);

alter table forbund
add constraint omraade_FK foreign key(omraade_id) references omraade(omraade_id);

alter table aktivitet
add constraint egenskap_FK foreign key(egenskap_id) references egenskap(egenskap_id),
add constraint aldersgruppe_FK foreign key(alder_id) references aldersgruppe(alder_id),
add constraint forbund_FK foreign key(forbund_id) references forbund(forbund_id);


