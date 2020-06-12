# NAPPR FIREBASE AUTH

Firebase React Auth Helper

## Install

```bash
yarn add @nappr/nappr-firebase-auth firebase
```

## Usage

```javascript
import 'firebase/auth';
import firebase from 'firebase/app';
import {
  FirebaseAuthProvider,
  FIREBASE_AUTH_LOCAL, // default
} from '@nappr/nappr-firebase-auth';

const Root = () => (
  <StrictMode>
    ...
    <FirebaseAuthProvider firebase={firebase} persistence={FIREBASE_AUTH_LOCAL}>
      ...
    </FirebaseAuthProvider>
    ...
  </StrictMode>
);
```
