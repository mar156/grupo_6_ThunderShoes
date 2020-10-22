import React from 'react';
import Category from '../Category';
import DetailPanel from '../DetailPanel';

function BigPanel(props){
  return(
            <div className="col-lg-6 mb-4">						
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                   <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
                </div>
                <div className="card-body">

                  { props.children }

                { /* Component */ }

                </div>
              </div>
            </div>
    )
}


export default BigPanel;