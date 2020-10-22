import React from 'react';



function DetailPanel (){
    return(
          <React.Fragment>
              <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src="images/product_dummy.svg" alt="dummy-product" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
              <a target="_blank" rel="nofollow" href="/">View product detail</a>
          </React.Fragment>
    )   
}

export default DetailPanel;