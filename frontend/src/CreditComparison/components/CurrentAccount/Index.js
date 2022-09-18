import React, { useEffect, useState } from 'react';
import CurrentAccountItem from './CurrentAccountItem';
import FilterBar from './FilterBar';
import HeaderTeaser from '../HeaderTeaser/HeaderTeaser';

const Index = () => {

    const [filterData, setFilterData] = useState([]);
    const [bankData, setBankData] = useState([]);

    // Get Data from Api 
    const getData = () => {
        fetch('current-account-comparison.json')
            .then(function (response) {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw Error(response.statusText);
                }
            }).then(function (result) {
                setBankData(result.result["bank"]);
                setFilterData(result.filter.header);
            })
    };
    console.log(bankData);
    console.log(filterData);
    useEffect(() => {
        getData();
    }, []);

    const generateGenderDataForDropdown = () => {
        return [...new Set(filterData.map((item) => item.allBanks))];
    };

    return (
        <>
            <HeaderTeaser
                teasHeader={'Ihr Girokonto-Vergleich'}
                text='Alle Girokonto Angebote inklusive Kreditkarte bei monatlichem Geldeingang von 1.500 €'
                ekomiItemText='CHECK24 Girokonto'
            />
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    <div className='main-content__left'>
                        <FilterBar />
                    </div>
                    <div className='main-content__right'>
                        <div className="filter-status">
                            <strong> <span>14</span> <span>Ergebnisse</span></strong>
                            <span>- mit bis zu <span>100</span> € Bonus</span>
                        </div>
                        <div className="filter-chips">
                        </div>
                        <div className="sort-bar" data-sortingbar="">
                            <ul className="sort-bar__list">
                                <li className="sort-bar__list__item active" data-sort-type-name="GRADE" data-tracking-item="Beste Kontonote zuerst">Beste Kontonote zuerst</li>
                                <li className="sort-bar__list__item " data-sort-type-name="ACCOUNT_MAINTENANCE_FEE" data-tracking-item="Niedrigste Kontogebühr zuerst">Niedrigste Kontogebühr zuerst</li>
                                <li className="sort-bar__list__item " data-sort-type-name="TOTAL_BONUS" data-tracking-item="Höchster Bonus zuerst">Höchster Bonus zuerst</li>
                            </ul>
                        </div>

                        <div data-transparency-banner="GIRO">
                            <div className="transparency-banner">
                                <div className="transparency-banner__content">
                                    <div>
                                        <span>Das Ranking nach der besten Kontonote erfolgt nach ausgewählten Produktleistungen und Kundenbewertungen.</span>
                                        <a href="https://www.check24.de/unternehmen/ueber-uns/?product=4">Mehr erfahren</a>
                                    </div>
                                </div>
                                <div className="transparency-banner__closer"></div>
                            </div>
                        </div>
                        {bankData.map((item) => (
                            <CurrentAccountItem item={item} key={item.id} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}
export default Index;
