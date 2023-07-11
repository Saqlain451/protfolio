// eslint-disable-next-line no-unused-vars
import React from 'react';

const Error = () => {
    return (
        <>
            <div className="error-container d-flex center pt-10 pb-10">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="fs-2 text-green">Sorry, we couldn't retrieve the data at the moment.</p>
            </div>
        </>
    )

}

export default Error;