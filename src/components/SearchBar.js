import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    inputTerm: ''
  }

  onInputChange = e => {
    this.setState({ inputTerm: e.target.value })
  }

  onFormSubmit = e => {
    e.preventDefault()
    const { inputTerm } = this.state

    this.props.onInputTermSubmit(inputTerm)
  }

  render() {
    const { inputTerm } = this.state

    return (
      <div className='ui segment search-bar'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>
              Video search
              <input
                type='text'
                value={inputTerm}
                onChange={this.onInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
