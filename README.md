#### Obiettivo
Lo scopo di questo esercizio è creare un'applicazione utilizzando Create React App, TypeScript, React Router e Context API. L'applicazione consentirà all'utente di autenticarsi tramite un semplice bottone. Una volta autenticato, l'utente potrà visualizzare una lista di post e, cliccando su un post, navigare verso una pagina di dettaglio dove visualizzare il titolo, il corpo del post e tutti i suoi commenti.

#### Requisiti


2. **Autenticazione**
   - semplice meccanismo di autenticazione che modifichi lo stato di autenticazione dell'utente (es: un bottone "Login").
   - Context API per gestire lo stato di autenticazione e renderlo accessibile in tutta l'applicazione.
   - Impedire l'accesso alla pagina di login (`/login`) se l'utente è già autenticato.

3. **Routing**
   - Configura React Router con le seguenti rotte:
     - `/login` per la pagina di login.
     - `/` per la lista dei post (visibile solo agli utenti autenticati).
     - `/:idPost` per i dettagli del post (visibile solo agli utenti autenticati).

4. **Visualizzazione dei Post**
   - Utilizza l'API pubblica `jsonplaceholder` per ottenere i post e i commenti.
   - Nella pagina principale (`/`), mostra la lista dei post.
   - Quando un utente clicca su un post, naviga alla pagina di dettaglio del post (`/:idPost`) mostrando titolo, corpo e commenti relativi a quel post.

5. **Persistenza**
   - (Opzionale) Fai persistere lo stato di autenticazione dell'utente utilizzando `localStorage`.

6. **Note Aggiuntive**
   - Non è necessaria una UI elaborata, ma l'applicazione dovrebbe essere funzionale.
   - Assicurati di gestire eventuali errori nell'ottenimento dei dati dall'API.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
