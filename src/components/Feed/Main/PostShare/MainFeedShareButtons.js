import React from 'react'

const MainFeedShareButtons = ({ title, path, color }) => {
    return (
        <>
            <span>
                <button>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill={color} className="mercado-match" width="24" height="24" focusable="false">
                            <path d={path} />
                        </svg>
                    </i>
                    <span>{title}</span>
                </button>
            </span>
        </>
    )
}

export default MainFeedShareButtons
