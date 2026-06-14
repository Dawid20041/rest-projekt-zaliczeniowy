# REST Auction System

Projekt zaliczeniowy z przedmiotu **Tworzenie usług sieciowych REST**.

System umożliwia obsługę użytkowników, aukcji oraz ofert poprzez REST API. Użytkownicy są reprezentowani jako zasoby API, które można tworzyć, edytować, pobierać i usuwać. Aplikacja pozwala także na wystawianie aukcji oraz składanie ofert w ramach licytacji.

---

## Technologie

Projekt wykorzystuje następujące technologie:

- Node.js
- Express.js
- Prisma ORM
- SQLite
- Swagger / OpenAPI
- bcrypt

---

## Aktualnie zaimplementowane funkcjonalności

### Users

- tworzenie użytkownika
- pobieranie wszystkich użytkowników
- pobieranie użytkownika po ID
- edycja użytkownika
- usuwanie użytkownika
- hashowanie hasła przy użyciu bcrypt

### Auctions

- tworzenie aukcji
- pobieranie wszystkich aukcji
- pobieranie aukcji po ID
- edycja aukcji
- usuwanie aukcji
- powiązanie aukcji z właścicielem

### Bids

- składanie ofert do aukcji
- pobieranie historii ofert dla aukcji
- sprawdzanie, czy oferta jest wyższa od aktualnej ceny
- sprawdzanie, czy aukcja nadal trwa
- aktualizacja aktualnej ceny aukcji po złożeniu oferty
- przechowywanie historii ofert

### Swagger / OpenAPI

- dokumentacja endpointów
- możliwość testowania API z poziomu przeglądarki
- dostęp do wszystkich głównych operacji systemu

---

## Architektura

Projekt wykorzystuje architekturę warstwową:

```txt
Controller → Service → Repository → Database
```

### Opis warstw

- **Controller** – obsługa zapytań HTTP i odpowiedzi API
- **Service** – logika biznesowa aplikacji
- **Repository** – komunikacja z bazą danych
- **Database** – SQLite zarządzane przez Prisma ORM

---

## Struktura projektu

```txt
src
├── config
├── controllers
├── repositories
├── routes
├── services
└── app.js

prisma
└── schema.prisma

server.js
package.json
README.md
```

---

## Instalacja i uruchomienie

### 1. Sklonuj repozytorium

```bash
git clone <repo-url>
cd <repo-folder>
```

### 2. Zainstaluj zależności

```bash
npm install
```

### 3. Wygeneruj Prisma Client

```bash
npx prisma generate
```

### 4. Utwórz lokalną bazę danych SQLite

```bash
npx prisma db push
```

### 5. Uruchom aplikację

```bash
npm run dev
```

Serwer uruchomi się pod adresem:

```txt
http://localhost:3000
```

---

## Dokumentacja API

Swagger UI dostępny jest pod adresem:

```txt
http://localhost:3000/api-docs
```

Swagger umożliwia testowanie endpointów REST API bez użycia dodatkowych narzędzi, takich jak Postman.

---

## Endpointy API

### User

```http
POST   /user
GET    /user
GET    /user/:id
PUT    /user/:id
DELETE /user/:id
```

### Auctions

```http
POST   /auctions
GET    /auctions
GET    /auctions/:id
PUT    /auctions/:id
DELETE /auctions/:id
```

### Bids

```http
POST   /auctions/:id/bids
GET    /auctions/:id/bids
```

---

## Przykładowe dane testowe

### Utworzenie użytkownika

```json
{
  "username": "Dawid",
  "email": "dawid@test.com",
  "password": "123456"
}
```

### Utworzenie aukcji

```json
{
  "title": "Laptop Dell",
  "description": "Laptop gamingowy",
  "category": "Elektronika",
  "startingPrice": 1000,
  "currentPrice": 1000,
  "startDate": "2026-05-16T10:00:00.000Z",
  "endDate": "2026-06-20T10:00:00.000Z",
  "status": "ACTIVE",
  "ownerId": 1
}
```

### Złożenie oferty

```json
{
  "userId": 1,
  "amount": 1200
}
```

---

## Baza danych

Projekt wykorzystuje bazę danych **SQLite** zarządzaną przez **Prisma ORM**.

Plik bazy danych `dev.db` generowany jest lokalnie i nie powinien być commitowany do repozytorium.

### Główne encje

- User
- Auction
- Bid

### Relacje

- użytkownik może posiadać wiele aukcji
- użytkownik może składać wiele ofert
- aukcja może posiadać wiele ofert
- oferta należy do jednej aukcji i jednego użytkownika

---

## Przykładowy scenariusz działania

1. Utworzenie użytkownika przez `POST /user`.
2. Utworzenie aukcji przez `POST /auctions`.
3. Pobranie listy aukcji przez `GET /auctions`.
4. Złożenie oferty przez `POST /auctions/:id/bids`.
5. Sprawdzenie historii ofert przez `GET /auctions/:id/bids`.
6. Sprawdzenie, czy aktualna cena aukcji została zaktualizowana przez `GET /auctions/:id`.

---

## Branching Strategy

Projekt wykorzystuje następującą strategię branchy:

- `main` – stabilna wersja projektu
- `dev` – branch developerski
- `feature/*` – branche dla konkretnych funkcjonalności

---

## Autorzy

Dawid Żmudzki, Michał Zakowicz, Michał Słomiński, Dominik Stawicki
