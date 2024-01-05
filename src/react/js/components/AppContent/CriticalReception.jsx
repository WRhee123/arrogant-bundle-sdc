import CriticalReceptionItem from "./CriticalReceptionItem.jsx"

const CriticalReception = ({ criticalReceptions }) => {

    return (
        <>
            <div id="critical-reception-container">
                <h2>Critical Reception</h2>
                <div id="reviews-container">
                    {criticalReceptions.map((criticalReception, index) => {
                        return <CriticalReceptionItem criticalReception={criticalReception} key={index} />
                    })}
                </div>
                <p>Reviews provided by <a href="https://opencritic.com/game/15131/super-mario-rpg">OpenCritic</a></p>
            </div>
        </>
    )
}

export default CriticalReception