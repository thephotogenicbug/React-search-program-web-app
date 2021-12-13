import React from "react";
import { categoryList } from "../../../constants";
import CheckBoxProtonCountry from "../../common/CheckBoxProtonCountryLevel";
import CheckBoxProton from "../../common/CheckBoxProtonProgramLevel";
import SliderProton from "../../common/SliderProton";
import "./styles.css";

const FilterPanel = ({
  programs,
  changeChecked,
  changedPrice,
  selectedPrice,
  countries,
  changeCheckedCountry,
}) => {
  return (
    <div>
      {/* programs checkbox */}
      <p className="label">
        PROGRAM LEVEL{" "}
        <span class="icons">
          <i class="fas fa-filter"></i>
        </span>
      </p>
      <div className="input-group">
        {programs.map((program) => (
          <CheckBoxProton
            key={program.id}
            changeChecked={changeChecked}
            program={program}
          />
        ))}
      </div>
      {/*  country checkbox  */}
      <p className="label">
        COUNTRY LEVEL{" "}
        <span class="icons">
          <i class="fas fa-filter"></i>
        </span>
      </p>
      <div className="input-group">
        {countries.map((country) => (
          <CheckBoxProtonCountry
            key={country.id}
            changeCheckedCountry={changeCheckedCountry}
            country={country}
          />
        ))}
      </div>
      {/* price range  */}
      <div className="input-group-price-range">
        <p className="label">
          YEARLY TUTION FEES{" "}
          <span class="icons-bill">
            <i class="fas fa-money-bill"></i>
          </span>
        </p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>
    </div>
  );
};

export default FilterPanel;
