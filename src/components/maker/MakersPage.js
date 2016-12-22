import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as makerActions from '../../actions/makerActions';
import MakerList from './MakerList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class MakersPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddMakerPage = this.redirectToAddMakerPage.bind(this);
        // this.deleteMaker = this.deleteMaker.bind(this);
    }

    redirectToAddMakerPage() {
        browserHistory.push('/maker');
    }

    // deleteWine(wine){
    //     this.props.actions.deleteWine(wine.id)
    //         .then(() => {
    //             toastr.success('Wine deleted');
    //         })
    //         .catch(error => {
    //             toastr.error();
    //         });
    // }

    render() {
        const {makers} = this.props;

        return (
            <div className="well well-lg">
                <h1>Wine Brands</h1>
                <p>Explore the brands of wines to you hearts content</p>
                <div id="space"></div>
                <input type="submit"
                       value="Add Brand"
                       className="btn btn-primary"
                       onClick={this.redirectToAddMakerPage} />
                <MakerList
                    makers={makers}
                    />
            </div>
        );
    }
}
// deleteWine={this.deleteWine}

MakersPage.propTypes = {
    makers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
    // deleteWine: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        makers: state.makers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(makerActions, dispatch)
    };
}

// Export component decorated by React-Redux Connect function to interact with Redux
export default connect(mapStateToProps, mapDispatchToProps)(MakersPage);