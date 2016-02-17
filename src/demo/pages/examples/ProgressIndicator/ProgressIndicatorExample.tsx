import * as React from 'react';
import ProgressIndicator from '../../../../components/ProgressIndicator/index';
import Link from '../../../../components/Link/index';
import ExampleCard from '../../../components/ExampleCard/index';
import PropertiesTable from '../../../components/PropertiesTable/index';

export default class ProgressIndicatorExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='ProgressIndicatorExample'>
        <h1 className='ms-font-xxl'>ProgressIndicator</h1>
        <div><Link target='_blank' text='ProgressIndicators' url='http://dev.office.com/fabric/components/ProgressIndicator' /> provide a ui indicator for progress.</div>

        <PropertiesTable properties={ [] } />

        <h2 className='ms-font-xl'>Examples</h2>

        <ExampleCard title='ProgressIndicator'>
          <ProgressIndicator />
        </ExampleCard>
      </div>
    );
  }

}
