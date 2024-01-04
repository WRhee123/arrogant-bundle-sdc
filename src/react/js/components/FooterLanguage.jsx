import { useState, useEffect } from "react"
import FooterLanguagesDropdown from "./FooterLanguagesDropdown";

const FooterLanguage = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleButtonClick = (e) => {
        setDropdownVisible(true);
    };

    const handleOutsideClick = (e) => {
        console.log(e.target.value)
        if (!e.target.matches('.js-language-dropdown')) {

        setDropdownVisible(false);
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('click', handleOutsideClick);

        // Cleanup the event listener when the component unmounts
        return () => {
        window.removeEventListener('click', handleOutsideClick);
        };
    }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount

    return (
        <>
        <div className="language-dropdown-container">
            <button onClick={handleButtonClick} className="js-language-dropdown">
            Language: English
            </button>
        { dropdownVisible && (
            <FooterLanguagesDropdown />
        ) } 
        
        </div>
        </>
    )
}

export default FooterLanguage