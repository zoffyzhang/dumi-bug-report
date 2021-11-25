import React from 'react';

export interface Props {
  fooPropA: string;
  fooPropB: string;
}

export default (props: Props) => <div>{props.fooPropA}</div>;
