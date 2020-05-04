import React, { FC } from 'react';
import { Row, Column, Fonts, Flex } from 'foundations';
import { IKeyedObject } from '../../utilities';

export interface IPropTable {
  data: IKeyedObject<string>;
  className?: string;
}
export const PropTable: FC<IPropTable> = ({ data, className }) => {
  const keys = Object.keys(data);
  const values = Object.values(data);
  return (
    <Row p="0">
      <Column>
        <Fonts.SectionSubtitle weight="bold">Prop</Fonts.SectionSubtitle>
        {keys.map(key => (
          <Fonts.Body key={key}>{key}</Fonts.Body>
        ))}
      </Column>
      <Flex />
      <Column>
        <Fonts.SectionSubtitle weight="bold">Class</Fonts.SectionSubtitle>
        {keys.map(key => (
          <Fonts.Body key={key}>
            .{className}
            {key}
          </Fonts.Body>
        ))}
      </Column>
      <Flex />
      <Column>
        <Fonts.SectionSubtitle weight="bold">Applied Style</Fonts.SectionSubtitle>
        {values.map(value => (
          <Fonts.Body key={value}>{value};</Fonts.Body>
        ))}
      </Column>
    </Row>
  );
};
PropTable.defaultProps = {
  className: '',
};
