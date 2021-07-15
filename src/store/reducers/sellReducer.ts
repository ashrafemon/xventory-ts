import {Images} from "../../constants/themeData";

const initialState = {
    menuItems: [
        {title: "POS", icon: Images.PosIcon, badge: 0},
        {title: "SELL LIST", icon: Images.ListIcon, badge: 0},
        {title: "OVERVIEW REPORT", icon: Images.OverviewReportIcon, badge: 0},
        {title: "SELL REPORT", icon: Images.SellReportIcon, badge: 0},
    ],
}

const sellReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default sellReducer
