drop schema if exists bruker_tabeller cascade;
create schema bruker_tabeller;

set search_path = bruker_tabeller;

create table bruker(
	brId serial,
	brAlder int,
	constraint bruker_PK primary key(brId)
	--constraint aldersgruppe_FK foreign key (brAlder) references aldersgruppe(alID)
);

create table omraade(
	omId serial,
	land varchar,
	kommune varchar,
	fylke varchar,
	constraint omraade_PK primary key(omId)
);

create table egenskap(
	egId serial,
	egNavn varchar,
	egVerdi int,
	egKategoriId int,
	constraint egenskap_PK primary key(egId)
	--constraint kategori_FK foreign key (egKategoriId) references (kaId)
);

create table bruker_egenskap(
	brEgId serial,
	egId int,
	brVerdi int,
	constraint bruker_egenskap_PK primary key(brEgId)
	--constraint egenskap_FK foreign key(egId) references (egId),
	--constraint bruker_FK foreign key(brVerdi) references(brId)
	
);

create table forbund(
	foId serial,
	foNavn varchar,
	tlf int,
	epost varchar,
	kommentar varchar,
	constraint forbund_PK primary key(foId)
);

create table aktivitet(
	akId serial,
	akNavn varchar,
	egenskap_id int,
	forbund_id int,
	alder_id int,
	constraint aktivitet_PK primary key(akId)
);

create table aldersgruppe(
	alId serial,
	alder int,
	constraint aldersgruppe_PK primary key(alId)
);

create table kategori(
	kaId serial,
	kaNavn varchar,
	constraint kategori_PK primary key(kaId)
);

alter table bruker
add constraint bruker_FK 
foreign key (brAlder) references aldersgruppe(alID);

alter table egenskap
add constraint kategori_FK 
foreign key (egKategoriId) references kategori(kaId);

alter table bruker_egenskap
add constraint egenskap_FK 
foreign key(egId) references egenskap(egId),
add constraint bruker_FK 
foreign key(brVerdi) references bruker(brId);


