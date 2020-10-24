import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      nextPage: '',
      prevPage: '',
    }
  }

  componentDidMount () {
    fetch(this.props.fetch)
    .then( result => result.json())
    .then( data => {
      console.log(data.data);
      this.setState({
        data: data.data.list 
      });  
    })
    .catch( err => console.log(err))
  }

  componentDidUpdate() {

  }

  render() {
    return(
      <React.Fragment>
        <table className="table table-dark">
          <thead>
            <tr>
              {
                this.props.heads.map( head =>
                  <th key={head.title} scope="col">{head.title}</th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(this.state.data).map( key =>
                <tr>
                    {
                      this.props.heads.map( (head, i) => 
                        i === 0 ? <th key={i} scope="row">{this.state.data[key][head.prop]}</th>
                        : <td key={i}>{this.state.data[key][head.prop]}</td>
                      )
                    }
                </tr>
              )
            }
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Table