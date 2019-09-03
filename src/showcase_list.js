import React, {Component} from 'react'
import ShowcaseCard from './showcase_card'

class ShowcaseList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        // Fetch item after component mounted
        fetch("https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json")
            .then(res => { return res.json()})
            .then(
                (result) => {
                    this.setState({
                        items: result.trees
                    });
                },

                (error) => {
                    this.setState({
                        error: error
                    });
                }
            )
    }

    render() {
        const {items} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="gallery-title">Gallery</h1>
                    </div>

                    {items.map(item => (
                        <ShowcaseCard name={item.name} species={item.species_name} image={item.image}/>
                    ))}

                </div>
            </div>
        )
    }
}

export default ShowcaseList