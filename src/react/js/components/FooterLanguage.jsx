import { useState, useEffect } from "react"
import FooterLanguagesDropdown from "./FooterLanguagesDropdown";
import { FaGlobe } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";


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
            <span className="globe"><FaGlobe /></span>Language: {currentLanguage} <span className="arrow"><RiArrowDownSFill /></span>
            </button>
        { dropdownVisible && (
            <FooterLanguagesDropdown changeLanguage={changeLanguage} />
        ) } 
        
        </div>
        </>
    )
}

export default FooterLanguage