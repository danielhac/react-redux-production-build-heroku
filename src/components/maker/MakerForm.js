import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// Stateless functional components
// Destructured all props in function's argument list
const MakerForm = ({maker, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Brand</h1>
            <TextInput
                name="wineName"
                label="Wine Name"
                value={maker.wineName}
                onChange={onChange}
                error={errors.wineName}/>

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

{/*<input*/}
{/*type="submit"*/}
{/*disabled={deleting}*/}
{/*value={deleting ? 'Deleting...' : 'Delete'}*/}
{/*className="btn btn-danger"*/}
{/*onClick={onDelete}/>*/}

// PropTypes below should mirror the params on top of page
MakerForm.propTypes = {
    maker: React.PropTypes.object.isRequired,
    // allMakers: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    // onDelete: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
    // deleting: React.PropTypes.bool
};

export default MakerForm;
