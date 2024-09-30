```mermaid
sequenceDiagram
    actor user
    participant browser
    participant server

    user ->> browser: user clicked 'Save' on browser
    browser ->> server: Req. POST '<exampleapp>/new_note'
    activate server
    server -->> browser: Res. 302 Found & HTML Document
    deactivate server
    note right of browser: Response said to perform a new GET Req. <br> to Location '<exampleapp>/notes' 
    browser ->> server: Req. GET '<exampleapp>/notes'
    activate server
    server -->> browser: Res. 200 OK & HTML Document
    deactivate server
    note over browser: display notes HTML document
    note right of browser: HTML declared a link tag to '<exampleapp>/main.css'
    browser ->> server: Req. GET '<exampleapp>/main.css'
    activate server
    server -->> browser: Res. 200 OK & CSS File
    deactivate server
    note over browser: apply the styles from main.css
    note right of browser: HTML declared a script tag to '<exampleapp>/main.js'
    browser ->> server: Req. GET '<exampleapp>/main.js'
    activate server
    server -->> browser: Res. 200 OK & JS File
    deactivate server
    note over browser: run the scripts from main.js
    note right of browser: xhttp API Object in the file main.js said to send <br> request GET to '<exampleapp>/data.json'
    browser ->> server: Req. GET '<exampleapp>/data.json'
    activate server
    server -->> browser: Res. 200 OK & JSON Data
    deactivate server
    note over user,browser: browser successfully rendererd a <br> new list of Notes on HTML Document
```