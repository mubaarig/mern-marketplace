import React, { useEffect, useState } from 'react';
import CurrentAccountItem from './CurrentAccountItem';
import FilterBar from './FilterBar';

const Index = () => {

    const [allData, setAllData] = useState([]);

    // Get Data from Api 
    const getData = () => {
        fetch('current-account-comparison.json')
            .then(function (response) {
                return response.json();
            }).then(function (result) {
                setAllData(result)
            })
    };

    useEffect(() => {
        getData();
    }, []);

     const generateGenderDataForDropdown = () => {
    return [...new Set(allData.map((item) => item.allBanks))];
  };

    return (
        <>
            <div className='content-left'>
                {allData.map((data, idx) =>
                    <p key={idx}>{data.allBanks}</p>
                )}
                <FilterBar
                 allBanks={generateGenderDataForDropdown()}
                />
            </div>
            <div className='content-right'>
                {allData.map((item) => (
              <CurrentAccountItem item={item} key={item.id} />
            ))}
            </div>
        </>


    )
}

export default Index;