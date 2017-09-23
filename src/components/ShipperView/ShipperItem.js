import React from 'react';
import { TableRow, Label } from 'grommet';

export default function CarrierItem(props) {
  const { shipper, labels } = props;
 
  return (
    <TableRow>
      { labels.map(label => (
        <td>
          <Label size="small">{ shipper[label] }</Label>
         </td>
      ))}
    </TableRow>
  );
};
