# 🌍 Multilingual Routing for Next.js

This project provides an internationalized routing setup using `next-intl`, supporting multiple domains and locales.

## 🚀 Features

- 🌎 Multi-domain internationalization
- 🔄 Automatic locale detection and routing
- ⚙️ Configurable domain settings
- 🏗️ Supports English (`en-GB`), Spanish (`es-ES`), and German (`de-DE`)

---

## 🌎 Supported Domains & Locales

| Domain        | Default Locale | Available Locales |
| ------------- | -------------- | ----------------- |
| `sitback.com` | `en-GB`        | `en-GB`, `de-DE`  |
| `sitback.es`  | `es-ES`        | `es-ES`           |

---

## 🛠 Setup

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ DEV Configure Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=3000
ES_HOST=sitback.es
EN_HOST=sitback.com
```

This ensures correct domain and locale configuration.

### 3️⃣ Run Development Server

```sh
npm run dev
```

By default, the server runs on

```
http://localhost:3000
```

Locally testing the Domain names:

For Windows :
Open your text editor in Administrator mode.
In the text editor, open

```
C:\Windows\System32\drivers\etc\hosts.
```

Add the local host IP Address and the hostname.

```
Example:
127.0.0.1 sitback.es
127.0.0.1 sitback.com
```

Save the changes.

For Linux :
Open terminal.
Use the nano command line text editor or a different one you have available to
open the hosts file. The command with nano is as follows (the command will
require your Linux user password)

```
sudo nano /etc/hosts
```

Add the appropriate changes in the hosts file.

```
Example:
127.0.0.1 sitback.es
127.0.0.1 sitback.com
```

Use the Control and 'X' key combination to save the changes.

### Now server accessable by

```
http://sitback.com:3000
http://sitback.com:3000/de
http://sitback.es:3000
```

## 🔗 API Endpoints

| Endpoint | English (`en-GB`) | Spanish (`es-ES`) | German (`de-DE`) |
| -------- | ----------------- | ----------------- | ---------------- |
| `/home`  | `/home`           | `/inicio`         | `/heim`          |
| `/about` | `/about`          | `/sobre`          | `/um`            |

All paths are automatically mapped to their respective locales.

---

## 📌 User Cases

### ✅ **1. Accessing Different Languages**

- Visiting `http://sitback.com:3000/` will show the English version.
- Visiting `http://sitback.es:3000/` will show the Spanish version.
- Visiting `http://sitback.com:3000/de` will show the German version.

### ✅ **2. Domain-Based Redirection**

- If a user visits `sitback.es:3000`, the default language will be `es-ES`.
- If a user visits `sitback.com:3000`, the default language will be `en-GB`, but `de-DE` is also available by path `/de`.

### ✅ **3. Locale Prefix Behavior**

- `http://sitback.com:3000/about` → English version (`en-GB`)
- `http://sitback.com:3000/de/um` → German version (`de-DE`)
- `http://sitback.es:3000/sobre` → Spanish version (`es-ES`)

### ✅ **4. Locale Prefix Unexpected Behavior (mixup of locales)**

#### /home

- `http://sitback.es:3000/home` → Redirect to `http://sitback.es:3000/inicio`
- `http://sitback.com:3000/es/home` → Redirect to `http://sitback.es:3000/inicio`
- `http://sitback.com:3000/de/home` → Redirect to `http://sitback.com:3000/de/heim`
- `http://sitback.com:3000/heim` → Redirect to `http://sitback.com:3000/home`
- `http://sitback.com:3000/inicio` → Redirect to `http://sitback.com:3000/home`

#### /about

- `http://sitback.es:3000/about` → Redirect to `http://sitback.es:3000/sobre`
- `http://sitback.com:3000/es/about` → Redirect to `http://sitback.es:3000/sobre`
- `http://sitback.com:3000/de/about` → Redirect to `http://sitback.com:3000/de/um`
- `http://sitback.com:3000/um` → Redirect to `http://sitback.com:3000/about`
- `http://sitback.com:3000/sobre` → Redirect to `http://sitback.com:3000/about`

---
