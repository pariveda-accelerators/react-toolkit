import React, { FC } from 'react';
import { isNullOrUndefined } from '../../utilities';
import { Flex, Fonts } from '../../foundations';
import { IPropTable, PropTable } from './prop-table';
import { FloatingCard } from './floating-card';

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
