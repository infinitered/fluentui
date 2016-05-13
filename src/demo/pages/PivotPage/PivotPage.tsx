import * as React from 'react';
import {
  Link
} from '../../../index';
import {
  ExampleCard,
  PropertiesTableSet
} from '../../components/index';

import PivotBasicExample from './examples/Pivot.Basic.Example';
let PivotBasicExampleCode = require('./examples/Pivot.Basic.Example.tsx');

export default class PivotPage extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1 className='ms-font-xxl'>Pivot</h1>
        <div>
          <Link target='_blank' href='http://dev.office.com/fabric/components/Pivot'>Pivots</Link>
          <span> are ...TODO</span>
        </div>
        <h2 className='ms-font-xl'>Examples</h2>
        <ExampleCard title='Pivot' code={ PivotBasicExampleCode }>
          <PivotBasicExample />
        </ExampleCard>
        <PropertiesTableSet componentName='Pivot' />
      </div>
    );
  }

}
