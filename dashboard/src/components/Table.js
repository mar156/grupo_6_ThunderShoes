import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch: this.props.fetch,
      data: [],
      meta: {},
      nextPage: null,
      prevPage: null,
    }
  }

  componentDidMount () {
    fetch(this.state.fetch)
    .then( result => result.json())
    .then( data => {
      this.setState({
        data: data.data.list,
        meta: data.meta,
        prevPage: !!data.meta.prev ? data.meta.prev.url : null,
        nextPage: !!data.meta.next ? data.meta.next.url : null,
      });
    })
    .catch( err => console.log(err))
  }

  componentDidUpdate() {
  }

  changePage( url ){
    if ( url ) {
      fetch( url )
      .then( result => result.json())
      .then( data => {
        this.setState({
          data: data.data.list,
          meta: data.meta,
          prevPage: !!data.meta.prev ? data.meta.prev.url : null,
          nextPage: !!data.meta.next ? data.meta.next.url : null,
        });
      })
      .catch( err => console.log(err))
    }
  }

  render() {
    return(
      <React.Fragment>
        <table className="table bg-dark-thunder rounded">
          <thead>
            <tr>
              {
                this.props.heads.map( (head, i) =>
                  <th className="text-gray" key={head.title + i} scope="col">{head.title}</th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(this.state.data).map( (value, i) =>
                <tr className="text-white" key={`row${i}`}>
                    {
                      this.props.heads.map( (head, i) => 
                        i === 0 ? <th className="letters-color" key={i} scope="row">{this.state.data[value][head.prop]}</th>
                        : <td key={i}>{this.state.data[value][head.prop]}</td>
                      )
                    }
                </tr>
              )
            }
          </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {
              !this.state.prevPage ? 
                <li className="page-item disabled">
                  <span className="page-link">Previous</span>
                </li> 
              :
                <li className="page-item">
                  <span onClick={ () => this.changePage( this.state.prevPage ) } className="page-link cursor-pointer" key={'prevPage'}>Previous</span>
                </li>
            }
            {
              !this.state.nextPage ? 
              <li className="page-item disabled">
                <span className="page-link">Next</span>
              </li>
              :
              <li className="page-item">
                <span onClick={ () => this.changePage( this.state.nextPage ) }  className="page-link cursor-pointer" key={'nextPage'}>Next</span>
              </li>
            }
            
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default Table