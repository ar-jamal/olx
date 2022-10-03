import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import SubHeader from "./utils/components/subHeader";
import Data from "../src/utils/Data"


function App() {
  const [listData, setListData] = useState(Data)
  // const listData= Data;
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterList, setFilterList] = useState([]);
  // extracting all categories from main product Array
  let getCategories = () => {
    let li = listData.map((x) => x.category);
    li = [...new Set([...li])];
    setAllCategories([...li]);
  };

  // Render Item By DropDown
  let searchCategoryItem = (val) => {
    setSelectedCategory(val);
    let filteredList = listData.filter((x) => x.category === val);
    setFilterList([...filteredList]);
  };

  // search Item By DropDown and Input
  let searchItem = (val) => {
    let filteredList = listData.filter(
      (x) =>
        x.category === selectedCategory &&
        x.title.toLowerCase().includes(val.toLowerCase())
    );
    setFilterList([...filteredList]);
  };

  // it will run when component initialize ...
  useEffect(() => {
    getCategories();
  });

  return (
    <div className="App">
      <Grid container>
        <Grid item md={3}>
          <Box sx={{ padding: 2 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Category"
              variant="standard"
              fullWidth={true}
              onChange={(e) => searchCategoryItem(e.target.value)}
              value={selectedCategory}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {allCategories.map((e, i) => (
                <MenuItem key={i} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid item md={9}>
          <Box sx={{ padding: 2 }}>
            <TextField
              variant="standard"
              fullWidth={true}
              label="search Item here ..."
              onChange={(e) => searchItem(e.target.value)}
            />
          </Box>
        </Grid>
      </Grid>
      {/* <SubHeader /> */}
      <Grid container>
        {filterList.map((e, i) => (
          <Grid item md={3} xs={12} sm={6} key={i}>
            <Box className="bgLight">
              <Chip label={e.category} />
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
              {/* <Typography variant="p">{e.description}</Typography> */}
            </Box>
          </Grid>
        ))}
      </Grid>
      <hr />
      <Grid sx= {{padding: 5}}container>
        {listData.map((e, i) => (
          <Grid item md={2} xs={12} sm={6} key={i}>
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
              {/* <Typography variant="p">{e.description}</Typography> */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default App;