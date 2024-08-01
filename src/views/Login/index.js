import React from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Snackbar from "components/Snackbar/Snackbar.js";
// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// const useStyles = makeStyles(styles);

export default function Login() {
    // const classes = useStyles();
    const [tl, setTL] = React.useState(false);
    const [tc, setTC] = React.useState(false);
    const [tr, setTR] = React.useState(false);
    const [bl, setBL] = React.useState(false);
    const [bc, setBC] = React.useState(false);
    const [br, setBR] = React.useState(false);
    React.useEffect(() => {
        // Specify how to clean up after this effect:
        return function cleanup() {
            // to stop the warning of calling setState of unmounted component
            var id = window.setTimeout(null, 0);
            while (id--) {
                window.clearTimeout(id);
            }
        };
    });
    const showNotification = (place) => {
        switch (place) {
            case "tl":
                if (!tl) {
                    setTL(true);
                    setTimeout(function () {
                        setTL(false);
                    }, 6000);
                }
                break;
            case "tc":
                if (!tc) {
                    setTC(true);
                    setTimeout(function () {
                        setTC(false);
                    }, 6000);
                }
                break;
            case "tr":
                if (!tr) {
                    setTR(true);
                    setTimeout(function () {
                        setTR(false);
                    }, 6000);
                }
                break;
            case "bl":
                if (!bl) {
                    setBL(true);
                    setTimeout(function () {
                        setBL(false);
                    }, 6000);
                }
                break;
            case "bc":
                if (!bc) {
                    setBC(true);
                    setTimeout(function () {
                        setBC(false);
                    }, 6000);
                }
                break;
            case "br":
                if (!br) {
                    setBR(true);
                    setTimeout(function () {
                        setBR(false);
                    }, 6000);
                }
                break;
            default:
                break;
        }
    };
    return (

        // <Card>
        //     <CardHeader color="warning" stats icon>
        //         <CardIcon color="warning">
        //             <Icon>content_copy</Icon>
        //         </CardIcon>
        //         <p className={classes.cardCategory}>Used Space</p>
        //         <h3 className={classes.cardTitle}>
        //             49/50 <small>GB</small>
        //         </h3>
        //     </CardHeader>
        //     <CardFooter stats>
        //         <div className={classes.stats}>
        //             <Danger>
        //                 <Warning />
        //             </Danger>
        //             <a href="#pablo" onClick={(e) => e.preventDefault()}>
        //                 Get more space
        //             </a>
        //         </div>
        //     </CardFooter>
        // </Card>
        <GridContainer justify={"center"}>
            <GridItem xs={12} sm={12} md={10} lg={8}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Button
                            fullWidth
                            color="primary"
                            onClick={() => showNotification("bc")}
                        >
                            Bottom Center
                        </Button>
                        <Snackbar
                            place="bc"
                            color="info"
                            icon={AddAlert}
                            message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                            open={bc}
                            closeNotification={() => setBC(false)}
                            close
                        />
                    </GridItem>

                </GridContainer>
            </GridItem>
        </GridContainer>

    );
}
