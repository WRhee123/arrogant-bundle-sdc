const SystemReq = ({ systemRequirements }) => {

    return (
        <div dangerouslySetInnerHTML={{ __html: replaceAll(systemRequirements, "\n", "</br>") }}>
        </div>
    )
}

function replaceAll(originalString, search, replacement) {
    let index = originalString.indexOf(search);
    while (index !== -1) {
        originalString = originalString.substring(0, index) + replacement + originalString.substring(index + search.length);
        index = originalString.indexOf(search, index + replacement.length);
    }
    return originalString;
}

export default SystemReq