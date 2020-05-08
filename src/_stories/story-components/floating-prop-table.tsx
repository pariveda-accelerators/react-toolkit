import React, { FC } from 'react';
import { IPropTable, FloatingCard, PropTable } from '_stories/story-components';
import { Fonts, Flex } from 'foundations';
import { isNullOrUndefined } from '../../utilities';

interface IFloatingPropTable extends Partial<IPropTable> {
  propName: string;
  exampleUse: string;
}
export const FloatingPropTable: FC<IFloatingPropTable> = ({
  data,
  propName,
  className,
  exampleUse,
  children,
}) => (
  <FloatingCard>
    <Flex p="0" alignItems="baseline">
      <Fonts.SectionTitle weight="bold">{propName}</Fonts.SectionTitle>
      <Flex />
      <Fonts.Body color="red-7">{exampleUse}</Fonts.Body>
    </Flex>
    {!isNullOrUndefined(data) && <PropTable data={data} className={className} />}
    {!isNullOrUndefined(children) && children}
  </FloatingCard>
);
