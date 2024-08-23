<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. clonar el rchivo __.env.template__ y renombrar la copia a __.env__

6. llenar las variables de entorno definidas en .env
   
7. ejecutar la aplicacion en dev:
```
yarn start:dev
```
8. Reconstruir BD con el seed
```
http://localhost:3002/api/v2/seed
```

## Stack usado
* MongoDB
* Nest


