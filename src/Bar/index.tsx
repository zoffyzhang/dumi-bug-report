import React from 'react';

export interface Props {
  bar: string;
  barExtra: string;
}

export default (props: Props) => <div>{props.bar}</div>;
