import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);
    const persistor = persistStore(store);
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RouterProvider router={router} />
                    <ToastContainer />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
