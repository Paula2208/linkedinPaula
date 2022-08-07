import React, {useEffect, useState} from 'react';

function Jobs() {
    useEffect(() => {
        console.log('jobs')
    }, []);
    return (
        <div>
            <h1>Habemus Jobs</h1>
        </div>
    );
}

export default Jobs;