import {Box, Container, Grid,} from "@material-ui/core";
import React, {useEffect} from "react";
import PackagePlanSM from "../shared/PackagePlan/PackagePlanSM";
import SectionTitle from "../shared/SectionTitle";
import {useStyles} from "./styled";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {fetchPricingPlans} from "../../../store/actions/siteAction";
import PackagePlanList from "../shared/PackagePlan/PackagePlanList";

const Plans = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {pricingPlans} = useSelector((state:RootStateOrAny) => state.site);

    useEffect(() => {
        dispatch(fetchPricingPlans())
    }, [dispatch])

    return (
        <Box className={classes.wrapper}>
            <Container>
                <Box mb={5}>
                    <SectionTitle title="Our Pricing"/>
                </Box>

                <Grid container justify="center" spacing={5}>
                    {pricingPlans && pricingPlans.pricingPlanList && pricingPlans.pricingPlanList.map((item, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <PackagePlanSM plan={item}/>
                            <PackagePlanList
                                features={item.featureList}
                                setupFee={item.setupFee}
                                renewFee={item.renewalFee}
                                outlet={item.outletCount}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Plans;
