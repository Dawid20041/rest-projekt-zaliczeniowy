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

# Aktualnie zaimplementowane funkcjonalności

## Users

- tworzenie użytkownika
- pobieranie wszystkich użytkowników
- pobieranie użytkownika po ID
- edycja użytkownika
- usuwanie użytkownika
- hashowanie haseł przy użyciu bcrypt

## Auctions

- tworzenie aukcji
- pobieranie wszystkich aukcji
- pobieranie aukcji po ID
- edycja aukcji
- usuwanie aukcji

## Swagger / OpenAPI

- dokumentacja endpointów
- możliwość testowania API z poziomu Swagger UI

---

# Planowane funkcjonalności

- składanie ofert (licytacja)
- historia ofert
- filtrowanie aukcji
- sortowanie aukcji
- autoryzacja JWT
- frontend aplikacji

---

# Architektura

Projekt wykorzystuje architekturę warstwową:

```txt
Controller → Service → Repository → Database
```

## Opis warstw

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
```

---

# Instalacja

## 1. Sklonuj repozytorium

```bash
git clone <repo-url>
cd <repo-folder>
```

## 2. Zainstaluj zależności

```bash
npm install
```

## 3. Wygeneruj Prisma Client

```bash
npx prisma generate
```

## 4. Utwórz bazę danych

```bash
npx prisma db push
```

## 5. Uruchom aplikację

```bash
npm run dev
```

Serwer uruchomi się pod adresem:

```txt
http://localhost:3000
```

---

# Dokumentacja API

Swagger UI dostępny jest pod adresem:

```txt
http://localhost:3000/api-docs
```

Swagger umożliwia testowanie endpointów REST API bez użycia dodatkowych narzędzi.

---

# Endpointy

## User

```http
POST /user
GET /user
GET /user/:id
PUT /user/:id
DELETE /user/:id
```

## Auctions

```http
POST /auctions
GET /auctions
GET /auctions/:id
PUT /auctions/:id
DELETE /auctions/:id
```

## Bids (planowane)

```http
POST /auctions/:id/bids
GET /auctions/:id/bids
```

---

# Baza danych

Projekt wykorzystuje bazę danych **SQLite** zarządzaną przez **Prisma ORM**.

## Główne encje

- User
- Auction
- Bid

## Relacje

- użytkownik może posiadać wiele aukcji
- aukcja może posiadać wiele ofert
- użytkownik może składać wiele ofert

---

# Branching Strategy

Projekt wykorzystuje następującą strategię branchy:

- `main` – stabilna wersja projektu
- `dev` – branch developerski
- `feature/*` – branche funkcjonalności

---

# Uruchomienie w trybie developerskim

```bash
npm run dev
```

---

# Autorzy

Projekt realizowany w ramach pracy zespołowej.