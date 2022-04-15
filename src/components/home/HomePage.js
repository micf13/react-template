import React, {useEffect} from 'react';

function HomePage()
{

    useEffect(() => {
        document.title = `React Template Home`;
    });

return(
        <div className="jumbotron">
            <h1>Home Page</h1>

        </div>
    )
}
export default HomePage;