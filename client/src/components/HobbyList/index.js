import React from 'react';


const HobbyList = (hobbies) =>{
//     hobbies,
//  }) => {
    if (!hobbies.length) {
        return <h3>No Hobbies</h3>;
    }

    return (

        <div>TEST
            {/* {<h3>{title}</h3> && <p>{description}</p>}
            {hobbies &&
                hobbies.map((hobby) => (
                    <div key={hobby._id} className="card mb-3">
                        <h4 className="card-header bg-primary text-light p-2 m-0">
                        </h4>
                        <div className="card-body bg-light p-2">
                            <p>{hobby.title}</p>
                            <p>{hobby.description}</p>
                        </div>
                    </div>
                ))} */}
        </div>


    );
};

export default HobbyList;