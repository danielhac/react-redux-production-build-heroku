import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MakerListRow = ({maker}) => {
    // , deleteWine

    // function onDeleteWine() {
    //     deleteWine(wine);
    // }

    return (
        <tr>
            <td><Link to={'/maker/' + maker.id}>{maker.wineName}</Link></td>

            <td>
                Delete
            </td>
        </tr>
    );
};
{/*<button className="btn-xs btn-danger" onClick={onDeleteMaker} >Delete</button>*/}

MakerListRow.propTypes = {
    maker: PropTypes.object.isRequired
    // deleteWine: PropTypes.func.isRequired
};

export default MakerListRow;
