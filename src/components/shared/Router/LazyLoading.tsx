import React, { lazy, Suspense } from "react";

const LazyLoading = (
    importFunc,
    { fallback = null, layoutComponent = null }
) => {
    const LazyComponent = lazy(importFunc);
    const Layout = layoutComponent;
    return (props) =>
        layoutComponent ? (
            <Layout>
                <Suspense fallback={fallback}>
                    <LazyComponent {...props} />
                </Suspense>
            </Layout>
        ) : (
            <Suspense fallback={fallback}>
                <LazyComponent {...props} />
            </Suspense>
        );
};

LazyLoading.defaultProps = {
    fallback: null,
    layoutComponent: null,
};

export default LazyLoading;
