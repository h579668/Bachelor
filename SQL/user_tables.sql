drop schema if exists user_tables cascade;
create schema user_tables;

set search_path = user_tables;

--drop table if exists categories;
--drop table if exists features;
--drop table if exists users_features;
--drop table if exists areas;
--drop table if exists associations;
--drop table if exists activities;
--drop table if exists activities_features;
--drop table if exists users_activities;
--drop table if exists age_intervals;
--drop table if exists activities_age_interval
--drop table if exists users_areas;
--drop table if exists associations_areas;


create table categories(
	categories_id serial,
	cat_name varchar,
	constraint categorys_PK primary key(categories_id)
);

create table features(
	features_id serial,
	categories_id int,
	feat_name varchar,
	constraint features_PK primary key(features_id)
	--constraint features_FK foreign key (categories_id) references features(features_id)
);


create table users(
	users_id serial,
	age_id int,
	constraint user_PK primary key(users_id)
	--constraint age_intervalls_FK foreign key (age_id) references age_intervalls(age_id),
	--constraint areas_FK foreign key (areas_id) references areas(areas_id)
);

create table users_features(
	users_features_id serial,
	users_id int,
	features_id int,
	us_fe_value int,
	constraint users_features_PK primary key(users_features_id)
	--constraint users_FK foreign key(users_id) references users(users_id),
	--constraint features_FK foreign key(features_id) references features(features_id)
	
);

create table areas(
	areas_id serial,
	country varchar,
	municipality varchar, 	--kommune
	county varchar,			--fylke
	constraint areas_PK primary key(areas_id)
);


create table associations(
	associations_id serial,
	ass_name varchar,
	constraint associations_PK primary key(associations_id)
	--constraint areas_FK foreign key(areas_id) references areas(areas_id)
);


create table activities(
	activities_id serial,
	associations_id int,
	act_name varchar,
	tel varchar,
	email varchar,
	act_comments varchar,
	constraint activities_PK primary key(activities_id)
	--constraint age_intervalls_FK foreign key(age_id) references age_intervalls(age_id),
	--constraint associations_FK foreign key(associations_id) references associations(associations_id)
);
create table activities_features (
	activities_features_id serial,
	activities_id int,
	features_id int,
	ac_fe_value int, --activities_feature_value
	constraint activities_features_PK primary key(activities_features_id)
	--constraint activities_FK foreign key (activities_id) references activities(activities_id),
	--constraint features_FK foreign key (features_id) references features(features_id);
);

create table users_activities (
	users_activities_id serial,
	users_id int,
	activities_id int,
	score int,
	hit int,	  --treff
	relevant int, --aktuell
	styrke int,
	constraint users_activities_PK primary key(users_activities_id)
	--constraint users_FK foreign key (users_id) references users(users_id),
	--constraint activities_FK foreign key (activities_id) references activities(activities_id);
);

create table age_intervals(
	age_id serial,
	age varchar,
	constraint age_intervals_PK primary key(age_id);
);

create table activities_age_interval(
	activities_age_interval_id serial,
	activities_id int,
	age_id int,
	constraint activities_age_interval_PK primary key(activities_age_interval_id)
	--constraint activities_FK foreign key (activities_id) references activities(activities_id),
	--constraint age_FK foreign key (age_id) references age_intervals(age_id);
);

create table users_areas(
	users_areas_id serial,
	users_id int,
	areaa_id int
	constraint users_areas_PK primary key(users_areas_id)
	--constraint users_FK foreign key (users_id) references users(users_id),
	--constraint areas_FK foreign key (areas_id) references areas(areas_id);
);

create table associations_areas(
	associations_areas_id serial,
	association_id int,
	areas_id int,
	constraint associations_areas_PK primary key(associations_areas_id)
	--constraint associations_FK foreign key (associations_id) references associations(associations_id),
	--constraint areas_FK foreign key (areas_id) references areas(areas_id);
);


alter table features
add constraint features_FK foreign key (categories_id) references features(features_id);

alter table users
--add constraint age_intervalls_FK foreign key (age_id) references age_intervalls(age_id),
add constraint areas_FK foreign key (areas_id) references areas(areas_id);

alter table users_features
add constraint users_FK foreign key(users_id) references users(users_id),
add constraint features_FK foreign key(features_id) references features(features_id);

alter table associations
--add constraint areas_FK foreign key(areas_id) references areas(areas_id);

alter table activities
--add constraint age_intervalls_FK foreign key(age_id) references age_intervalls(age_id),
add constraint associations_FK foreign key(associations_id) references associations(associations_id);

alter table activities_features
add constraint activities_FK foreign key (activities_id) references activities(activities_id),
add constraint features_FK foreign key (features_id) references features(features_id);

alter table users_activities
add constraint users_FK foreign key (users_id) references users(users_id),
add constraint activities_FK foreign key (activities_id) references activities(activities_id);

alter table activities_age_interval
add constraint activities_FK foreign key (activities_id) references activities(activities_id),
add constraint age_interval_FK foreign key (age_id) references age_interval(age_id);

alter table users_areas
add constraint users_FK foreign key (users_id) references users(users_id),
add constraint areas_FK foreign key (areas_id) references areas(areas_id);

alter table associations_areas
add constraint associations_FK foreign key (associations_id) references associations(associations_id),
add constraint areas_FK foreign key (areas_id) references areas(areas_id);

