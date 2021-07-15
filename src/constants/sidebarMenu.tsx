import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
import AirportShuttleRoundedIcon from "@material-ui/icons/AirportShuttleRounded";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import ListIcon from "@material-ui/icons/List";
import StoreIcon from "@material-ui/icons/Store";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import BusinessIcon from "@material-ui/icons/Business";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PaymentIcon from "@material-ui/icons/Payment";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import CategoryIcon from "@material-ui/icons/Category";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { DashboardUrls } from "./urls";

const sidebarMenu = [
    {
        name: "Dashboard",
        icon: <DashboardIcon />,
        path: DashboardUrls.HOME,
    },
    {
        name: "Point of Sell",
        icon: <MoveToInboxIcon />,
        path: DashboardUrls.SELL,
    },
    {
        name: "Sell",
        icon: <LocalOfferOutlinedIcon />,
        path: "/",
        items: [
            { name: "New Item", icon: <DashboardIcon />, path: "" },
            { name: "New Item 2", icon: <DashboardIcon />, path: "" },
            { name: "New Item 3", icon: <DashboardIcon />, path: "" },
        ],
    },
    {
        name: "Quotation",
        icon: <FavoriteBorderOutlinedIcon />,
        path: "/",
        items: [
            {
                name: "Create Quotation",
                icon: <AddCircleOutlineIcon />,
                path: DashboardUrls.QUOTATION.create,
            },
            {
                name: "Quotation List",
                icon: <ListIcon />,
                path: DashboardUrls.QUOTATION.index,
            },
        ],
    },
    {
        name: "Installment",
        icon: <EqualizerOutlinedIcon />,
        path: "/",
        items: [
            { name: "New Item", icon: <DashboardIcon />, path: "" },
            { name: "New Item 2", icon: <DashboardIcon />, path: "" },
            { name: "New Item 3", icon: <DashboardIcon />, path: "" },
        ],
    },
    {
        name: "Purchase",
        icon: <ShoppingCartOutlinedIcon />,
        path: "/",
        items: [
            {
                name: "Create Purchase",
                icon: <AddCircleOutlineIcon />,
                path: DashboardUrls.PURCHASE.create,
            },
            {
                name: "Purchase List",
                icon: <ListIcon />,
                path: DashboardUrls.PURCHASE.index,
            },
        ],
    },
    {
        name: "Stock Transfer",
        icon: <DashboardIcon />,
        path: "/",
    },
    {
        name: "Product",
        icon: <StarBorderRoundedIcon />,
        path: "/",
        items: [
            {
                name: "Products",
                icon: <StarBorderRoundedIcon />,
                path: "",
                items: [
                    {
                        name: "Create Product",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.PRODUCT.PRODUCTS.create,
                    },
                    {
                        name: "Product List",
                        icon: <ListIcon />,
                        path: DashboardUrls.PRODUCT.PRODUCTS.index,
                    },
                ],
            },
            {
                name: "Categories",
                icon: <CategoryIcon />,
                path: "",
                items: [
                    {
                        name: "Create Category",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.PRODUCT.CATEGORIES.create,
                    },
                    {
                        name: "Category List",
                        icon: <ListIcon />,
                        path: DashboardUrls.PRODUCT.CATEGORIES.index,
                    },
                ],
            },
        ],
    },
    {
        name: "Customer",
        icon: <PeopleOutlineRoundedIcon />,
        path: "/",
        items: [
            {
                name: "Create Customer",
                icon: <AddCircleOutlineIcon />,
                path: DashboardUrls.CUSTOMER.create,
            },
            {
                name: "Customer List",
                icon: <ListIcon />,
                path: DashboardUrls.CUSTOMER.index,
            },
        ],
    },
    {
        name: "Supplier",
        icon: <AirportShuttleRoundedIcon />,
        path: "/",
        items: [
            {
                name: "Create Supplier",
                icon: <AddCircleOutlineIcon />,
                path: DashboardUrls.SUPPLIERS.create,
            },
            {
                name: "Supplier List",
                icon: <ListIcon />,
                path: DashboardUrls.SUPPLIERS.index,
            },
        ],
    },
    {
        name: "Accounting",
        icon: <AccountBalanceRoundedIcon />,
        path: "/",
    },
    {
        name: "Expenditure",
        icon: <DashboardIcon />,
        path: "/",
        items: [
            {
                name: "Expenses",
                icon: <DashboardIcon />,
                path: "/",
                items: [
                    {
                        name: "Create Expense",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.EXPENDITURE.EXPENSES.create,
                    },
                    {
                        name: "Expense List",
                        icon: <ListIcon />,
                        path: DashboardUrls.EXPENDITURE.EXPENSES.index,
                    },
                ],
            },
            {
                name: "Expense Categories",
                icon: <DashboardIcon />,
                path: "/",
                items: [
                    {
                        name: "Create Expense Category",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.EXPENDITURE.EXPENSE_CATEGORIES
                            .create,
                    },
                    {
                        name: "Expense Category List",
                        icon: <ListIcon />,
                        path: DashboardUrls.EXPENDITURE.EXPENSE_CATEGORIES
                            .index,
                    },
                ],
            },
        ],
    },
    {
        name: "Loan Manager",
        icon: <DashboardIcon />,
        path: "/",
        items: [
            {
                name: "Create Loan",
                icon: <AddCircleOutlineIcon />,
                path: DashboardUrls.LOANS.create,
            },
            {
                name: "Loan List",
                icon: <ListIcon />,
                path: DashboardUrls.LOANS.index,
            },
        ],
    },
    {
        name: "Reports",
        icon: <DescriptionOutlinedIcon />,
        path: "/",
    },
    {
        name: "Analytics",
        icon: <ShowChartOutlinedIcon />,
        path: "/",
    },
    {
        name: "System",
        icon: <SettingsIcon />,
        path: "/",
        items: [
            {
                name: "Stores",
                icon: <StoreIcon />,
                path: "/",
                items: [
                    {
                        name: "Create Store",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.SYSTEM.STORE.create,
                    },
                    {
                        name: "Store List",
                        icon: <ListIcon />,
                        path: DashboardUrls.SYSTEM.STORE.index,
                    },
                    {
                        name: "Store Setting",
                        icon: <SettingsIcon />,
                        path: DashboardUrls.SYSTEM.STORE.setting,
                    },
                ],
            },
            {
                name: "Brands",
                icon: <BusinessIcon />,
                path: "/",
                items: [
                    {
                        name: "Create Brand",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.SYSTEM.BRAND.create,
                    },
                    {
                        name: "Brand List",
                        icon: <ListIcon />,
                        path: DashboardUrls.SYSTEM.BRAND.index,
                    },
                ],
            },
            {
                name: "Currencies",
                icon: <AttachMoneyIcon />,
                path: "/",
                items: [
                    {
                        name: "Create Currency",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.SYSTEM.CURRENCY.create,
                    },
                    {
                        name: "Currency List",
                        icon: <ListIcon />,
                        path: DashboardUrls.SYSTEM.CURRENCY.index,
                    },
                ],
            },
            {
                name: "Payment Methods",
                icon: <PaymentIcon />,
                path: "/",
                items: [
                    {
                        name: "Create Payment Method",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.SYSTEM.PAYMENT.create,
                    },
                    {
                        name: "Payment Method List",
                        icon: <ListIcon />,
                        path: DashboardUrls.SYSTEM.PAYMENT.index,
                    },
                ],
            },
            {
                name: "Units",
                icon: <AcUnitIcon />,
                path: "/",
                items: [
                    {
                        name: "Create Unit",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.SYSTEM.UNIT.create,
                    },
                    {
                        name: "Unit List",
                        icon: <ListIcon />,
                        path: DashboardUrls.SYSTEM.UNIT.index,
                    },
                ],
            },
            {
                name: "TaxRates",
                icon: <LocalAtmIcon />,
                path: "/",
                items: [
                    {
                        name: "Create TaxRate",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.SYSTEM.TAX_RATE.create,
                    },
                    {
                        name: "TaxRate List",
                        icon: <ListIcon />,
                        path: DashboardUrls.SYSTEM.TAX_RATE.index,
                    },
                ],
            },
            {
                name: "Boxes",
                icon: <AllInboxIcon />,
                path: "/",
                items: [
                    {
                        name: "Create Box",
                        icon: <AddCircleOutlineIcon />,
                        path: DashboardUrls.SYSTEM.BOX.create,
                    },
                    {
                        name: "Box List",
                        icon: <ListIcon />,
                        path: DashboardUrls.SYSTEM.BOX.index,
                    },
                ],
            },
        ],
    },
];

export default sidebarMenu;
