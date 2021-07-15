import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    contentBox: {
        padding: "150px 0",
    },

    productAvatar: {
        width: "50%",
        borderRadius: 0,
        marginBottom: 20,
    },
    productDescription: {
        fontSize: 18,
        fontWeight: 300,
        lineHeight: 2,
    },
}));
