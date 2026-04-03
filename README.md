# REST Auction System

Projekt zaliczeniowy z przedmiotu **Tworzenie usług sieciowych REST**.

System umożliwia zarządzanie aukcjami internetowymi poprzez REST API. Użytkownicy mogą tworzyć konta, wystawiać przedmioty na aukcję oraz składać oferty.

## Technologie

Projekt wykorzystuje następujące technologie:

* Node.js
* Express.js
* Prisma ORM
* SQLite
* Swagger (OpenAPI)

## Funkcjonalności

System umożliwia:

* rejestrację użytkowników
* zarządzanie użytkownikami
* tworzenie aukcji
* przeglądanie dostępnych aukcji
* składanie ofert (licytację)
* przechowywanie historii ofert

## Architektura

Projekt wykorzystuje architekturę warstwową:

Controller → Service → Repository → Database

Opis warstw:

* **Controller** – obsługa zapytań HTTP
* **Service** – logika biznesowa
* **Repository** – komunikacja z bazą danych
* **Database** – SQLite zarządzane przez Prisma

## Struktura projektu

```
src
├ controllers
├ services
├ repositories
├ routes
├ config
└ app.js

prisma
├ schema.prisma
└ dev.db
```

## Instalacja

1. Sklonuj repozytorium:

```
git clone <repo-url>
cd <repo-folder>
```

2. Zainstaluj zależności:

```
npm install
```

3. Uruchom aplikację:

```
npm run dev
```

Serwer uruchomi się na:

```
http://localhost:3000
```

## Dokumentacja API

Swagger UI dostępny jest pod adresem:

```
http://localhost:3000/api-docs
```

Dokumentacja umożliwia testowanie endpointów REST API.

## Endpointy

### Users

```
POST /users
GET /users/:id
PUT /users/:id
DELETE /users/:id
GET /users
```

### Auctions

```
POST /auctions
GET /auctions
GET /auctions/:id
PUT /auctions/:id
DELETE /auctions/:id
```

### Bids

```
POST /auctions/:id/bids
```

## Baza danych

Projekt wykorzystuje **SQLite** jako bazę danych.
Plik bazy (`dev.db`) znajduje się w repozytorium w folderze:

```
prisma/dev.db
```

Baza danych jest zarządzana przez **Prisma ORM**.

Główne encje:

* User
* Auction
* Bid

Relacje:

* użytkownik może posiadać wiele aukcji
* aukcja może mieć wiele ofert
* użytkownik może składać wiele ofert

## Uruchomienie w trybie developerskim

```
npm run dev
```

## Autorzy

Projekt realizowany w ramach pracy zespołowej.
