import React from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as Logo } from './stackline_logo.svg';
import './App.css';
import { SideBar } from './components/SideBar';
import { ItemGraph } from './components/ItemGraph';
import { ItemTable } from './components/ItemTable';
import { default as data } from './stackline_frontend_assessment_data_2021.json';
import {
  updateDetails,
  updateTags,
  updateSales,
  ItemData
} from './redux/itemSlice';

const App = () => {
  const dispatch = useDispatch();

  const fetchItemData = async () => {
    // mock API call
    const { id, title, image, subtitle, brand, tags, sales }: ItemData = await data[0];

    dispatch(updateDetails({
      id,
      title,
      image,
      subtitle,
      brand
    }));
    dispatch(updateTags(tags));
    dispatch(updateSales(sales));
  };

  React.useEffect(() => {
    fetchItemData();
  }, []);

  return (
    <div className="App">
      <div className="stackline-header">
        <Logo className="stackline-logo" />
      </div>
      <div className="stackline-main">
        <SideBar />
        <div className="stackline-right">
          <ItemGraph />
          <ItemTable />
        </div>
      </div>
    </div>
  );
}

export default App;
