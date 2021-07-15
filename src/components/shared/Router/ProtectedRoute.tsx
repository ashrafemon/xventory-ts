import React from "react";
import { Redirect, Route } from "react-router-dom";
import { LandingUrls } from "../../../constants/urls";

const ProtectedRoute = ({
    component,
    isAuthenticate,
    currentUser,
    ...rest
}: any) => {
    const routeComponent = (props: any) => {
        // console.log("Protected", props.location);

        if (isAuthenticate) {
            return React.createElement(component, props);
        } else {
            return (
                <Redirect
                    to={{
                        pathname: LandingUrls.LOGIN,
                        state: { from: props.location },
                    }}
                />
            );
        }
    };

    return <Route {...rest} render={routeComponent} />;
};
export default ProtectedRoute;
