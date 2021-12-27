import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { programList } from "../../../constants";
import EmptyView from "../../common/EmptyView";
import FilterPanel from "../../Home/FilterPanel";
import List from "../../Home/List";
import ListItem from "../../Home/ListItem";
import Bar from "./appbar";
import Pagination from "./Pagination";
import "./styles.css";

const Home = () => {
  const [selectedPrice, setSelectedPrice] = useState([1000, 260000]);
  const [resultFound, setResultFound] = useState(false);
  const [programs, setPrograms] = useState(programList);

  const [universities, setUniversities] = useState([
    {
      id: 1,
      checked: false,
      label: "Jain University",
    },
    {
      id: 2,
      checked: false,
      label: "presidency university",
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

    // // program filter
    // const programChecked = programs
    //   .filter((item) => item.checked)
    //   .map((item) => item.label.toLowerCase());
    // if (programChecked.length) {
    //   updatedList = list.filter((item) =>
    //     programChecked.includes(item.program)
    //   );
    // }

     // university filter
     const universityChecked = universities
       .filter((item) => item.checked)
       .map((item) => item.label.toLowerCase());
     if (universityChecked.length) {
       updatedList = list.filter((item) =>
         universityChecked.includes(item.university)
       );
     }
     else{
      
     }

    // // price Filter
    // const minPrice = selectedPrice[0];
    // const maxPrice = selectedPrice[1];

    // updatedList = updatedList.filter(
    //   (item) => item.price >= minPrice && item.price <= maxPrice
    // );

     setList(updatedList);

      // if(!updatedList.length){
      //    return setResultFound(false)
      // }
      // else{
      //   return setResultFound(true)
      // }

    // !updatedList.length ? setResultFound(false)  : setResultFound(true);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    applyFilters();
  }, [ universities, navigate]);

   useEffect(() => {
     async function getData() {
       const res = await axios.get("http://localhost:5000/api/course/get");
       setList(res.data);
     }
     getData();
     console.log(list)
   }, []);

    const [showPerPage, setShowPerPage] = useState(25);
    const [pagination, setPagination] = useState({
      start: 0,
      end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
      setPagination({ start: start, end: end });
    };

    const [searchTerm, setSearchTerm] = useState("");

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
            <Pagination
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
            />
            {list
              ?.slice(pagination.start, pagination.end)
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.specialization
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.university
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => (
                <ListItem key={item._id} item={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

/*




*/
