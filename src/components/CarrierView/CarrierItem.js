import React from 'react';
import { TableRow, Label } from 'grommet';

export default function CarrierItem(props) {
  const { carrier, labels } = props;
 
  return (
    <TableRow>
      { labels.map(label => (
        <td>
          <Label size="small">{ carrier[label] }</Label>
         </td>
      ))}
    </TableRow>
  );
};
