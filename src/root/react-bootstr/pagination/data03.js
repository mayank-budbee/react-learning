import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class FetchPaginated extends React.Component {

    componentDidMount() {
        console.log("Hello")
        // Simple GET request using fetch
        fetch('https://api.instantwebtools.net/v1/passenger?page=1&size=5')
            .then(response => response.json())
            .then(data => {
                console.log("here")
                // console.log(data)
                console.log(data.data)
                console.log(data.data.length)
                this.setState({ books2: data.data })
            })
            .catch(err => {
                console.log(err)
            });
    }

    state = {
        books: [
            {id: '1', name: 'Book 1'},
            {id: '2', name: 'Book 2'},
            {id: '3', name: 'Book 3'},
            {id: '4', name: 'Book 4'},
            {id: '5', name: 'Book 5'},
            {id: '6', name: 'Book 6'}
        ]
    };

    // deleteBookWithId = () => {
    //     const lastOneId = this.state.books.length;
    //     const updatedBooks = this.state.books.filter(m => m.id !== lastOneId.toString());
    //     this.setState({books: updatedBooks});
    // };
    //
    // addBook = () => {
    //     const lastOneId = this.state.books.length + 1;
    //     this.setState({
    //         books: [...this.state.books, {
    //             id: `${lastOneId}`, name: `Book ${lastOneId}`
    //         }]
    //     });
    // }

    render() {
        const options = {
            // pageStartIndex: 0,
            sizePerPage: 5,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true
        };
        const columns = [
            {
                dataField: '_id',
                text: 'Product ID',
                Cell: row => (
                    <div>
                        <span title={row.value}>{row.value}</span>
                    </div>
                )
            },
            {
                dataField: 'name',
                text: 'Product Name'
            }
        ];

        return (
            <div>
                This needs fixing
            </div>
            // <React.Fragment>
            //     <BootstrapTable
            //         keyField="id"
            //         data={this.state.books2}
            //         columns={columns}
            //         pagination={paginationFactory(options)}
            //     />
                // <button className="btn btn-default" onClick={() => this.deleteBookWithId()}>
                //     delete last one book
                // </button>
                // <button className="btn btn-default" onClick={() => this.addBook()}>
                //     Add a book to the end
                // </button>
                // <Code>{sourceCode}</Code>
            // </React.Fragment>
        );
    }
}
