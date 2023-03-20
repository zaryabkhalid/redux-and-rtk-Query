# Practising RTK Query and redux Toolkit

This code contains all main features of rtk query. it comes with the redux-toolkit package you can say that it is one of the main feature of redux-toolkit either you can use both at the same time or only one which one you need.

- ### Features of rtk-Query used in this project

  - API calls
  - Caching
  - Pagination
  - Polling
  - Transforming data before displaying on main component.

These are some of the main features which i used in this learning segment you can also read more RTK-Query by clicking on this link. [Redux-Tollkit & RTK-Query.](https://redux-toolkit.js.org/rtk-query/overview)

### Methods used in this project

- #### GET
- #### POST
- #### PATCH
- #### DELETE

## API used for this project is JSON Server Data

You can run Json server file by writing this command in terminal.

> **json-server --watch database/json.db --port 3005**

## ENDPOINTS Includes in this project are as fellow

1. GET ALL POST
   - Request Method: **GET**
   - http://localhost:3005/posts
2. GET SINGLE POST BY ID
   - Request Method: **GET**
   - http://localhost:3005/posts/2
3. ADD NEW POST
   - Request Method: **POST**
   - http://localhost:3005/posts
4. EDIT POST USING ID
   - Request Method: **PATCH**
   - http://localhost:3005/posts/102
5. DELETE POST USING ID
   - Request Method **DELETE**
   - http://localhost:3005/posts/105

---

## Challange Task

Clone this repo add some data in database **JSON** file. Perform all **CRUD** operations.
