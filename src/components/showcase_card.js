import React, { Component } from 'react'

class ShowcaseCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false
        };
    }

    toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow }));
    };

    render() {
        return (
            <div className="gallery_card col-lg-4 col-md-4 col-sm-4 col-xs-6 filter">
                <div className="col-12">
                    <div className="name">{ this.props.name }</div>
                    <div className="species-name">{ this.props.species }</div>

                    <button className="btn-primary" type="button" onClick={ this.toggleShow }>
                        { this.state.isShow ? 'Hide' : 'Show' }
                    </button>

                    { this.state.isShow ?
                        <img className="gallary-image" alt={ this.props.name } src={ this.props.image }/>
                        : '' }
                </div>
            </div>
        )
    }
}

export default ShowcaseCard