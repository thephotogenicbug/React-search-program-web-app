import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
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
  },
});

const SinglePage = () => {
  const { id } = useParams();

  const [title, processTitle] = useState("");
  const [duration, processDuration] = useState("");
  const [campus, processCampus] = useState("");
  const [applicationdeadline, processApplicationDeadLine] = useState("");

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/course/get/${id}`
      );
      processTitle(data?.title);
      processDuration(data?.duration);
      processCampus(data?.campus);
      processApplicationDeadLine(data?.applicationdeadline);

      console.log(data);
    };

    fetching();
  }, [id]);

  const classes = useStyles();
  return (
    <>
      <Bar />
      <Grid container className={classes.root}>
        <Grid md={4}>
          <Box className={classes.box}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ControlPointIcon />}
            >
              Upload Student Data
            </Button>
          </Box>
        </Grid>
        <Grid md={8}>
          <Box className={classes.data}>
            <Card
              className={classes.card}
              elevation={0}
            >
              <CardActionArea>
                <CardContent className={classes.cardcontent}>
                  <Typography className={classes.title}>
                    <Box className={classes.boxtitle}>{title}</Box>
                  </Typography>
                </CardContent>
                <CardContent>
                  <Box container>
                    <Typography variant="body2" className={classes.cardcontent}>
                      Campus : {campus}
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Box container>
                    <Typography variant="body2" className={classes.cardcontent}>
                      Duration : {duration}
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Box>
                    <Typography variant="body2" className={classes.cardcontent}>
                      Application Dead Line : {applicationdeadline}
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Box>
                    <Typography variant="body2" className={classes.cardcontent}>
                      Application Fees
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Box>
                    <Typography variant="body2" className={classes.cardcontent}>
                      Yearly Tution Fees
                    </Typography>
                    <hr className={classes.hr} />
                  </Box>
                  <Typography className={classes.title}>
                    <Box className={classes.boxcontainer}>Requirements</Box>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SinglePage;
