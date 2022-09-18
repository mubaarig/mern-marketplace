import React from 'react'

const CurrentAccountItem = ({ item }) => {
    return (
        <>
          
            <div className="product-panel" data-product="${vm.frontendModule.name()}" id="210501">
                <div className="promotion-ribbon">
                    <div data-overlay-opener="" data-title="Empfehlung Smartphone-Bank" data-text="Die C24-Bank bietet modernes Banking in einer sehr gut bewerteten App. Das Smartkonto punktet durch dauerhaft kostenlose Kontoführung, kostenlose Girocard (bei aktiver Kontonutzung) und MasterCard Debit und 50 € Exklusivbonus für Neukunden." data-position="top-right" data-modifier="overlay--wide" data-tracking-item="Empfehlung  - C24 Bank - Smartkonto">
                        <div className="promotion-ribbon__inner">
                            <div className="promotion-ribbon__inner__text">Empfehlung <span className="promotion-ribbon__inner__text promotion-ribbon__inner__text--secondary">Smartphone-Bank </span>
                            </div>
                            <div className="promotion-ribbon__inner__icon"></div>
                            <div className="promotion-ribbon__inner__edge-right"></div>
                        </div>
                    </div>
                </div>
                <div className="product-panel__title">

                    <span className="product-panel__title__counter product-panel__title__counter--highlighted">{item["id"]} </span>
                    <span className="product-panel__title__text product-panel__title__text--small">{item["accountType"]}</span>
                    <span className="product-panel__title__text product-panel__title__text--thin"></span>
                </div>
                <div className="product-panel__details">
                    <div className="product-panel__item product-panel__item--logo">
                        <div className="product-panel__item__logo">
                            <img src={item["logo"]} alt="Smartkonto" title="Smartkonto" />

                        </div>

                        <div className="product-panel__sustainability-wrapper">


                            <div className="product-panel__sustainability" data-overlay-opener="" data-text="Die C24 Bank kompensiert ihren CO2-Ausstoß über Kompensationsprojekte in Partnerschaft mit ClimatePartner nicht nur zu 100% - sondern zu 110%. Zudem arbeitet die Bank stetig an der generellen Reduktion ihrer CO2-Bilanz." data-position="bottom" data-tracking-item="Sustainability - C24 Bank - Smartkonto">
                                <img className="product-panel__sustainability-img" src="https://konten.c24static.de/accounts/static/sustainability/climate-positive.svg" />
                                <span className="product-panel__sustainability-icon"></span>
                            </div>
                        </div>

                        <div className="product-panel__bottom-line">
                            <div className="product-panel__points-wrapper">
                                <div data-overlay-opener="" data-text="Bei CHECK24 sammeln Sie Punkte bei Abschlüssen, Buchungen und Bestellungen. Um die 200 Punkte (= 2 €) zu sichern, melden Sie sich in Ihrem Kundenkonto einfach zum Punkte Programm an." data-position="bottom" data-tracking-item="Check24 Points - C24 Bank - Smartkonto">
                                    <img className="product-panel__points" src="https://konten.c24static.de/accounts/static/c24-points/c24_points_200.png" />
                                </div>
                            </div>
                            <div className="mobile-payment-logos__wrapper">
                                <div className="mobile-payment-logos">

                                    <div className="mobile-payment-logos__logo-wrapper">
                                        <div data-overlay-opener="" data-position="bottom-right" data-text="Die Kreditkarte, die Sie zu diesem Girokonto dazubekommen, können Sie bei Apple Pay (Bezahldienst von Apple) einbinden. Somit haben Sie die Möglichkeit Ihr iPhone zum Bezahlen Ihrer Einkäufe zu nutzen. Die mit Ihrem iPhone bezahlten Umsätze werden dann mit Ihrer Kreditkarte abgerechnet." data-tracking-item="Mobile payment logo - C24 Bank - Smartkonto">
                                            <img className="mobile-payment-logos__logo" src="https://konten.c24static.de/accounts/static/mobilepayment/applepay.png" />
                                        </div>
                                    </div>

                                    <div className="mobile-payment-logos__logo-wrapper">
                                        <div data-overlay-opener="" data-position="bottom-right" data-text="Die Kreditkarte, die Sie zu diesem Girokonto dazubekommen, können Sie bei Google Pay (Bezahldienst von Google) einbinden. Somit haben Sie die Möglichkeit Ihr Smartphone zum Bezahlen Ihrer Einkäufe zu nutzen. Die mit Ihrem Smartphone bezahlten Umsätze werden dann mit Ihrer Kreditkarte abgerechnet." data-tracking-item="Mobile payment logo - C24 Bank - Smartkonto">
                                            <img className="mobile-payment-logos__logo" src="https://konten.c24static.de/accounts/static/mobilepayment/googlepay.png" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-panel__item product-panel__item--grade">
                        <div data-position="bottom" className="overlay-opener" data-modifier="overlay--grade overlay--grade" data-bank-name="C24 Bank" data-efeedback-counts="1.805" data-efeedback-stars="4,5" data-product-id="210501" data-product-name="girokonto" data-grade-description="Testsieger" data-product-title="Smartkonto" data-tracking-item="Grade for C24 Bank - Smartkonto" data-grade-overlay="true">
                            <div className="grade grade--winner ">
                                <span className="grade__value">1,2</span>
                                <span className="grade__type">Kontonote</span>
                                <span className="grade__description">Testsieger</span>
                                <div className="spinner spinner--grades">
                                    <div className="spinner__icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-panel__item product-panel__item--atm-count-labels">
                        <div className="product-panel__item-row">
                            <div className="product-panel__sub-item product-panel__sub-item--atm-count">
                                <div className="atm-count">
                                    <div data-overlay-opener="" data-position="top" data-text="<h3>Kostenlose Bargeldabhebung</h3>Mit der Mastercard Debit 4 kostenlose Abhebungen monatlich an 57.763 Automaten in Deutschland sowie im gesamten Europäischen Wirtschaftsraum (aktive Kontonutzung vorausgesetzt)">
                                        <p className="atm-count__value">
                                            <span className="atm-count__value__text atm-count__value__text--overlay">57.763</span>
                                        </p>
                                        <p className="atm-count__description">Automaten in Deutschland für <b>kostenloses</b> Abheben</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-panel__sub-item product-panel__sub-item--assets-deposit-interest">
                                <div className="deposit-interest">
                                    <div data-overlay-opener="" data-position="top" data-text="<h3>Dispozins</h3>
Dispositionszinsen fallen an, wenn das Girokonto überzogen wird. Das C24 Bank Smartkonto bietet einen variablen Sollzinssatz von derzeit 7,49% p.a. (Bonität vorrausgesetzt)">
                                        <p className="deposit-interest__value">
                                            <span className="deposit-interest__value__text deposit-interest__value__text--with-overlay">7,49%</span>
                                        </p>
                                        <p className="deposit-interest__description">
                                            <span>Dispozins</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="assets-interest">
                                    <p className="assets-interest__description">
                                        <span>kein<br />Negativzins</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="product-panel__item-row product-panel__item-row--atm-count-labels">
                            <div className="product-panel__sub-item">
                                <div className="kill-label__wrapper">

                                    <div data-overlay-opener="" data-position="bottom" data-modifier="overlay--wide" data-title="Mittlere Abschlusschance" data-text="Die Bank führt eine Bonitätsprüfung durch und entscheidet über Ihre Kontoeröffnung. Bei diesem Konto ist die Abschlusschance mittel, d.h. es ist ein ausgeglichenes Verhältnis von Eröffnungen und Ablehnungen.">

                                        <div className="kill-label">

                                            <div className="kill-label__text kill-label__text--acceptence-likelihood-middle-rate ">Mittlere Abschlusschance</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-panel__item product-panel__item--account-fees">
                        <div>
                            <div className="account-fees">
                                <div className="account-fees__row">
                                    <div className="account-fees__values">

                                        <span className="account-fees__values__current-value">0 €</span>
                                    </div>
                                    <div className="account-fees__description">

                                        <div data-overlay-opener="" data-position="top-left" data-text="<h3>Kontogebühr</h3>Dieses Girokonto ist gebührenfrei, unabhängig von der Nutzung des Kontos">
                                            <span className="account-fees__description__text account-fees__description__text--with-overlay">Monatliche Kontogebühr</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="account-fees">
                                <div className="account-fees__row">
                                    <div className="account-fees__values">

                                        <span className="account-fees__values__current-value">0 €</span>
                                    </div>
                                    <div className="account-fees__description">

                                        <div data-overlay-opener="" data-position="top-left" data-text="<h3>Kreditkartengebühr</h3>Für das Smartkonto bietet die C24 Bank eine kostenlose Mastercard Debit an">
                                            <span className="account-fees__description__text account-fees__description__text--with-overlay">Kreditkartengebühr</span>
                                        </div>
                                    </div>
                                    <div className="account-fees__card-logo">
                                        <div data-overlay-opener="" data-position="top-left" data-text="<h3>MasterCard</h3>Die Bank bietet eine MasterCard an.">
                                            <img className="account-fees__card-logo__image" src="https://konten.c24static.de/accounts/static/cardsystem/mastercard.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="account-bonuses">
                            <div className="account-bonuses__labels">
                                <div className="kill-label__wrapper">
                                    <div data-overlay-opener="" data-position="top-left" data-text="<h3>Bonus</h3>Als Neukunde erhalten Sie 50 € Startguthaben bei erfolgreicher Kontoeröffnung. Details zu den Bedingungen finden Sie unter „Details“ und dann „Erträge &amp; Dokumente“.">
                                        <div className="kill-label">
                                            <div className="kill-label__text kill-label__text--bank-cashback-bonus ">Exklusiv</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="kill-label__wrapper">
                                    <div data-overlay-opener="" data-position="top-left" data-text="<h3>Cashback</h3>Mit dem C24 Smartkonto sammeln Sie für alle Kartenumsätze Punkte, die in Bargeld ausgezahlt werden können. Der Basis-Cashback beträgt 0,05% Ihres Einkaufswertes. Bei Exklusivpartnern sind bis zu 2,5% Cashback möglich. Der maximale Cashback beträgt 100 € pro Monat. Details zu den Konditionen finden Sie unter „Details“ und dann „Erträge &amp; Dokumente“.">
                                        <div className="kill-label">
                                            <div className="kill-label__text kill-label__text--bank-cashback-bonus ">Cashback</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="account-bonuses__descriptions">
                                <div className="account-bonuses__description">
                                    <span className="">Sofortguthaben:</span>
                                    <div className="account-bonuses__value-wrapper">
                                        <span className="account-bonuses__value">50 €</span>
                                    </div>
                                </div>
                                <div className="account-bonuses__description">
                                    <span className="">Geld-zurück:</span>
                                    <div className="account-bonuses__value-wrapper">
                                        <span className="account-bonuses__value">0,05% - 2,5%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-promo-label product-promo-label--bonus-guarantee">
                            <div data-overlay-opener="" data-position="left" data-modifier="overlay--wide" data-title="CHECK24 Garantie: Nirgendwo besser" data-text="Wenn Sie bei einer Bank oder einem Girokonto Vermittler ein besseres Girokontoangebot (Eröffnungsbonus, Produkteigenschaften) finden als bei CHECK24, bieten wir Ihnen das Produkt zu denselben Konditionen an. Zusätzlich zahlen wir Ihnen 25 €, sofern Sie dieses Girokonto über CHECK24 abschließen. Details finden Sie <a href=&quot;https://www.check24.de/girokonto/nirgendwo-besser-garantiebedingungen//&quot; target=&quot;_blank&quot; tabindex=&quot;-1&quot;>hier</a>" data-tracking-item="Check24 Garantie: Nirgendwo besser - C24 Bank - Smartkonto">
                                <div className="product-promo-label__contents product-promo-label__contents--bonus-guarantee">
                                    <div className="product-promo-label__contents__text product-promo-label__contents__text--bonus-guarantee">
                                        <div className="product-promo-label__logo-c24">Garantie:</div>
                                        Nirgendwo besser
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-panel__controls">
                    <div className="checkbox checkbox--comparison" data-comparison-checkbox="">
                        <input type='checkbox' className='checkbox__input' name='pid' id='product-id-210501' value="210501" data-id="210501"
                            data-image="https://konten.c24static.de/accounts/static/banklogos/all/c24bank.png" data-text="Smartkonto" data-name="giro"
                            data-bank-name="C24 Bank" data-tracking-item="C24 Bank - Smartkonto"
                        />
                        <label className='checkbox__label' htmlFor='product-id-210501'>
                            <div className="checkbox__label__text">
                                <span>Girokonto vergleichen</span>
                            </div>
                        </label>
                    </div>
                    <div className="product-panel__controls__tabs" data-cookie-drop="" data-product-id="210501">
                        <div className="product-panel__tabs-item product-panel__tabs-item--with-gap-small
             "data-target="details" data-printable="true" data-init-product-panel-tab="" data-closeable="true" data-wrapper-className="product-panel" data-url="/accounts/r/frs/productInfo/giro/210501?applicantNumber=ALL" data-tracking-item="Details Tab - C24 Bank - Smartkonto">
                            Details
                            <span className="product-panel__tabs-arrow"></span>
                        </div>
                        <div className="product-panel__tabs-item product-panel__tabs-item--efeedback" data-target="rating" data-closeable="true" data-init-product-panel-tab="" data-wrapper-className="product-panel" data-url="/accounts/r/frs/efeedback/giro/51" data-bank-name="C24 Bank" data-tracking-item="Feedback Tab - C24 Bank - Smartkonto">
                            <div className="overlay-opener overlay-opener--feedback" data-feedback-overlay="" data-modifier="overlay--feedback" data-position="top" data-url="/accounts/r/frs/efeedback/giro/51" data-bank-name="C24 Bank" data-tracking-item="Feedback Tab - C24 Bank - Smartkonto">
                                <div className="efeedback__rating">
                                    <span className="efeedback__rating__star efeedback__rating__star--full"></span>
                                    <span className="efeedback__rating__star efeedback__rating__star--full"></span>
                                    <span className="efeedback__rating__star efeedback__rating__star--full"></span>
                                    <span className="efeedback__rating__star efeedback__rating__star--full"></span>
                                    <span className="efeedback__rating__star efeedback__rating__star--half"></span>
                                </div>
                                <span className="efeedback__rating__number">(1.805)</span>
                            </div>
                            <span className="product-panel__tabs-arrow"></span>
                        </div>
                        <div className="product-panel__tabs-item product-panel__tabs-item--digital" data-target="thumb" data-closeable="true" data-wrapper-className="product-panel" data-init-product-panel-tab="" data-url="/accounts/r/frs/openingProcess/giro/210501/DESKTOP?applicantNumber=ALL" data-tracking-item="Opening Process Tab - C24 Bank - Smartkonto">
                            <span>Einfachste Eröffnung</span><span className="product-panel__tabs-arrow"></span>
                        </div>
                    </div>
                    <div className="product-panel__controls__button">
                        <a className="button" href="https://finanzen.check24.de/accounts/d/daf-entry/giro?productNames=c24bank-smart-girokonto-resumable&amp;BANK_PRODUCT_ID=210501&amp;cpid=ch24_f_hp_tc24_2&amp;wpset=ch24_hp_tc24_2&amp;b2bid=50&amp;deviceoutput=desktop" target="_self" data-tracking-item="C24 Bank - Smartkonto">weiter</a>
                    </div>
                </div>
                <div className="product-panel__tabs-content" data-content-type="details">
                    <div className="spinner spinner--centered spinner--small">
                        <div className="spinner__icon"></div>
                    </div>
                </div>
                <div className="product-panel__tabs-content" data-content-type="rating">
                    <span className="product-panel__close-icon" data-close-button=""></span>
                    <div className="product-panel__wrapper">
                        <div className="spinner spinner--centered spinner--small">
                            <div className="spinner__icon"></div>
                        </div>
                    </div>
                </div>
                <div className="product-panel__tabs-content" data-content-type="thumb">
                    <div className="spinner spinner--centered spinner--small">
                        <div className="spinner__icon"></div>
                    </div>
                </div>

            </div>
            <br />
        </>
    );
}

export default CurrentAccountItem;