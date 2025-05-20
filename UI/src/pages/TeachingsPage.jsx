import Navbar from "../components/navbar/Navbar";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useContext, useEffect, useState } from "react";
import { themeBalham } from "ag-grid-community";
import "./TeachingsPage.css";
import { routeAppend } from "../context/RouteAppend";
import { ThemeContext } from "../context/ThemeContextProvider";
ModuleRegistry.registerModules([AllCommunityModule]);
const TeachingsPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [rowData, setRowData] = useState([]);
  const myTheme = themeBalham.withParams({
    backgroundColor: isDarkMode ? "rgb(21, 21, 21)" : "rgb(255, 255, 255)",
    foregroundColor: isDarkMode ? "rgb(20, 20, 20)" : "rgb(255, 255, 255)",
    headerTextColor: isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
    headerBackgroundColor: isDarkMode
      ? "rgb(62, 77, 140)"
      : "rgb(143, 171, 255)",
    textColor: isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
    oddRowBackgroundColor: isDarkMode
      ? "rgb(255, 255, 255, 0.10)"
      : "rgb(0, 0, 0, 0.10)",
    headerColumnResizeHandleColor: isDarkMode
      ? "rgb(154, 154, 154)"
      : "rgb(29, 29, 29)",
  });
  const [colDefs, setColDefs] = useState([]);
  useEffect(() => {
    fetch(routeAppend + "/data/teachings/data.json")
      .then((response) => response.json())
      .then((data) => {
        setRowData(data.rows);
        const colDefs = data.columns.map((col) => {
          return { field: col, flex: 1, filter: true };
        });
        setColDefs(colDefs);
      });
  }, []);
  return (
    <div className="container">
      <Navbar isAdmin={false} />
      <div className="item-box" style={{ borderTop: "none" }}>
        <div
          className="heading"
          style={{
            paddingBottom: "50px",
            width: "100%",
            borderBottom: "1px solid var(--line-color)",
            marginBottom: "10px",
          }}
        >
          Teachings
        </div>

        <div className="ag-theme-alpine-dark ag-grid-container">
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            theme={myTheme}
            gridOptions={{ domLayout: "autoHeight" }}
          />
        </div>
      </div>
    </div>
  );
};
export default TeachingsPage;
