
const FooterLanguagesDropdown = () => {

    return (
        <>
        <div className="language-container">
            <ul className="language-list">

            <li className="">
            <button data-locale="fr" className="js-change-language">Français</button>
            </li>

            <li className=" active ">
            <button data-locale="en" className="js-change-language">English</button>
            </li>

            <li className="">
            <button data-locale="zh_CN" className="js-change-language">简体中文</button>
            </li>

            <li className="">
            <button data-locale="de" className="js-change-language">Deutsch</button>
            </li>

            <li className="">
            <button data-locale="it" className="js-change-language">Italiano</button>
            </li>

            <li className="">
            <button data-locale="es" className="js-change-language">Español</button>
            </li>

            </ul>
        </div>
        </>
    )
}

export default FooterLanguagesDropdown
