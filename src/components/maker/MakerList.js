import React, {PropTypes} from 'react';
import MakerListRow from './MakerListRow';
// deleteWine
const MakerList = ({makers }) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Brand Name</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {makers.map(maker =>
                <MakerListRow
                    key={maker.id}
                    maker={maker}
                    />
            )}
            </tbody>
        </table>
    );
};
// deleteWine={deleteWine}

MakerList.propTypes = {
    makers: PropTypes.array.isRequired
    // deleteWine: React.PropTypes.func.isRequired
};

export default MakerList;
