import React, { Component } from 'react';


class DetailPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      latestProductDetail: {},
      completeDetail: false
    }
  }

componentDidMount(){

    fetch("http://localhost:3000/api/products/latest")
    .then(result => result.json())
    .then(result => {

      let lastProduct = result.data.product;

      this.setState({
        latestProductDetail: {
          image: lastProduct.images[0], 
          name: lastProduct.name,
          brand: lastProduct.brand,
          description: lastProduct.description,
          price: lastProduct.price,
          gender: lastProduct.gender,
          id: lastProduct.id,
          discount: lastProduct.discount,
          colors: lastProduct.colors,
          sizes: lastProduct.sizes
        }
      })
    })
  }


  componentDidUpdate(){

  }

  completeInfo(){
    this.setState({
      completeDetail:true
    })
/* 
    let moreInfo = document.getElementById("more-info");
    moreInfo.style.display = "none"; */
  }

  
  lessInfo(){
    this.setState({
      completeDetail:false
    })
  }

  render(){
    return(
      <React.Fragment>
        <div className="text-center">
          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={`${this.state.latestProductDetail.image}`} alt="latest-product" />
        </div>
        <span className="text-center font-weight-bold text-info text-uppercase">  {this.state.latestProductDetail.name}   </span>
        <p> {this.state.latestProductDetail.description} </p>

        { this.state.completeDetail ? 
          <React.Fragment>
          <p><strong>ID:</strong> {this.state.latestProductDetail.id} </p>
          <p><strong>Marca:</strong> {this.state.latestProductDetail.brand} </p>
          <p><strong>Precio:</strong> {this.state.latestProductDetail.price} </p>
          <p><strong>Descuento:</strong> {this.state.latestProductDetail.discount} </p>
          <p><strong>Género:</strong> {this.state.latestProductDetail.gender} </p>
          <p><strong>Nombre:</strong> {this.state.latestProductDetail.name} </p>

          <a onClick={ () => this.lessInfo() } target="_blank" rel="nofollow" id="less-info" className="text-center text-dark text-uppercase border-bottom">Menos información</a> 
          </React.Fragment>
        : 
        <a onClick={ () => this.completeInfo() } target="_blank" rel="nofollow" id="more-info" className="text-center text-dark text-uppercase border-bottom">Ver más información</a> 
        }

      </React.Fragment>
    )
  }

} 

/*  function DetailPanel (props){
    return(
          <React.Fragment>
              <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={`asdsad`} alt="latest-product" />
              </div>
              <span> <strong> { props.pepitoso } </strong>  </span>
              <p> </p>
              <a target="_blank" rel="nofollow" href="/">Ver más información</a>
          </React.Fragment>
    )   
}  */


export default DetailPanel;