import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './styles.css'
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: "1rem",
  },
  cardcontent: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "-8px",
  },
  cardcontent2: {
    marginBottom: "5px",
  },
  data: {
    fontSize: "15px",
  },
  button:{
    textDecoration:'none'
  }
});

const ListItem = ({ item: {title, university, specialization, campus, country, program, duration, entryrequirement, applicationdeadline, applicationfee, price, scholarshipavailable, scholarshipdetails, applicationmode, remarks, _id } }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.cardcontent}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="h6">
            <Button size="small" color="primary">
              <Link to={`${_id}`} className={classes.button}>
                View Details
              </Link>
            </Button>
          </Typography>
          {/* <Typography variant="body2" color="error" component="p">
            {" "}
            {entryrequirement}
          </Typography> */}
        </CardContent>
        <CardContent>
          <Typography variant="body2" className={classes.cardcontent2}>
            <b>
              <i className="fas fa-university card-icon"></i>University:
            </b>
            <label class={classes.data}>{university}</label>
          </Typography>
          <Typography variant="body2" className={classes.cardcontent2}>
            <b>
              <i class="fas fa-globe-asia card-icon-country"></i>Country:
            </b>{" "}
            {country}
          </Typography>
          <Typography variant="body2" className={classes.cardcontent2}>
            <b>
              <i class="fas fa-money-bill card-icon-fees"></i>Yearly Tuition
              Fees:
            </b>
            {price}
          </Typography>
          <Typography variant="body2" className={classes.cardcontent2}>
            <b>
              <i class="far fa-clock card-icon-fees"></i>Duration Fees:
            </b>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ListItem;
