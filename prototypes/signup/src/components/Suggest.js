import React from 'react';
import Autosuggest from 'react-autosuggest';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form} from 'react-bootstrap';

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <span>
    {suggestion.name}
  </span>
);

class Suggest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  renderSuggestionsContainer = ({ containerProps , children, query }) => {
    return (
      <div {...containerProps} style={{border:"1px solid #f5f5f5"}}>
        {children}
      </div>
    );
  }

  renderInputComponent = inputProps => (
    <div>
      <Form.Control {...inputProps} type="text" placeholder={this.props.placeholder}/>
    </div>
  );

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token "+process.env.REACT_APP_DADATA);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({"query":value}),
      redirect: 'follow'
    };
    if (value.length > 3) {
      let languages = [];
      fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/"+this.props.method, requestOptions)
        .then(response => response.json())
        .then(result => {
          result.suggestions.map(element => {
            languages.push({name: element.value, inn:element.data.inn, ogrn:element.data.ogrn});
          });
          this.setState({ suggestions: languages });
        })
        .catch(error => console.log('error', error));
    }
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    if(this.props.callback) {
      this.props.callback(suggestion);
    }
  };

  render() {
    const { value, suggestions } = this.state;

    console.log(">>> "+ process.env.REACT_APP_DADATA);

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: this.props.palceholder,
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderInputComponent={this.renderInputComponent}
        renderSuggestionsContainer={this.renderSuggestionsContainer}
        onSuggestionSelected={this.onSuggestionSelected}
        inputProps={inputProps}
      />
    );
  }
}

export default Suggest;