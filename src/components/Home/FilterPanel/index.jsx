import React from "react";
import { categoryList } from "../../../constants";
import CheckBoxProton from "../../common/CheckBoxProtonProgramLevel";
import SliderProton from "../../common/SliderProton";
import "./styles.css";

const FilterPanel = ({
  programs,
  changeChecked,
  changedPrice,
  selectedPrice,
}) => {
  return (
    <div>
      {/* programs checkbox */}
      <div className="input-group">
        <p className="label">Program Level</p>
        {programs.map((program) => (
          <CheckBoxProton
            key={program.id}
            changeChecked={changeChecked}
            program={program}
          />
        ))}
      </div>
      {/*  country checkbox  */}
      {/* price range  */}
      <div className="input-group">
        <p className="label">Price Filter</p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>
    </div>
  );
};

export default FilterPanel;
