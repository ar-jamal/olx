import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Header from "./utils/components/cusHeader"
import SubHeader from "./utils/components/subHeader";
import Data from "./utils/Data"


function App() {
  // const [listData, setListData] = useState(Data)
  const [filters, setFilters] = useState([])
  // const [allCategories, setAllCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [filterList, setFilterList] = useState([])
  // const [inputValues, setInputValues] = useState("")

  const inputChangeHandler = (val) => {
    // setInputValues(val)
    if (filterList && filterList > 0 ) {
      setFilterList([...filterList.filter((e) => e.includes(val))])
    } 
    setFilterList([...Data.filter((e) => {e.includes(val)})])
  }
  const listData = filters.length > 0 ?
    Data.filter(item => filters.includes(item.category))
    : Data;
    console.log()

  // {
  //   filters.length > 0 ?
  //   const filteredList = Data.filter(item => filters.includes(item.category))
  //   setFilterList(filterList)

  // };

  let selectChangeHandler = (val) => {
    // setSelectedCategory(val);
    console.log(listData)
    let filteredList = listData.filter((x) => x.category === val);
    setFilterList([...filteredList]);
    console.log([filteredList])
  };

  return (
    <div className='Layout'>
      <Header
        onChange={(e) => selectChangeHandler(e.target.value)}
        onChangeInput={(e) => inputChangeHandler(e.target.value)}
        // value={selectedCategory}
      />
      <SubHeader setFilters={setFilters} filters={filters} />

      <div className='Body'>
        <Grid container>
          <Grid>
          </Grid>
          {/* {allCategories.map((e, i) => (
            <Grid item md={3} xs={12} sm={6} key={i}>
              <Box className="bgLight">
                <img src={e.image} width="100%" alt="" />
                <Tooltip title={e.title}>
                  <Typography
                    sx={{ height: 60, overflow: "hidden" }}
                    variant="h6"
                  >
                    {e.title.slice(0, 30) + (e.title.length > 30 ? "..." : "")}
                  </Typography>
                </Tooltip>
                <Typography variant="h5">Rs {e.price}/-</Typography>
              </Box>
            </Grid>
          ))} */}
        </Grid>
        <Grid spacing={4} container>
          {filterList.map((e, i) => (
            <Grid item md={3} xs={12} sm={6} key={i}>
              <Box style={{ margin: 5 }}>
                <img src={e.image} width="100%" alt="" />
                <Tooltip title={e.title}>
                  <Typography
                    sx={{ height: 60, overflow: "hidden" }}
                    variant="h6"
                  >
                    {e.title.slice(0, 30) + (e.title.length > 30 ? "..." : "")}
                  </Typography>
                </Tooltip>
                <Typography variant="h5">Rs {e.price}/-</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <hr />
        <Grid sx={{ padding: 5 }} container>
          {listData.map((e, i) => (
            <Grid item md={2} xs={12} sm={6} key={i}>
              <Box style={{ margin: 8 }}>
                <img src={e.image} width="100%" alt="" />
                <Tooltip title={e.title}>
                  <Typography
                    sx={{ height: 60, overflow: "hidden" }}
                    variant="h6"
                  >
                    {e.title.slice(0, 30) + (e.title.length > 30 ? "..." : "")}
                  </Typography>
                </Tooltip>
                <Typography variant="h5">Rs {e.price}/-</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default App;