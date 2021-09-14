create table pizza_orders(
	id serial not null primary key,
	status text not null,
    amount decimal not null
);