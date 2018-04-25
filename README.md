# Sample firebase backend.

## Included:

- Sign up
- Sign in
- Add a feedback to a protected endpoint
- Get all feedbacks from protected endpoint

## Requisites for development:

- Firebase env `https://firebase.google.com/docs/functions/get-started`
- Other resource `https://firebase.google.com/docs/reference/rest/auth/`
- Add project, configure first the Firebase env `https://console.firebase.google.com/`

## Devel flow:

- Install `npm install -g firebase-tools`
- Modify any function on `functions/index.js`
- Deploy changes using: `firebase deploy --only functions`