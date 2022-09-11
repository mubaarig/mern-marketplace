import React from 'react'
import './Index.css';

const CurrentAccountItem = () => {
    return (
        <div className="main-content__right">
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
         
        </div>
    )
}

export default CurrentAccountItem;