import React from 'react';

type Props = {
  status: string;
  color: string;
  bgColor: string;
};

const Status = (props: Props) => {
  return (
    <div
      className={`px-3 py-1 rounded-lg text-sm inline-block ${props.color} ${props.bgColor}`}
    >
      {props.status}
    </div>
  );
};

export default Status;
