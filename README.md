# amazona-app (Amazon Clone)

Create React App

    npm create-reat-app frontend
    npm start
    Remove unused files
    copy index.html content to App.js
    copy style.css content to index.css
    replace class with className

Build Product Screen

    Install react-router-dom
    Use BrowserRouter and Route for Home Screen
    Create HomeScreen.js
    Add product list code there
    Create ProductScreen.js
    Add new Route from product details to App.js
    Create 3 column for product image, info and action

Create Node.JS Server

    run npm init in root folder
    Update package.json set type: module
    Add .js to imports
    npm install express
    create server.js
    add start command as node backend/server.js
    require express
    create route for / return backend is ready.
    move products.js from frontend to backend
    create route for /api/products
    return products
    run npm start

Load Products From Backend

1. edit HomeScreen.js
2. define products, loading and error.
3. create useEffect
4. define async fetchData and call it
5. install axios
6. get data from /api/products
7. show them in the list
8. create Loading Component
9. create Message Box Component
10. use them in HomeScreen

Install ESlint For Code Linting

1. install VSCode eslint extension
2. npm install -D eslint
3. run ./node_modules/.bin/eslint --init
4. Create ./frontend/.env
5. Add SKIP_PREFLIGHT_CHECK=true

Add Redux to Home Screen

1) npm install redux react-redux
2) Create store.js
3) initState= {products:[]}
4) reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
5) export default createStore(reducer, initState)
6) Edit HomeScreen.js
7) shopName = useSelector(state=>state.products)
8) const dispatch = useDispatch()
9) useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data})
10) Add store to index.js

Add Redux to Product Screen

1) create product details constants, actions and reducers
2) add reducer to store.js
3) use action in ProductScreen.js
4) add /api/product/:id to backend api
