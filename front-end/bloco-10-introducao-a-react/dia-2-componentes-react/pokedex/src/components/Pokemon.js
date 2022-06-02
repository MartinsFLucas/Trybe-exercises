import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { image, name, type, averageWeight } = this.props.pokemonInfo;
    return(
      <div className="pokemon-card">
        <div className="pokemon-info">
          <p>{name}</p>
          <p>{type}</p>
          <p> Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={name} className="pokemon-image"></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemonInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    })
  })
}

export default Pokemon;