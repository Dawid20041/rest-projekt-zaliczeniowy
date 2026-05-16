# REST Auction System

Projekt zaliczeniowy z przedmiotu **Tworzenie usług sieciowych REST**.

System umożliwia zarządzanie aukcjami internetowymi poprzez REST API. Użytkownicy mogą tworzyć konta, wystawiać przedmioty na aukcję oraz składać oferty.

---

# Technologie

Projekt wykorzystuje następujące technologie:

- Node.js
- Express.js
- Prisma ORM
- SQLite
- Swagger / OpenAPI

---

# Funkcjonalności

Aktualnie zaimplementowano:

- zarządzanie użytkownikami
- REST API
- dokumentację Swagger
- architekturę warstwową
- integrację z bazą danych SQLite

Planowane funkcjonalności:

- tworzenie aukcji
- przeglądanie aukcji
- składanie ofert (licytacja)
- historia ofert
- filtrowanie aukcji

---

# Architektura

Projekt wykorzystuje architekturę warstwową:

Controller → Service → Repository → Database

Opis warstw:

- **Controller** – obsługa zapytań HTTP
- **Service** – logika biznesowa
- **Repository** – komunikacja z bazą danych
- **Database** – SQLite zarządzane przez Prisma ORM

---

# Struktura projektu

```txt
src
├── controllers
├── services
├── repositories
├── routes
├── config
└── app.js

prisma
└── schema.prisma

server.js
Instalacja
1. Sklonuj repozytorium
git clone <repo-url>
cd <repo-folder>
2. Zainstaluj zależności
npm install
3. Wygeneruj Prisma Client
npx prisma generate
4. Utwórz bazę danych
npx prisma db push
5. Uruchom aplikację
npm run dev

Serwer uruchomi się pod adresem:

http://localhost:3000
Dokumentacja API

Swagger UI dostępny jest pod adresem:

http://localhost:3000/api-docs

Swagger umożliwia testowanie endpointów REST API bez użycia dodatkowych narzędzi.

Endpointy
User
POST /user
GET /user
GET /user/:id
PUT /user/:id
DELETE /user/:id
Auctions (planowane)
POST /auctions
GET /auctions
GET /auctions/:id
PUT /auctions/:id
DELETE /auctions/:id
Bids (planowane)
POST /auctions/:id/bids
Baza danych

Projekt wykorzystuje bazę danych SQLite zarządzaną przez Prisma ORM.

Główne encje:

User
Auction
Bid

Relacje:

użytkownik może posiadać wiele aukcji
aukcja może posiadać wiele ofert
użytkownik może składać wiele ofert
Branching Strategy

Projekt wykorzystuje następującą strategię branchy:

main – stabilna wersja projektu
dev – branch developerski
feature/* – branche funkcjonalności
Uruchomienie w trybie developerskim
npm run dev
Autorzy

Projekt realizowany w ramach pracy zespołowej.