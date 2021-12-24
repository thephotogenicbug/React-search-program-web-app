import React from "react";
import CheckBoxProton from "../../common/CheckBoxProtonProgramLevel";
import CheckBoxProtonUniversity from "../../common/checkBoxProtonUniversityLevel";
import SliderProton from "../../common/SliderProton";
import "./styles.css";

const FilterPanel = ({
  programs,
  changeChecked,
  changedPrice,
  selectedPrice,
  universities,
  changeCheckedUniversity,
}) => {
  return (
    <div>
      {/* programs checkbox */}
      <p className="label">
        Program Level{" "}
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
      {/*  university checkbox  */}
      <p className="label">
        University Level{" "}
        <span class="icons">
          <i class="fas fa-filter"></i>
        </span>
      </p>
      <div className="input-group-university">
        {universities.map((university) => (
          <CheckBoxProtonUniversity
            key={university.id}
            changeCheckedUniversity={changeCheckedUniversity}
            university={university}
          />
        ))}
      </div>
      
      {/* price range  */}
      <div className="input-group-price">
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
