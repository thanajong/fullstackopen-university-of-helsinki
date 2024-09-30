```mermaid
sequenceDiagram
    actor user
    participant browser
    participant server

    user ->> browser: user clicked 'Save' button
    browser ->> server: Req. POST '<exampleapp>/new_note_spa'
    server -->> browser: Res. 201 Created & JSON Data
    note over browser: browser successfully rendered a <br> new list of Notes in spa version
```