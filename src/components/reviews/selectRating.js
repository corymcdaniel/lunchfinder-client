import React, {PropTypes} from 'react';

class SelectRating extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedValue: 1
    };
    this.onRadioSelect = this.onRadioSelect.bind(this);
  }

  onRadioSelect(event) {
    this.setState({
      selectedValue: event.target.value
    });
    this.props.onSelect(event.target.value);
  }

  render() {
    const thumbsUp = 'glyphicon glyphicon-thumbs-up';
    const thumbsDown = 'glyphicon glyphicon-thumbs-down';
    const selectedClass = 'icon-selected';

    return (
      <div>
        <label>
          <input type="radio"
                 value={1}
                 checked={this.state.selectedValue === 1}
                 onChange={this.onRadioSelect}
          />
          <div className={`icon-border ${this.state.selectedValue === 1 ? selectedClass : ''}`}>
            <span className={thumbsUp} aria-hidden="true"></span>
          </div>
        </label>

        <label>
          <input type="radio"
                 value={-1}
                 checked={this.state.selectedValue === -1}
                 onChange={this.onRadioSelect}
          />
          <div className={`icon-border ${this.state.selectedValue === -1 ? selectedClass : ''}`}>
            <span className={thumbsDown} aria-hidden="true"></span>
          </div>
        </label>
      </div>
    );
  }
}

SelectRating.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default SelectRating;