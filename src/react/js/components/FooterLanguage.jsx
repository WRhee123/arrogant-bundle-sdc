import { useState, useEffect } from "react"
import FooterLanguagesDropdown from "./FooterLanguagesDropdown";

const FooterLanguage = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("English")

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
    }

    const handleButtonClick = (e) => {
        setDropdownVisible(!dropdownVisible);
    };


    return (
        <>
        <div className="language-dropdown-container">
            <button onClick={handleButtonClick} className="js-language-dropdown">
            Language: {currentLanguage}
            </button>
        { dropdownVisible && (
            <FooterLanguagesDropdown changeLanguage={changeLanguage} />
        ) } 
        
        </div>
        </>
    )
}

export default FooterLanguage