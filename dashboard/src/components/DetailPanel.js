import React, { Component } from 'react';

class DetailPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      latestProductDetail: {},
      completeDetail: false,
      colors: []
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

      this.colorBoxes();
    })
  }

  componentDidUpdate(){
  }

  completeInfo(){
    this.setState({
      completeDetail:true
    })
  }

  lessInfo(){
    this.setState({
      completeDetail:false
    })
  }

  colorBoxes(){

    let colors = [];
    let colorsCodes = this.state.latestProductDetail.colors;

    colorsCodes.forEach(colorCode => {
      if(colorCode === "0011"){
        colors.push(<div><div className="box-color red-color" key={`${colorCode}`}></div></div>)
      }
      if(colorCode === "0022"){
        colors.push(<div><div className="box-color blue-color" key={`${colorCode}`}></div></div>)
      }
      if(colorCode === "0033"){
        colors.push(<div><div className="box-color yellow-color" key={`${colorCode}`}></div></div>)
      }
      if(colorCode === "0044"){
        colors.push(<div><div className="box-color black-color" key={`${colorCode}`}></div></div>)
      }
      if(colorCode === "0055"){
        colors.push(<div><div className="box-color green-color" key={`${colorCode}`}></div></div>)
      }
      if(colorCode === "0066"){
        colors.push(<div><div className="box-color white-color" key={`${colorCode}`}></div></div>)
      }
      if(colorCode === "0077"){
        colors.push(<div><div className="box-color gray-color" key={`${colorCode}`}></div></div>)
      }

      this.setState({
        colors: colors
      })

    });

  }

  render(){
    return(
      <React.Fragment>
        <div className="text-center">
          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={`${this.state.latestProductDetail.image}`} alt="latest-product" />
        </div>
        <span className="text-center font-weight-bold letters-color-dark rounded text-uppercase">  {this.state.latestProductDetail.name}   </span>
        <p> {this.state.latestProductDetail.description} </p>
        { this.state.completeDetail ? 
          <div>
          <p><span className="font-weight-bold text-dark" key="1">ID:</span> {this.state.latestProductDetail.id} </p>
          <p><span className="font-weight-bold text-dark" key="23">Marca:</span> {this.state.latestProductDetail.brand} </p>
          <p><span className="font-weight-bold text-dark" key="42">Precio:</span> {this.state.latestProductDetail.price} </p>
          <p><span className="font-weight-bold text-dark" key="231">Descuento:</span> {this.state.latestProductDetail.discount}% </p>
          <p><span className="font-weight-bold text-dark" key="153">Género:</span> {this.state.latestProductDetail.gender} </p>
          <span className="font-weight-bold text-dark">Colores:</span>  
          <div className="row">
              { this.state.colors.map(color => color) }
          </div>
          <p><span className="font-weight-bold text-dark" key="11">Talles:</span> 
          {this.state.latestProductDetail.sizes.map(size => {
            return size + ",";})} 
          </p>
          <span onClick={ () => this.lessInfo() } target="_blank" rel="nofollow" id="less-info" className="text-center text-dark text-uppercase btn btn-outline-warning" key="00">ver menos información</span> 
          </div>
        : 
        <span onClick={ () => this.completeInfo() } target="_blank" rel="nofollow" id="more-info" className="text-center text-dark text-uppercase btn btn-outline-warning" key="013">Ver más información</span> 
        }

      </React.Fragment>
    )
  }

} 


export default DetailPanel;