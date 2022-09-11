import React, { useState } from 'react';

const FilterBar = ({ allBanks }) => {

    const [filters, setFilters] = useState({
        jointAccount: "",
        monthlyCashReceipt: "",
        allBanks: "",
        postcode: "",
        withCondition: "",
    });

    const handleInput = (field) => (event) => {
        const { value } = event.target;
        setFilters({
            ...filters,
            [field]: value,
        });
    }
    return (
        <>
            <form className="filter-bar" id="filterBar" data-filterbar="">
                <div className="filter-bar__container">
                    <div className="filter-bar__header">Angaben ändern</div>
                    <div className="filter-bar__section" data-filter-type="userParams">
                        <div className="filter-bar__section__content">

                            <div className="filter-bar__section__option">
                                <label className="filter-bar__section__label label horizontal" htmlFor="applicantNumber">
                                    <span>Gemeinschaftskonto</span>
                                    <div data-overlay-opener="" data-position="right" data-title="Gemeinschaftskonto" data-text="Wählen Sie hier bitte aus, ob Sie ein Girokonto für 1 oder für 2 Kontoinhaber suchen.">
                                        <span className="filter-bar__section__help-icon"></span>
                                    </div>
                                </label>

                                <div className="radio-button radio-button--horizontal">
                                    <div className="radio-button__option active  ">
                                        <input type="radio" class="radio-button__input" value="ONLY_FOR_TWO" id="applicantNumber-ONLY_FOR_TWO" name="applicantNumber" data-option-default="false" data-tracking-item="Gemeinschaftskonto - Value: Ja" checked="checked" />
                                        <label className="radio-button__label" htmlFor="applicantNumber-ONLY_FOR_TWO">
                                            <div className="radio-button__label-wrapper">
                                                Ja
                                            </div>

                                        </label>
                                    </div>
                                    <div class="radio-button__option">
                                        <input type="radio" className="radio-button__input" value="ALL" id="applicantNumber-ALL" name="applicantNumber" data-option-default="true" data-tracking-item="Gemeinschaftskonto - Value: Nein" />
                                        <label className="radio-button__label" htmlFor="applicantNumber-ALL">
                                            <div className="radio-button__label-wrapper">
                                                Nein

                                            </div>

                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="filter-bar__section__option">
                            <label className="filter-bar__section__label label label--and-additional" htmlFor="minc">
                                <span>Monatlicher Geldeingang</span>
                                <div data-overlay-opener="" data-position="right" data-title="Warum fragen wir nach Ihrem monatlichen Geldeingang?" data-text="Die Höhe der anfallenden Kontoführungsgebühren ist bei manchen Banken von der Höhe des monatlichen Geldeingangs abhängig.">
                                    <span className="filter-bar__section__help-icon"></span>
                                </div>
                            </label>

                            <span className="additional-label">(Angabe optional)</span>
                            <div className="input-group">
                                <input className="input input--addon" type="tel" maxlength="9" name="minc" id="minc" value="1.500" data-integer="true" data-min="0" data-max="99.999" data-postal-code="false" data-tracking-item="Monatlicher Geldeingang" data-type-reload="false" />
                                <span className="input-addon input-addon--euro"></span>

                            </div>
                        </div>

                        <div className="filter-bar__section__option">

                            <label className="filter-bar__section__label label label--and-additional" htmlFor="postalCode">
                                <span>Postleitzahl</span>
                                <div data-overlay-opener="" data-position="right" data-title="Warum erfragen wir Ihre Postleitzahl?" data-text="Mit der Eingabe Ihrer Postleitzahl werden Ihnen zusätzlich zu den Girokonten überregionaler Banken auch Girokonten von Banken in Ihrer Umgebung angezeigt.">
                                    <span className="filter-bar__section__help-icon"></span>
                                </div>
                            </label>

                            <span className="additional-label">(Angabe optional)</span>
                            <div className="input-group">
                                <input className="input input--addon" type="tel" placeholder="keine" maxlength="5" name="postalCode" id="postalCode" value="80636" data-integer="false" data-min="1.000" data-max="99.999" data-postal-code="true" data-tracking-item="Postleitzahl" data-type-reload="false" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="filter-bar__container">
                    <div className="filter-bar__header">Filter</div>
                    <div className="filter-bar__section  filter-bar__section--collapse-active" data-filter-type="filters" data-collapse="false">

                        <div className="filter-bar__section__content">
                            <div className="col-sm-12 my-2">
                                <label htmlFor="bankTyp">Bankentyp</label>
                                <select
                                    className="form-control"
                                    id="gender"
                                    onChange={handleInput("gender")}
                                >
                                    <option value="">Select</option>
                                    {allBanks.map((allBanks) => (
                                        <option value={allBanks} key={allBanks}>
                                            {allBanks}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="filter-bar__section__option">

                                <label className="filter-bar__section__label label" htmlFor="bankType">
                                    <span>Bankentyp</span>
                                    <div data-overlay-opener="" data-position="right" data-title="Wie unterscheiden sich Bankentypen?" data-text="Direktbanken besitzen in der Regel keine Filialen (in Ausnahmen vereinzelte Filialen). Filialbanken hingegen verfügen über ein eigenes Filialnetz (mind. 1 Filiale).">
                                        <span className="filter-bar__section__help-icon"></span>
                                    </div>
                                </label>

                                <div className="select-replace" data-select-replace="">
                                    <div className="select-replace__selected-option">

                                        <input type="hidden" value="ALL_BANKS" name="bankType" id="bankType" data-tracking-item="Bankentyp" />
                                        <span className="select-replace__label select-replace__label--default">alle Banken</span>

                                    </div>
                                    <div className="select-replace__dropdown">
                                        <div className="select-replace__dropdown__option" data-option-value="ALL_BANKS" data-option-default="true">
                                            <span className="select-replace__label">alle Banken</span>

                                        </div>
                                        <div className="select-replace__dropdown__option" data-option-value="DIRECT_BANKS" data-option-default="false">
                                            <span className="select-replace__label">Direktbanken</span>

                                        </div>
                                        <div className="select-replace__dropdown__option" data-option-value="BRANCH_BANKS" data-option-default="false">
                                            <span className="select-replace__label">Filialbanken</span>

                                        </div>
                                        <div className="select-replace__dropdown__option" data-option-value="REGIONAL_BANKS" data-option-default="false">
                                            <span className="select-replace__label">Regionalbanken</span>

                                        </div>
                                    </div>
                                </div>
                            </div>








                        </div>



                    </div>
                    <div className="filter-bar__section  " data-filter-type="filters" data-collapse="false">






                        <div className="filter-bar__section__header">


                            <label className="filter-bar__section__label label" htmlFor="accountManagementFee">
                                <span>Jährliche Kontoführungsgebühr</span>
                                <div data-overlay-opener="" data-position="right" data-title="Was bedeutet Kontoführung?" data-text="Manche Banken verlangen eine Grundgebühr für die Führung des Kontos.">
                                    <span className="filter-bar__section__help-icon"></span>
                                </div>
                            </label>
                        </div>
                        <div className="filter-bar__section__content">

                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="0 € ohne Bedingungen">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="1" id="accountManagementFee-1" name="accountManagementFee" data-tracking-item="Jährliche Kontoführungsgebühr - Value: 0 € ohne Bedingungen" />
                                    <label className="checkbox__label" htmlFor="accountManagementFee-1">
                                        <div className="checkbox__label__text">
                                            <span>0 € ohne Bedingungen</span>
                                        </div>
                                    </label>
                                </div>
                            </div>




                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="0 € mit Bedingungen">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="2" id="accountManagementFee-2" name="accountManagementFee" data-tracking-item="Jährliche Kontoführungsgebühr - Value: 0 € mit Bedingungen" />
                                    <label className="checkbox__label" htmlFor="accountManagementFee-2">
                                        <div className="checkbox__label__text">
                                            <span>0 € mit Bedingungen</span>
                                        </div>
                                    </label>
                                </div>
                            </div>




                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Kostenpflichtig">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="3" id="accountManagementFee-3" name="accountManagementFee" data-tracking-item="Jährliche Kontoführungsgebühr - Value: Kostenpflichtig" />
                                    <label className="checkbox__label" htmlFor="accountManagementFee-3">
                                        <div className="checkbox__label__text">
                                            <span>Kostenpflichtig</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-bar__section  " data-filter-type="filters" data-collapse="false">
                        <div className="filter-bar__section__header">
                            <label className="filter-bar__section__label label" htmlFor="solvencyCheck">
                                <span>Bonitätsprüfung</span>
                                <div data-overlay-opener="" data-position="right" data-title="Bonitätsprüfung" data-text="Die meisten Banken führen Bonitätsprüfungen über die SCHUFA durch.">
                                    <span className="filter-bar__section__help-icon"></span>
                                </div>
                            </label>



                        </div>

                        <div className="filter-bar__section__content">

                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Ohne Schufaprüfung">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="withoutSchufa" id="solvencyCheck-withoutSchufa" name="solvencyCheck" data-tracking-item="Bonitätsprüfung - Value: Ohne Schufaprüfung" />
                                    <label className="checkbox__label" htmlFor="solvencyCheck-withoutSchufa">
                                        <div className="checkbox__label__text">
                                            <span>Ohne Schufaprüfung</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="filter-bar__section  " data-filter-type="filters" data-collapse="false">
                        <div class="filter-bar__section__header">
                            <label class="filter-bar__section__label label" htmlFor="openingProcess">
                                <span>Eröffnungsprozess</span>
                                <div data-overlay-opener="" data-position="right" data-title="Eröffnungsprozess" data-text="Viele Produkte sind bei CHECK24 100% digital und umweltfreundlich abschließbar - ohne Ausdrucken und Unterschreiben von Anträgen und per Video-Legitimierung. Abhängig ist dies von der Bank, der Anzahl der Kontoinhaber und der Nationalität.">
                                    <span class="filter-bar__section__help-icon"></span>
                                </div>
                            </label>
                        </div>
                        <div class="filter-bar__section__content">
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Antrag ohne Unterschrift">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" class="checkbox__input" value="contractWithoutSignature" id="openingProcess-contractWithoutSignature" name="openingProcess" data-tracking-item="Eröffnungsprozess - Value: Antrag ohne Unterschrift" />
                                    <label className="checkbox__label" htmlFor="openingProcess-contractWithoutSignature">
                                        <div className="checkbox__label__text">
                                            <span>Antrag ohne Unterschrift</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Legitimierung via VideoIdent">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="videoIdentProvided" id="openingProcess-videoIdentProvided" name="openingProcess" data-tracking-item="Eröffnungsprozess - Value: Legitimierung via VideoIdent" />
                                    <label className="checkbox__label" htmlFor="openingProcess-videoIdentProvided">
                                        <div className="checkbox__label__text">
                                            <span>Legitimierung via VideoIdent</span>
                                        </div>
                                    </label>
                                </div>
                            </div>




                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="CHECK24 Digitaler Kontoumzug">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="ch24Ars" id="openingProcess-ch24Ars" name="openingProcess" data-tracking-item="Eröffnungsprozess - Value: CHECK24 Digitaler Kontoumzug" />
                                    <label className="checkbox__label" htmlFor="openingProcess-ch24Ars">
                                        <div className="checkbox__label__text">
                                            <span>CHECK24 Digitaler Kontoumzug</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-bar__section  filter-bar__section--collapse-active" data-filter-type="filters" data-collapse="false">
                        <div className="filter-bar__section__content">
                            <div className="filter-bar__section__option">
                                <label className="filter-bar__section__label label" htmlFor="creditInterest">
                                    <span>Dispozins</span>
                                    <div data-overlay-opener="" data-position="right" data-title="Was bedeutet Dispozins?" data-text="Der Dispozins fällt für die Überziehung Ihres Kontos im Rahmen des eingeräumten Dispos an.">
                                        <span className="filter-bar__section__help-icon"></span>
                                    </div>
                                </label>
                                <div className="select-replace" data-select-replace="">
                                    <div className="select-replace__selected-option">
                                        <input type="hidden" value="ALL" name="creditInterest" id="creditInterest" data-tracking-item="Dispozins" />
                                        <span className="select-replace__label select-replace__label--default">beliebig</span>
                                    </div>
                                    <div className="select-replace__dropdown">
                                        <div className="select-replace__dropdown__option" data-option-value="ALL" data-option-default="true">
                                            <span className="select-replace__label">beliebig</span>
                                        </div>
                                        <div className="select-replace__dropdown__option" data-option-value="UNDER_10" data-option-default="false">
                                            <span className="select-replace__label">unter 10%</span>
                                        </div>
                                        <div className="select-replace__dropdown__option" data-option-value="ABOVE_10" data-option-default="false">
                                            <span className="select-replace__label">über 10%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-bar__section" data-filter-type="filters" data-collapse="false">
                        <div className="filter-bar__section__header">
                            <label className="filter-bar__section__label label" htmlFor="withdrawMoney">
                                <span>Kostenlose Bargeldabhebung</span>
                                <div data-overlay-opener="" data-position="right" data-title="Wo möchten Sie kostenlos Geld abheben?" data-text="Hier können Sie auswählen, an welchen Geldautomaten in Deutschland Sie kostenlos Geld abheben möchten. Je nach Bank ist die Abhebung entweder mit Girocard oder mit Kreditkarte kostenfrei. Manche Banken schränken die Anzahl der Abhebungen ein. Informationen dazu finden Sie in den Produktdetails.">
                                    <span className="filter-bar__section__help-icon"></span>
                                </div>
                            </label>
                        </div>
                        <div class="filter-bar__section__content">
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Weltweit">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="4" id="withdrawMoney-4" name="withdrawMoney" data-tracking-item="Kostenlose Bargeldabhebung - Value: Weltweit" />
                                    <label className="checkbox__label" htmlFor="withdrawMoney-4">
                                        <div className="checkbox__label__text">
                                            <span>Weltweit</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Euroweit">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="5" id="withdrawMoney-5" name="withdrawMoney" data-tracking-item="Kostenlose Bargeldabhebung - Value: Euroweit" />
                                    <label className="checkbox__label" htmlFor="withdrawMoney-5">
                                        <div className="checkbox__label__text">
                                            <span>Euroweit</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Deutschlandweit - VISA">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="200183" id="withdrawMoney-200183" name="withdrawMoney" data-tracking-item="Kostenlose Bargeldabhebung - Value: Deutschlandweit - VISA" />
                                    <label className="checkbox__label" htmlFor="withdrawMoney-200183">
                                        <div className="checkbox__label__text">
                                            <span>Deutschlandweit - VISA</span>
                                            <span className="checkbox__label__additional">(57.763 Automaten)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Deutschlandweit - MasterCard">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="200185" id="withdrawMoney-200185" name="withdrawMoney" data-tracking-item="Kostenlose Bargeldabhebung - Value: Deutschlandweit - MasterCard" />
                                    <label className="checkbox__label" htmlFor="withdrawMoney-200185">
                                        <div className="checkbox__label__text">
                                            <span>Deutschlandweit - MasterCard</span>
                                            <span className="checkbox__label__additional">(57.763 Automaten)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Sparkassen-Verbund">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="3" id="withdrawMoney-3" name="withdrawMoney" data-tracking-item="Kostenlose Bargeldabhebung - Value: Sparkassen-Verbund" />
                                    <label className="checkbox__label" htmlFor="withdrawMoney-3">
                                        <div className="checkbox__label__text">
                                            <span>Sparkassen-Verbund</span>
                                            <span className="checkbox__label__additional">(23.574 Automaten)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="BankCard ServiceNetz">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" class="checkbox__input" value="7" id="withdrawMoney-7" name="withdrawMoney" data-tracking-item="Kostenlose Bargeldabhebung - Value: BankCard ServiceNetz" />
                                    <label className="checkbox__label" htmlFor="withdrawMoney-7">
                                        <div className="checkbox__label__text">
                                            <span>BankCard ServiceNetz</span>
                                            <span className="checkbox__label__additional">(17.300 Automaten)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Cash Group">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="2" id="withdrawMoney-2" name="withdrawMoney" data-tracking-item="Kostenlose Bargeldabhebung - Value: Cash Group" />
                                    <label className="checkbox__label" htmlFor="withdrawMoney-2">
                                        <div className="checkbox__label__text">
                                            <span>Cash Group</span>
                                            <span className="checkbox__label__additional">(7.000 Automaten)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="CashPool">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="1" id="withdrawMoney-1" name="withdrawMoney" data-tracking-item="Kostenlose Bargeldabhebung - Value: CashPool" />
                                    <label className="checkbox__label" htmlFor="withdrawMoney-1">
                                        <div className="checkbox__label__text">
                                            <span>CashPool</span>

                                            <span className="checkbox__label__additional">(2.800 Automaten)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Cardpoint (Postbank)">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="200263" id="withdrawMoney-200263" name="withdrawMoney" data-tracking-item="Kostenlose Bargeldabhebung - Value: Cardpoint (Postbank)" />
                                    <label className="checkbox__label" htmlFor="withdrawMoney-200263">
                                        <div className="checkbox__label__text">
                                            <span>Cardpoint (Postbank)</span>

                                            <span className="checkbox__label__additional">(1.000 Automaten)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="filter-bar__section filter-bar__section--collapse " data-filter-type="filters" data-collapse="true">

                        <div className="filter-bar__section__header">

                            <label className="label">Weitere Filter</label>

                        </div>
                        <div className="filter-bar__section__content">

                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Kostenlose Kreditkarte">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" class="checkbox__input" value="freeCc" id="moreFilters-freeCc" name="moreFilters" data-tracking-item="Weitere Filter - Value: Kostenlose Kreditkarte" />
                                    <label className="checkbox__label" htmlFor="moreFilters-freeCc">
                                        <div className="checkbox__label__text">
                                            <span>Kostenlose Kreditkarte</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Kostenlose Partnerkarte">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" className="checkbox__input" value="freePartnerCard" id="moreFilters-freePartnerCard" name="moreFilters" data-tracking-item="Weitere Filter - Value: Kostenlose Partnerkarte" />
                                    <label className="checkbox__label" htmlFor="moreFilters-freePartnerCard">
                                        <div className="checkbox__label__text">
                                            <span>Kostenlose Partnerkarte</span>
                                            <span className="checkbox__label__additional">(Girocard)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Kostenlose Bargeldeinzahlung">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" class="checkbox__input" value="freeCashDeposit" id="moreFilters-freeCashDeposit" name="moreFilters" data-tracking-item="Weitere Filter - Value: Kostenlose Bargeldeinzahlung" />
                                    <label className="checkbox__label" htmlFor="moreFilters-freeCashDeposit">
                                        <div className="checkbox__label__text">
                                            <span>Kostenlose Bargeldeinzahlung</span>
                                            <span className="checkbox__label__additional">(mit/ohne Bedingungen)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Nur Konten mit Bonus">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" class="checkbox__input" value="onlyProdWithBonus" id="moreFilters-onlyProdWithBonus" name="moreFilters" data-tracking-item="Weitere Filter - Value: Nur Konten mit Bonus" />
                                    <label className="checkbox__label" htmlFor="moreFilters-onlyProdWithBonus">
                                        <div className="checkbox__label__text">
                                            <span>Nur Konten mit Bonus</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="filter-bar__section__option" data-filter-option="" data-no-submit="false" data-filter-label="Girokonto mit Guthabenzins">
                                <div className="checkbox">
                                    <input type="checkbox" data-filter-option-checkbox="" class="checkbox__input" value="depositInterest" id="moreFilters-depositInterest" name="moreFilters" data-tracking-item="Weitere Filter - Value: Girokonto mit Guthabenzins" />
                                    <label className="checkbox__label checkbox__label--disabled checkbox__label--no-pointer-events" htmlFor="moreFilters-depositInterest">
                                        <div className="checkbox__label__text">
                                            <span>Girokonto mit Guthabenzins</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-bar__section">
                        <a className="filter-bar__reset" data-filter-reset="">Filter zurücksetzen</a>
                    </div>
                </div>
            </form>





        </>
    )
};

export default FilterBar;
