import React from 'react';

export interface Props {
  foo: string;
  fooExtra: string;
}

export default (props: Props) => <div>{props.foo}</div>;
