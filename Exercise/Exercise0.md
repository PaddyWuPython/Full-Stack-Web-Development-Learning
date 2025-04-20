## Exercise 0.4
sequenceDiagrarm
    participant browser
    participant server

    Note right of the browser: input new note
    Note right of the browser: User click the "Save" button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of the server: The POST request contains the note content as form data
    server->>browser: HTTP redirect response(302) to /notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: JavaScript fetches the notes from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server->>browser: update JSON including the new note
    deactivate server

    Note right of browser: Browser re-renders the notes including the new one

## Exercise 0.5
```
Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.
```
sequenceDiagrarm
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript file for SPA
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON data containing the notes
    deactivate server

## Exercise 0.6
```
Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.
```
sequenceDiagrarm
    participant browser
    participant server

    Note right of the browser: input new note
    Note right of the browser: User click the "Save" button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of the server: {content: "single page app does not reload the whole page",date: "2019-05-25T15:15:59.905Z"} 
    server->>browser: 201 Created
    deactivate server

    Note right of the browser: add new note to local and update DOM