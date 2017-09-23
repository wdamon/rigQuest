import React from 'react';
import { TableRow, Label } from 'grommet';

export default function LoadItem(props) {
  const { load, labels } = props;
 
  return (
    <TableRow>
      { labels.map(label => (
        <td>
          <Label size="small">{ load[label] }</Label>
         </td>
      ))}
    </TableRow>
  );
};
