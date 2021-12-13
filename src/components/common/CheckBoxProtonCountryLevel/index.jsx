import React from 'react'
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#1D5AD4",
    },
  },
  checked: {},
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
  label: {
    fontSize: "0.9rem",
    fontFamily: `"Raleway", sans-serif`,
    fontWeight: "600",
  },
});

const CheckBoxProtonCountry = ({ changeCheckedCountry, country }) => {
  const classes = useStyles();
  const { checked, label, id } = country;
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeCheckedCountry(id)}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckBoxProtonCountry
