import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Bar from "./appbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "40px",
  },
  hr: {
    color: "#888585",
  },
  box: {
    display: "flex",
    marginTop: "65px",
    marginLeft: "20px",
  },
  data: {
    display: "flex",
    marginTop: "20px",
    marginLeft: "-150px",
  },
  card: {
    width: "100%",
    maxWidth: "900px",
  },
  title: {
    textTransform: "uppercase",
  },
  boxtitle: {
    background: "#1D5AD4",
    padding: "13px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "-20px",
  },
  cardcontent: {
    marginTop: "25px",
    margin: "1%",
  },
  cardcontentbody: {
    marginBottom: "20px",
    margin: "1%",
  },
  hr: {
    width: "850px",
    marginLeft: "10px",
  },
  boxcontainer: {
    marginTop: "10px",
    background: "#1D5AD4",
    padding: "13px",
    fontWeight: "bold",
    color: "#fff",
    marginLeft: "10px",
  },
  leftcardroot: {
    minWidth: "390px",
  },
  leftcardcontent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    color: "#4e4d4d",
  },
  leftcardcontentbody: {
    textTransform: "uppercase",
    fontSize: "14px",
    display: "flex",
    flexWrap: "wrap",
    width: "340px",
    marginTop: "40px",
    color: "#4e4d4d",
  },
  flexwrap: {
    display: "flex",
    flexWrap: "wrap",
  },
  cardcontentlabel: {
    fontWeight: "bold",
    color: "#4e4d4d",
    textTransform: "uppercase",
  },
  cardcontentspan:{
    textTransform:'uppercase'
  }
});

const SinglePage = () => {
  const { id } = useParams();

  const [university, processUniversity] = useState("");
  const [title, processTitle] = useState("");
  const [duration, processDuration] = useState("");
  const [campus, processCampus] = useState("");
  const [applicationfee, processApplicationFee] = useState("");
  const [applicationdeadline, processApplicationDeadLine] = useState("");
  const [price, processPrice] = useState("");
  const [entryrequirement, processEntryRequirement] = useState("")
  const [scholarshipavailable, processScholarShipAvailable] = useState("");
  const [scholarshipdetails, processScholarShipDetails] = useState("");

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/course/get/${id}`
      );
      processUniversity(data?.university)
      processTitle(data?.title);
      processDuration(data?.duration);
      processCampus(data?.campus);
      processApplicationFee(data?.applicationfee);
      processApplicationDeadLine(data?.applicationdeadline);
      processPrice(data?.price);
      processEntryRequirement(data?.entryrequirement);
      processScholarShipAvailable(data?.scholarshipavailable);
      processScholarShipDetails(data?.scholarshipdetails);
      
      console.log(data);
    };

    fetching();
  }, [id]);

  const classes = useStyles();
  return (
    <>
      <Bar />
      <Grid container className={classes.root}>
        <Grid md={5}>
          <Box className={classes.box}>
            <Card className={classes.leftcardroot} variant="outlined">
              <CardContent>
                <Typography variant="h3" class={classes.leftcardcontent}>
                  {university}
                </Typography>
                <Box className={classes.flexwrap}>
                  <Typography
                    variant="body2"
                    class={classes.leftcardcontentbody}
                  >
                    Campus : {campus}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid md={7}>
          <Box className={classes.data}>
            <Card className={classes.card} elevation={0}>
              <CardContent className={classes.cardcontent}>
                <Typography className={classes.title}>
                  <Box className={classes.boxtitle}>{title}</Box>
                </Typography>
              </CardContent>
              <CardContent>
                <Box container>
                  <Typography variant="body2" className={classes.cardcontent}>
                    <label className={classes.cardcontentlabel}>Duration</label>{" "}
                    :{" "}
                    <span className={classes.cardcontentspan}>{duration}</span>
                  </Typography>
                  <hr className={classes.hr} />
                </Box>
                <Box>
                  <Typography variant="body2" className={classes.cardcontent}>
                    <label className={classes.cardcontentlabel}>
                      Application Dead Line
                    </label>{" "}
                    :{" "}
                    <span className={classes.cardcontentspan}>
                      {applicationdeadline}
                    </span>
                  </Typography>
                  <hr className={classes.hr} />
                </Box>
                <Box>
                  <Typography variant="body2" className={classes.cardcontent}>
                    <label className={classes.cardcontentlabel}>
                      Application Fees
                    </label>{" "}
                    :{" "}
                    <span className={classes.cardcontentspan}>
                      {applicationfee}
                    </span>
                  </Typography>
                  <hr className={classes.hr} />
                </Box>
                <Box>
                  <Typography variant="body2" className={classes.cardcontent}>
                    <label className={classes.cardcontentlabel}>
                      Yearly Tution Fees
                    </label>{" "}
                    : <span className={classes.cardcontentspan}>{price}</span>
                  </Typography>
                  <hr className={classes.hr} />
                </Box>
                <Typography className={classes.title}>
                  <Box className={classes.boxcontainer}>Requirements</Box>
                </Typography>
                <Box>
                  <Typography variant="body2" className={classes.cardcontent}>
                    <label className={classes.cardcontentlabel}>
                      Entry Requirements
                    </label>{" "}
                    :{" "}
                    <span className={classes.cardcontentspan}>
                      {entryrequirement}
                    </span>
                  </Typography>
                  <hr className={classes.hr} />
                </Box>
                <Typography className={classes.title}>
                  <Box className={classes.boxcontainer}>Scholarship</Box>
                </Typography>
                <Box>
                  <Typography variant="body2" className={classes.cardcontent}>
                    <label className={classes.cardcontentlabel}>
                      Scholarship Available
                    </label>{" "}
                    :{" "}
                    <span className={classes.cardcontentspan}>
                      {scholarshipavailable}
                    </span>
                  </Typography>
                  <hr className={classes.hr} />
                </Box>
                <Box>
                  <Typography variant="body2" className={classes.cardcontent}>
                    <label className={classes.cardcontentlabel}>
                      Scholarship Details
                    </label>{" "}
                    :{" "}
                    <span className={classes.cardcontentspan}>
                      {scholarshipdetails}
                    </span>
                  </Typography>
                  <hr className={classes.hr} />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SinglePage;
