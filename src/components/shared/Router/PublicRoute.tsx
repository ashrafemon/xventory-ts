import React from "react";
import { Redirect, Route } from "react-router-dom";
import { DashboardUrls, LandingUrls } from "../../../constants/urls";

const PublicRoute = ({
    component,
    isAuthenticate,
    selectedStore,
    currentUser,
    ...rest
}: any) => {
    const routeComponent = (props: any) => {
        // console.log(props.location);

        if (isAuthenticate) {
            if (currentUser && currentUser.active_store_id) {
                let path = DashboardUrls.HOME.replace(
                    ":storeId",
                    currentUser.active_store_id
                );
                return (
                    <Redirect
                        to={{ pathname: path, state: { from: props.location } }}
                    />
                );
            } else {
                return <Redirect to={{ pathname: LandingUrls.STORE_SELECT }} />;
            }
        } else {
            return React.createElement(component, props);
        }
    };
    return <Route {...rest} render={routeComponent} />;
};
export default PublicRoute;
