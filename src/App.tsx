import { CssBaseline } from "@material-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataLoading from "./components/shared/DataLoading";
import ProtectedRoute from "./components/shared/Router/ProtectedRoute";
import PublicRoute from "./components/shared/Router/PublicRoute";
import routes from "./routes";
import { logout, setCurrentUser } from "./store/actions/authAction";
import tokenDecoder from "./utils/jwt";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const { loading } = useSelector((state: RootStateOrAny) => state.site);
    const { isAuthenticate, currentUser } = useSelector(
        (state: RootStateOrAny) => state.auth
    );
    const { selectedStore } = useSelector(
        (state: RootStateOrAny) => state.stores
    );
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const { myDecodedToken, isMyTokenExpired } = tokenDecoder(token);
            console.log(myDecodedToken, isMyTokenExpired);
            if (!isMyTokenExpired) {
                dispatch(
                    setCurrentUser({
                        currentUser: myDecodedToken,
                        isTokenExpire: isMyTokenExpired,
                        isAuthenticate: true,
                        token,
                    })
                );
            } else {
                dispatch(logout());
            }
        }
    }, [dispatch]);

    return (
        <BrowserRouter>
            <CssBaseline />
            <ToastContainer />
            {loading && <DataLoading />}
            <Switch>
                {routes.map((item, i) =>
                    item.meta.requiresAuth ? (
                        <ProtectedRoute
                            isAuthenticate={isAuthenticate}
                            currentUser={currentUser}
                            selectedStore={selectedStore}
                            key={i}
                            path={item.path}
                            exact
                            component={item.component}
                        />
                    ) : (
                        <PublicRoute
                            isAuthenticate={isAuthenticate}
                            selectedStore={selectedStore}
                            currentUser={currentUser}
                            key={i}
                            path={item.path}
                            exact
                            component={item.component}
                        />
                    )
                )}
                {/*{routes.map((route, i) => (*/}
                {/*    <Route*/}
                {/*        key={i}*/}
                {/*        path={route.path}*/}
                {/*        exact*/}
                {/*        component={route.component}*/}
                {/*    />*/}
                {/*))}*/}
            </Switch>
        </BrowserRouter>
    );
};

export default App;
