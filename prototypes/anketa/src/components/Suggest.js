import React from 'react';
import Autosuggest from 'react-autosuggest';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form} from 'react-bootstrap';

class Suggest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value ? this.props.value : '',
      suggestions: [],
      debitors: [],
      input: ''
    };
  }

  getSuggestionValue = suggestion => suggestion.name;

  // Use your imagination to render suggestions.
  renderSuggestion = (suggestion) => {
    return (
    <div>
      <span>{suggestion.name} </span>
  </div>
)};

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
    <Form.Control {...inputProps} type="text" placeholder={this.props.placeholder}/>
  );

  getDataByINN = ({value}) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token "+process.env.REACT_APP_DADATA);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({"query":value}),
      redirect: 'follow'
    };
    let languages = [];
    fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party", requestOptions)
      .then(response => response.json())
      .then(result => {
        result.suggestions.map(element => {
          languages.push({name: element.value, inn:element.data.inn, ogrn:element.data.ogrn, data:element});
        });
        this.setState({ suggestions: languages });
      })
      .catch(error => console.log('error', error));
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({value}) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token "+process.env.REACT_APP_DADATA);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({"query":value}),
      redirect: 'follow'
    };
    console.log(value)
    if (value.length > 3) {
      let languages = [];
      fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/"+this.props.method, requestOptions)
        .then(response => response.json())
        .then(result => {
          result.suggestions.map(element => {
            languages.push({name: element.value, inn:element.data.inn, ogrn:element.data.ogrn, data:element});
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
    console.log("sfks")
    var arr = this.state.debitors;
    arr.push(suggestion.name);
    this.setState({debitors: arr, input: ''});
    if(this.props.callback) {
      // if (this.props.method == "party") {
      //   this.getDataByINN(suggestion.inn);
      // }
      this.props.callback(suggestion);
      this.onSuggestionsClearRequested();
    }
  };

  render() {
    const { value, suggestions } = this.state;

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
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        renderInputComponent={this.renderInputComponent}
        renderSuggestionsContainer={this.renderSuggestionsContainer}
        onSuggestionSelected={this.onSuggestionSelected}
        inputProps={inputProps}
      />
    );
  }
}

export default Suggest;