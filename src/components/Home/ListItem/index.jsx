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
  cardcontent:{
    display: 'flex',
    justifyContent:'space-between'
  }
});

const ListItem = ({item: { title,  }}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.cardcontent}>
          <Typography variant="h6">{title}</Typography>

          <Typography variant="body2" color="error" component="p">
           
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">
            <b>Country:</b> 
          </Typography>
          <Typography variant="body2">
            <b>Yearly Tuition Fees:</b> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ListItem;
