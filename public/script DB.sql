

CREATE DATABASE IF NOT EXISTS covid_force;

USE covid_force;

CREATE TABLE Semaforo(
    id_semaforo int AUTO_INCREMENT primary key,
    color VARCHAR(20) NOT NULL,
    por_zona boolean, 
    por_contacto boolean,
    por_sintoma boolean,
	id_cuarentena text
);

CREATE TABLE Usuario(
    cedula VARCHAR(10) primary key not null,
    email varchar(50) not null,
    nombre varchar(20) not null,
    apellido VARCHAR(20) not null,
    fecha_nacimiento DATE NOT NULL,
    contrasena VARCHAR(20) not null,
    direccion VARCHAR(80),
    id_semaforo int,
    FOREIGN KEY (id_semaforo) REFERENCES Semaforo (id_semaforo)        
);

insert into semaforo(id_semaforo,color) values (1,"verde");
insert into semaforo(id_semaforo,color) values (2,"amarillo");
insert into semaforo(id_semaforo,color) values (3,"rojo");


select * from semaforo;
select * from usuario;




