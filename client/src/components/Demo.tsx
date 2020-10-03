import { connect } from 'react-redux';
import React, { useState } from 'react';

const Demo = (getRatedByCurrency: any, demo: Array<any>) => {
    return (
        <div>
            
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        demo: state.demo.data
    }
}
export default connect(mapStateToProps, null)(Demo)
