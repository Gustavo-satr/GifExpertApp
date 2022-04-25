import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';


import './index.css';
@@ -7,23 +8,21 @@ import './index.css';

export const GiftExpertApp = () => {

 
    const [categories, setCategories] = useState(['Demon Slayer', 'One punch', 'Attack on Titan']);

    //const handleAdd = () => {
    //    setCategories( [...categories, 'Full Metal Alchemist'] );
    //}



    return (

      <>
        <h2>GiftExpertApp</h2>
        <AddCategory />
        <hr />


        <ol>
            {
                categories.map(category => {