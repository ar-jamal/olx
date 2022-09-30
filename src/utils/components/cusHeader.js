import SelectOptions from "./selectOptions";
import TextField from "@mui/material/TextField";
import PageviewIcon from "@mui/icons-material/Pageview";

function Layout(props) {
    // console.log(props)
    // [onClick, children]= props
    return (
        <div className="Layout">
            <div className="Header-view">
                <img className="Main-logo"
                    src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/12/jewelry-logo.jpg"
                    alt='link broken'
                />
                <SelectOptions />
                <div
                    className="Text-field-div">
                    <TextField className="Text-field" />
                    <div
                        className="Icon-div"
                        onClick={props.onClick}
                    >
                        <PageviewIcon

                            sx={{ color: "blue", fontSize: 85 }}
                            className="Search-button"
                        />
                    </div>
                </div>
            </div>
            <div className="Body-view">{props.children}</div>
        </div>
    )
}
export default Layout;
// sx= {{height: '30px', width: 30}}111