import * as React from 'react';
import { Header, Field } from './components/index';

export class Root extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">
                    <Field />
                </div>
            </React.Fragment>
            
            
        );
    }
}
