import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// Stateless functional components
// Destructured all props in function's argument list
const WineForm = ({wine, allMakers, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Wine</h1>
            <TextInput
                name="wineName"
                label="Wine Name"
                value={wine.wineName}
                onChange={onChange}
                error={errors.wineName}/>

            <SelectInput
                name="makerId"
                label="Maker"
                value={wine.makerId}
                defaultOption="Select Maker"
                options={allMakers}
                onChange={onChange} error={errors.makerId}/>

            <TextInput
                name="region"
                label="Region"
                value={wine.region}
                onChange={onChange}
                error={errors.region}/>

            <TextInput
                name="category"
                label="Category"
                value={wine.category}
                onChange={onChange}
                error={errors.category}/>

            <TextInput
                name="price"
                label="Price"
                value={wine.price}
                onChange={onChange}
                error={errors.price}/>

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

// PropTypes below should mirror the params on top of page
WineForm.propTypes = {
    wine: React.PropTypes.object.isRequired,
    allMakers: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default WineForm;
