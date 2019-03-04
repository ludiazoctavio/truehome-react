import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


class Card extends PureComponent {
    handleClick = (event) => {
        console.log(this.props.price)
    }
    render() {
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={this.props.image}
                    alt=""
                    width={260}
                />
                <div className="card-body">
                    <h4 className="card-title">{this.props.price}</h4>
                    <p className="card-text">{this.props.address}</p>
                    <p className="card-text">{this.props.owner}</p>
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={this.handleClick}
                        >Edit
                    </button>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    image: PropTypes.string,
    owner: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    address: PropTypes.string,
  }

export default Card;