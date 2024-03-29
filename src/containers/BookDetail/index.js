import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../../actions/index';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div> Select a book to get started.</div>;
    }
    return (
      <div>
      <h3>Book Details:</h3>
        <div>{ this.props.book.title }</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.selectedBook
  };
}

export default connect(mapStateToProps)(BookDetail);
