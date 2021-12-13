import React, { useEffect, useState } from "react";
import { dataList } from "../../../constants";
import FilterPanel from "../../Home/FilterPanel";
import List from "../../Home/List";
import Searchbar from "../../Home/SearchBar";
import "./styles.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [list, setList] = useState(dataList);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [programs, setPrograms] = useState([
    {
      id: 1,
      checked: false,
      label: "High School",
    },
    {
      id: 2,
      checked: false,
      label: "Ug Diploma Certificate Associate Degree",
    },
    {
      id: 3,
      checked: false,
      label: "UG",
    },
    {
      id: 4,
      checked: false,
      label: "PG Diploma Certificate",
    },
    {
      id: 5,
      checked: false,
      label: "PG",
    },
    {
      id: 6,
      checked: false,
      label: "UG+PG Accelerated Degree",
    },
    {
      id: 7,
      checked: false,
      label: "PhD",
    },
    {
      id: 8,
      checked: false,
      label: "Foundation",
    },
    {
      id: 9,
      checked: false,
      label: "Short Term Programs",
    },
    {
      id: 10,
      checked: false,
      label: "Pathway Programs",
    },
    {
      id: 11,
      checked: false,
      label: "Twinning Programmes (UG)",
    },
    {
      id: 12,
      checked: false,
      label: "Twinning Programmes (PG)",
    },
  ]);

  // programs function
  const handleChangeCheckedProgram = (id) => {
    const programmsStateList = programs;
    const changeCheckedPrograms = programmsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setPrograms(changeCheckedPrograms);
  };

  // price function
  const handleChangePrice = (event, value) => setSelectedPrice(value);

   //  parent filter function
  const applyFilters = () => {
    let updatedList = dataList;

    // program filter
    const programChecked = programs
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (programChecked.length) {
      updatedList = updatedList.filter((item) =>
        programChecked.includes(item.program)
      );
    }

    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [programs, selectedPrice]);

  return (
    <div class="home">
      {/* Searchbar */}
      <Searchbar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* Side Panel */}
          <FilterPanel
            programs={programs}
            changeChecked={handleChangeCheckedProgram}
            selectedPrice={selectedPrice}
            changedPrice={handleChangePrice}
          />
        </div>
        <div className="home_list-wrap">
          {/* List */}
          <List list={list} />
        </div>
      </div>
    </div>
  );
};

export default Home;
