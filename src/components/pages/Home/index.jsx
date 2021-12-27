import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyView from "../../common/EmptyView";
import FilterPanel from "../../Home/FilterPanel";
import List from "../../Home/List";
import Bar from "./appbar";
import Pagination from "./Pagination";
import "./styles.css";

const Home = () => {
  const [selectedPrice, setSelectedPrice] = useState([1000, 260000]);
  const [resultFound, setResultFound] = useState(false);
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

  const [universities, setUniversities] = useState([
    {
      id: 1,
      checked: false,
      label: "Jain University",
    },
    {
      id: 2,
      checked: false,
      label: "Nagarjuna University",
    },
    {
      id: 3,
      checked: false,
      label: "Reva University",
    },
    {
      id: 4,
      checked: false,
      label: "Rv College",
    },
    {
      id: 5,
      checked: false,
      label: "Dayanad Sagar University",
    },
  ]);


  const [list, setList] = useState([
    {
      _id: "61bc327d44df1ce4694a83c6",
      university: "jain university",
      title: "bba",
      specialization: "internet of things",
      campus:
        "jc road  lalbagh road  ramanagar gandhi nagar jayanagar jayanagar 9th block",
      country: "india ",
      program: "ug",
      duration: "3 years",
      entryrequirement: "10+2",
      applicationdeadline: "open",
      applicationfee: "1050",
      price: "160000",
      scholarshipavailable: "available",
      scholarshipdetails: "should be an indian citizen",
      applicationmode: "online",
      remarks: "8.0/10academic",
      __v: 0,
    },
  ]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:5000/api/course/get");
      setList(res.data);
    }
    getData();
    console.log(list);
  }, [programs, selectedPrice, universities]);

  // programs function
  const handleChangeCheckedProgram = (id) => {
    const programmsStateList = programs;
    const changeCheckedPrograms = programmsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setPrograms(changeCheckedPrograms);
  };

  // university function
  const handleChangeCheckedUniversity = (id) => {
    const universitiesStateList = universities;
    const changeCheckedUniversities = universitiesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setUniversities(changeCheckedUniversities);
  };

  // price function
  const handleChangePrice = (event, value) => setSelectedPrice(value);

  //  parent filter function
  const applyFilters = () => {
    let updatedList = list;

    // program filter
    const programChecked = programs
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (programChecked.length) {
      updatedList = updatedList.filter((item) =>
        programChecked.includes(item.program)
      );
    }

    // university filter
    const universityChecked = universities
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (universityChecked.length) {
      updatedList = updatedList.filter((item) =>
        universityChecked.includes(item.university)
      );
    }
    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    console.log(updatedList);

    setList(updatedList);

    !updatedList.length ? setResultFound(false) : setResultFound(true);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let navigate = useNavigate();

  useEffect(() => {
    if(!userInfo){
      navigate('/')
    }
    applyFilters();
  }, [programs, selectedPrice, universities, navigate]);

  return (
    <>
      <Bar />
      <div class="home">
        <div className="home_panelList-wrap">
          <div className="home_panel-wrap">
            {/* Side Panel */}
            <FilterPanel
              programs={programs}
              changeChecked={handleChangeCheckedProgram}
              selectedPrice={selectedPrice}
              changedPrice={handleChangePrice}
              universities={universities}
              changeCheckedUniversity={handleChangeCheckedUniversity}
            />
          </div>
          <div className="home_list-wrap">
            {/* List */}
            {/* <div className="data_found_wrapper">
              <div className="result_found"> Results Found : {list.length}</div>
            </div> */}
            {resultFound ? <List list={list} /> : <EmptyView />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

/*




*/
