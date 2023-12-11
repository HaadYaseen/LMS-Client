'use client';

import React from 'react';
import AddAndEditSchool from '../../../../components/school/addAndEditSchool';
import PageHeader from '../../../../components/pageHeader';

const AddSchool = () => {
    return (
        <div className="grid">
            <PageHeader title="School / Add" />
            <div className="col-12">
                <AddAndEditSchool isNew={false} />
            </div>
        </div>
    );
};

export default AddSchool;
