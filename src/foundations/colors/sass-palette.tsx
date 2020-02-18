import * as React from 'react';
import { Flex, ColorSlice } from './components';

const getVariableName = (splitName: string[]) => {
  if (splitName.length === 1) {
    return null;
  } else if (splitName.length === 2) {
    return splitName[0];
  }
  return [splitName[0], splitName[1]].join('-');
};

export const SassPalette = () => {
  const allColors = Array.from(document.styleSheets)
    .filter(
      sheet => sheet.href === null || sheet.href.startsWith(window.location.origin)
    )
    .reduce(
      (acc, sheet) =>
        acc.concat(
          Array.from((sheet as CSSStyleSheet).cssRules).reduce((def, rule) => {
            if ((rule as CSSStyleRule).selectorText === ':root') {
              const variables = Array.from((rule as CSSStyleRule).style).reduce(
                (cssVariables, key) => {
                  if (key.startsWith('--')) {
                    const cssVariable = key.replace('--', '');
                    const splitName = cssVariable.split('-');
                    const variableName = getVariableName(splitName);
                    if (!!variableName && !cssVariables.includes(variableName)) {
                      return cssVariables.concat(variableName);
                    }
                    return cssVariables;
                  }
                  return cssVariables;
                },
                [] as string[]
              );
              return def.concat(variables as any);
            }
            return def;
          }, [])
        ),
      []
    );
  return (
    <Flex column>
      {allColors.map((color: string) => (
        <React.Fragment key={color}>
          <Flex padding={0}>
            <ColorSlice color={`${color}-1`} height={64} />
            <ColorSlice color={`${color}-2`} height={64} />
            <ColorSlice color={`${color}-3`} height={64} />
            <ColorSlice color={`${color}-4`} height={64} />
            <ColorSlice color={`${color}-5`} height={64} />
            <ColorSlice color={`${color}-6`} height={64} />
            <ColorSlice color={`${color}-7`} height={64} />
          </Flex>
        </React.Fragment>
      ))}
    </Flex>
  );
};
