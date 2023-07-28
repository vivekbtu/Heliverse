import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import "./navbar.css";

function Navbar({
  setSearchUser,
  setClick,
  click,
  setFetchDataAgain,
  fetchDataAgain,
}) {
  const [searchValue, setSearchValue] = useState("");

  const handleOnchange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleGetDatas = async () => {
    setClick(true);
    const searchUsers = await axios.get(
      `https://heliverse-data.onrender.com/user/search?first_name=${searchValue}`
    );

    setSearchUser(searchUsers);
  };

  const fetctAgainData = () => {
    setClick(false);
    setSearchValue("");
    setFetchDataAgain(!fetchDataAgain);
  };

  return (
    // <div className="Navbar">
    //   <input
    //       type="text"
    //       value={searchValue}
    //       onChange={handleOnchange}
    //       placeholder="Find User By It's First Name"
    //     />

    //   <div className="search">
    //     <input
    //       type="text"
    //       value={searchValue}
    //       onChange={handleOnchange}
    //       placeholder="Find User By It's First Name"
    //     />
    //     {click === false ? (
    //       <FiSearch
    //         size={20}
    //         onClick={handleGetDatas}
    //         cursor={"pointer"}
    //         className="searchCross"
    //       />
    //     ) : (
    //       <ImCross
    //         size={20}
    //         fontWeight={400}
    //         onClick={fetctAgainData}
    //         cursor={"pointer"}
    //       />
    //     )}
    //   </div>
    // </div>

<div className="Navbar">
<div className="search">
  <input
    type="text"
    value={searchValue}
    onChange={handleOnchange}
    placeholder="Find User By It's First Name"
  />
   {click === false ? (
          <FiSearch
            size={20}
            onClick={handleGetDatas}
            cursor={"pointer"}
            className="SearchIcon"
          />
        ) : (
          <ImCross
            size={20}
            fontWeight={400}
            onClick={fetctAgainData}
            cursor={"pointer"}
            className="SearchIcon"
          />
        )}
</div>
</div>
  );
}

export default Navbar;
