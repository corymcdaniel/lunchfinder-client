import React, {PropTypes} from 'react';

const SelectRating = ({label, selectedRating, onSelect}) => {
    const selectedClass = 'icon-selected';
    const thumbsUp = 'glyphicon glyphicon-thumbs-up';
    const thumbsDown = 'glyphicon glyphicon-thumbs-down';

    return (
      <div className="rating-select">
        <span>{label}</span>
        <label>
          <input type="radio"
                 name="rating"
                 value={1}
                 checked={selectedRating === 1}
                 onChange={onSelect}
          />
          <div className={`icon-border ${selectedRating === 1 ? selectedClass : ''}`}>
            <span className={thumbsUp} aria-hidden="true"></span>
          </div>
        </label>

        <label>
          <input type="radio"
                 name="rating"
                 value={-1}
                 checked={selectedRating === -1}
                 onChange={onSelect}
          />
          <div className={`icon-border ${selectedRating === -1 ? selectedClass : ''}`}>
            <span className={thumbsDown} aria-hidden="true"></span>
          </div>
        </label>
      </div>
    );
  };

SelectRating.propTypes = {
  label: PropTypes.string.isRequired,
  selectedRating: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SelectRating;