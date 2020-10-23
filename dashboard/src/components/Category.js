import React from 'react';

{  /* Traer todas las categorías y mapearlas dentro del Row */}

function Category (props){
    return(
          <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
              <div className="card-body">
                { props.category }
              </div>
            </div>
          </div>          
    )
}


export default Category;

                  