import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wineActions from '../../actions/wineActions';
import WineForm from './WineForm';
import toastr from 'toastr';

class ManageWinePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            wine: Object.assign({}, props.wine),
            errors: {},
            saving: false
        };

        this.updateWineState = this.updateWineState.bind(this);
        this.saveWine = this.saveWine.bind(this);
    }

    // React lifecycle function is called any time props have changed or when React thinks props has changed
    componentWillReceiveProps(nextProps) {
        if (this.props.wine.id != nextProps.wine.id) {
            // Necessary to populate form when existing wine is loaded directly (or refresh)
            this.setState({wine: Object.assign({}, nextProps.wine)});
        }
    }

    // Single change handler for all form fields (allows fields to be typed)
    updateWineState(event) {
        const field = event.target.name;
        let wine = this.state.wine;
        wine[field] = event.target.value;
        return this.setState({wine: wine});
    }

    saveWine(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveWine(this.state.wine)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect() {
        this.setState({saving: false});
        toastr.success('Wine saved');
        this.context.router.push('/wines');
    }

    render() {
        return (
            <WineForm
                allMakers={this.props.makers}
                onChange={this.updateWineState}
                onSave={this.saveWine}
                wine={this.state.wine}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

ManageWinePage.propTypes = {
    wine: PropTypes.object.isRequired,
    makers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageWinePage.contextTypes = {
    router: PropTypes.object
};

function getWineById(wines, id) {
    const wine = wines.filter(wine => wine.id == id);
    if (wine.length) return wine[0]; //since filter returns an array, have to grab the first.
    return null;
}

function mapStateToProps(state, ownProps) {
    // From the path '/wine/:id'
    const wineId = ownProps.params.id;

    // Empty wine for core wine structure
    let wine = {id: '', region: '', wineName: '', makerId: '', price: '', category: ''};

    if (wineId && state.wines.length > 0) {
        wine = getWineById(state.wines, wineId);
    }

    // Translate the shape that came from API into something useful for populating drop-down
    const makersFormattedForDropdown = state.makers.map(maker => {
        return {
            value: maker.id,
            text: maker.wineName
        };
    });

    // Pass to component - list of objects below determine properties bound to component
    return {
        wine: wine,
        makers: makersFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(wineActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageWinePage);