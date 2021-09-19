import axios from 'axios';
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditFamilyForm from './editFamilyForm';
import EditFamilyEducation from './editFamilyEducation';
import { useParams } from "react-router-dom";
import { BASEURL } from '../common';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [list, setList] = useState([]);
  const [data, setData] = useState('');
 const { id } = useParams()
 const history = useHistory()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (data) => {
  console.log(data)
   axios.post(`${BASEURL}/products/${id}`,data).then(items => {
                                                      setList(items.data);
                                                       history.push('/')
                                                  })

  }

//   useEffect(() => {
//   axios.get(`${URL}/products/${id}`)
//        .then(items => {
//            setList(items.data)
//        })
//     });
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Basic Details" {...a11yProps(0)} />
          <Tab label="Education Details" {...a11yProps(1)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
<EditFamilyForm id={id}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <EditFamilyEducation onSave={handleSubmit} id={id}/>
      </TabPanel>

    </div>
  );
}