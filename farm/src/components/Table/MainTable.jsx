import React from 'react';
import { forwardRef } from 'react';
import "./MainTable.css";


// import  Material Ui Icons for Table 
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import MaterialTable from 'material-table';
import ViewColumn from '@material-ui/icons/ViewColumn';



function MainTable(props){
    // const {animals} = props

      // Intiliaze Icons 
  const tableIcons = {
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  };

  // Table Titles 
  const columns = [
    {
      title: 'ID', field: 'ID',
      cellStyle: {  
        minWidth: 150,
        border: '1px solid steelBlue',
        backgroundColor: 'whiteSmoke',
        color: 'black',
       
      },
    },
    {
      title: 'Mother', field: 'Mother',
      cellStyle: {
        minWidth: 300,
        border: '1px solid steelBlue',
        backgroundColor: 'whiteSmoke',
        color: 'black',
      },
    },
    {
      title: 'Father', field: 'Father',
      cellStyle: {
        minWidth: 100,
        border: '1px solid steelBlue',
        backgroundColor: 'whiteSmoke',
        color: 'black',
      },
    },
    {
      title: 'DateOfBirth', field: 'DateOfBirth',
      cellStyle: {
        minWidth: 150,
        border: '1px solid steelBlue',
        backgroundColor: 'whiteSmoke',
        color: 'black',

      },
    },
    {
      title: 'Gender', field: 'Gender',
      cellStyle: {
        minWidth: 150,
        border: '1px solid steelBlue',
        backgroundColor: 'whiteSmoke',
        color: 'black',

      },
    }
  ]

  // 
//   let data = []
//   tasks.map((task) => {
//     return data = [...data,
//     {
//       jiraId: task.jiraItem.id,
//       jiraName: task.jiraItem.name,
//       jiraType: task.jiraItem.type,
//       jiraPriority: task.jiraItem.priority,
//       JiraItemStatus: task.jiraItem.status,
//       jiraParentId: task.jiraItem.parentId,
//       functionalTest: task.jiraItem.functionalTest,
//       qaRepresentative: task.jiraItem.qaRepresentative,
//       fixVersion: task.jiraItem.fixVersion,
//       qcRequirementId: task.qcItem.requirementId,
//       qcRequirementType: task.qcItem.requirementType,
//       qcStatus: task.qcItem.status,
//       updatedTime: task.diffItem.updatedTime,
//       modifyType:task.diffItem.type,
//       fieldName: task.diffItem.updatedField.fieldName,
//       oldValue: task.diffItem.updatedField.oldValue,
//       newValue: task.diffItem.updatedField.newValue,
//     }
//     ]
//   })
  
  return (
        <MaterialTable
          title="ANIMALS"
          icons={tableIcons}
          columns={columns}
        //   data={data}
          options={{
            exportButton: true,
            pageSizeOptions:[5,20,50],
            exportAllData:true,
            doubleHorizontalScroll:true,
            columnsButton:true,
            headerStyle: {
              backgroundColor: '#00447C',
              color: '#FFF',
              border: '1px solid black',
              borderBottom:'none',
              padding: 3,
              textAlign: 'center',
            },
          }}
        />
  );




}

export default MainTable;