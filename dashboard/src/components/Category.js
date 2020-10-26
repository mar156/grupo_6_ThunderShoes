import React from 'react';

function Category (props){
    return(
          <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
              <div className="card-body bg-gray-thunder rounded">
                <b className="letters-color">{`${props.category}`}</b> {`: ${props.value}`}
              </div>
            </div>
          </div>          
    )
}


export default Category;

                  