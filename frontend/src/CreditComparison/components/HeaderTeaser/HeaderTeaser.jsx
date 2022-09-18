import React, { useState, useEffect } from 'react'
import './HeaderTeaser.css';

const HeaderTeaser = props => {

    const [teasHeader, setteasHeader] = useState(props.teasHeader);
    const [text, setText] = useState(props.text);
    const [teasHeaderText, setTeasHeaderText] = useState(props.teasHeaderText);
    const [ekomiItemText, seEkomiItemText] = useState(props.ekomiItemText);

    return (
        <div className="teaser-wrapper">
            <div className="teaser">
                <div className="teaser__content">
                    <h1 className="teaser__content__headline">{teasHeader}</h1>
                    <p className="teaser__content__text">{text}</p>
                </div>
                <div className="teaser__reviews">
                    <div className="teaser__ekomi">
                        <div className="ekomi">
                            <div className="ekomi__logo"></div>
                            <div className="ekomi__text">
                                <div className="ekomi__text__item">{ekomiItemText}</div>
                                <div className="ekomi__rating">
                                    <div className="ekomi__rating__stars">
                                        <div className="ekomi__rating__stars__row">
                                            <span className="ekomi__rating__stars__icon"></span>
                                            <span className="ekomi__rating__stars__icon"></span>
                                            <span className="ekomi__rating__stars__icon"></span>
                                            <span className="ekomi__rating__stars__icon"></span>
                                            <span className="ekomi__rating__stars__icon"></span>
                                        </div>
                                        <div className="ekomi__rating__stars__row" style={{ width: "98.0%" }}>
                                            <span className="ekomi__rating__stars__icon ekomi__rating__stars__icon--full"></span>
                                            <span className="ekomi__rating__stars__icon ekomi__rating__stars__icon--full"></span>
                                            <span className="ekomi__rating__stars__icon ekomi__rating__stars__icon--full"></span>
                                            <span className="ekomi__rating__stars__icon ekomi__rating__stars__icon--full"></span>
                                            <span className="ekomi__rating__stars__icon ekomi__rating__stars__icon--full"></span>
                                        </div>
                                    </div>
                                    <span className="ekomi__rating__counter"><strong>4,9</strong> / 5</span>
                                </div>
                                <div className="ekomi__text__item"><span>21.184</span> Bewertungen</div>
                            </div>
                        </div>
                    </div>
                    <div className="certificate-list">
                        <div className="certificate-list__item">

                            <div className="overlay overlay--wide overlay--certificates ">
                                <div data-overlay-opener="" data-modifier="overlay--wide overlay--certificates" data-position="bottom-left" data-title="Die 100% Funktioniert-Garantie" data-text="Mit unserer kostenlosen CHECK24 Kontoumzug Funktioniert-Garantie versprechen wir Ihnen einen reibungslosen Girokonto-Umzug. Sollten Ihnen im Rahmen des Girokonto-Umzugs Gebühren entstehen (zum Beispiel aufgrund einer Lastschriftrückbuchung oder Mahnung), so übernimmt CHECK24 diese Kosten für Sie. Des Weiteren empfehlen wir Ihnen, beide Girokonten 3 Monate lang parallel laufen zu lassen (inklusive ausreichend Guthaben auf beiden Konten). Auf Wunsch übernimmt CHECK24 daher bis zu 3 Monate die Kontoführungsgebühren für Ihr altes Girokonto. Eine Einladung mit dem Link zum Digitalen Kontoumzug erhalten Sie wenige Tage nach erfolgreicher Antragstellung per E-Mail. <a href=&quot;https://www.check24.de/girokonto/funktioniert-garantiert-bedingungen/&quot; target=&quot;_blank&quot; tabIndex=&quot;-1&quot;>Details</a>">
                                    <img className="certificate-image" src="https://konten.c24static.de/accounts/static/partnerlogos/check24guarantee.png" />
                                    <div className="overlay__inner">
                                        <div className="overlay__content" data-position="bottom-left">
                                            <h3 className="overlay__content__title">Die 100% Funktioniert-Garantie</h3>
                                            <span className="overlay__content__text">Mit unserer kostenlosen CHECK24 Kontoumzug Funktioniert-Garantie versprechen wir Ihnen einen reibungslosen Girokonto-Umzug. Sollten Ihnen im Rahmen des Girokonto-Umzugs Gebühren entstehen (zum Beispiel aufgrund einer Lastschriftrückbuchung oder Mahnung), so übernimmt CHECK24 diese Kosten für Sie. Des Weiteren empfehlen wir Ihnen, beide Girokonten 3 Monate lang parallel laufen zu lassen (inklusive ausreichend Guthaben auf beiden Konten). Auf Wunsch übernimmt CHECK24 daher bis zu 3 Monate die Kontoführungsgebühren für Ihr altes Girokonto. Eine Einladung mit dem Link zum Digitalen Kontoumzug erhalten Sie wenige Tage nach erfolgreicher Antragstellung per E-Mail. <a href="https://www.check24.de/girokonto/funktioniert-garantiert-bedingungen/" target="_blank" tabIndex="-1">Details</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="certificate-list__item">
                            <div data-overlay-opener="" data-modifier="overlay--wide overlay--certificates" data-position="bottom-left" data-title="CHECK24 vom T&amp;Uuml;V Saarland zum sechsten Mal in Folge mit Bestnote ausgezeichnet" data-text="CHECK24 darf sich 2020 über das Siegel TÜV Kundenzufriedenheit mit der Note &quot;sehr gut&quot; freuen. In der alle zwei Jahre stattfindenden Kundenbefragung des TÜV Saarland wurden unsere Website und unser Service schon sechsmal in Folge mit der Bestnote bewertet.
        So funktioniert die Zertifizierung: Der TÜV Saarland verschickt einen Fragebogen an die Kunden des zu prüfenden Unternehmens. Diese werden unter anderem zur Qualität der Website (z.B. Gestaltung und Informationsumfang, Quantität und Qualität der Vergleichsangebote, Einfachheit des Wechsels) und zur Servicequalität (z.B. Kontaktmöglichkeiten, telefonische Erreichbarkeit, Freundlichkeit und Kompetenz der Mitarbeiter, Reaktionsgeschwindigkeit bei Anfragen) befragt. Die für die Kunden wichtigsten Punkte sind in der Gesamtwertung besonders berücksichtigt.
        Weitere Informationen finden Sie <a href=&quot;https://www.check24.de/geldanlage/sl/festgeld-vergleichen/tuev/&quot; target=&quot;_blank&quot; tabIndex=&quot;-1&quot;>hier</a>.
        
        Das Zertifikat wurde erteilt von:
        TÜV Saarland Holding GmbH
        Am TÜV 1
        66280 Sulzbach / Saar
        Weitere Informationen erhalten Sie <a href=&quot;https://www.tuev-saar.de/zertifikat/sc44316/&quot; target=&quot;_blank&quot; tabIndex=&quot;-1&quot;>hier</a>">
                                <img className="certificate-image" src="https://konten.c24static.de/ga-vergleich/static/partnerlogos/tuev.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeaderTeaser;

