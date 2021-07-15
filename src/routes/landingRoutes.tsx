import React from "react";
import { LandingUrls } from "../constants/urls";
import ProgressBar from "react-topbar-progress-indicator";
import LandingLayout from "../layouts/LandingLayout";
import LazyLoading from "../components/shared/Router/LazyLoading";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: LandingLayout,
};

const landingRoutes = [
    {
        path: LandingUrls.HOME,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/Home"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.ABOUT,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/About"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.CONTACT,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/Contact"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.PRICING,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/Pricing"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.REGISTER,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/Auth/Register"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.LOGIN,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/Auth/Login"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.FORGET,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/Auth/Forget"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.TERMS,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/Terms"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.POLICY,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/Policy"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.FAQ,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/Faq"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.PAYMENT_STATUS,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Landing/Payment"),
            suspenseOption
        ),
    },
    {
        path: LandingUrls.STORE_SELECT,
        layout: LandingLayout,
        meta: { requiresAuth: true },
        component: LazyLoading(
            () => import("../pages/Landing/Auth/Store"),
            suspenseOption
        ),
    },
];

export default landingRoutes;
