# Expo Firebase Starter Template

An Expo starter template pre-configured with Firebase, i18n (Internationalization), and TypeScript.

## Features
- **Expo SDK 54**
- **TypeScript** configured
- **Firebase** (Auth, Firestore) ready
- **i18n** support (English & Turkish included)
- **React Navigation** (Stack)
- **Folder Structure** for scalable apps

## Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
# or
yarn install
```

### 2. Configuration
Open `src/config/firebaseConfig.ts` and replace the placeholder values with your own Firebase project configuration:
```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ...
};
```

### 3. Running the App
```bash
npx expo start
```

---

# Expo Firebase Başlangıç Şablonu

Expo, Firebase, i18n (Uluslararasılaştırma) ve TypeScript ile önceden yapılandırılmış bir başlangıç şablonu.

## Özellikler
- **Expo SDK 54**
- **TypeScript** yapılandırılmış
- **Firebase** (Auth, Firestore) hazır
- **i18n** desteği (İngilizce & Türkçe dahil)
- **React Navigation** (Stack)
- Ölçeklenebilir uygulamalar için **Klasör Yapısı**

## Başlarken

### 1. Kurulum
Depoyu klonlayın ve bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
```

### 2. Yapılandırma
`src/config/firebaseConfig.ts` dosyasını açın ve yer tutucu değerleri kendi Firebase proje ayarlarınızla değiştirin:
```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ...
};
```

### 3. Uygulamayı Çalıştırma
```bash
npx expo start
```
