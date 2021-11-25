import React from 'react';

export interface Props {
  barPropA: string;
  barPropB: string;
}

export default (props: Props) => <div>{props.barPropA}</div>;
