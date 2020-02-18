import * as React from 'react';
import {
  Flex,
  Heading,
  Body,
  Subheading,
  ColorSlice,
  Bold,
  List,
  ListItem,
} from './components';

export const UnderstandingHex = () => (
  <Flex column start>
    <Heading bold>Counting in Hex</Heading>
    <Subheading>Basics</Subheading>
    <List>
      <ListItem>256 possible values</ListItem>
      <ListItem>[0-9] + [A-F]</ListItem>
      <ListItem>00 is lowest value</ListItem>
      <ListItem>FF is highest value</ListItem>
    </List>
    <Subheading>Important Values</Subheading>
    <List>
      <ListItem>
        <Bold>00</Bold> is <Bold>0</Bold>
      </ListItem>
      <ListItem>
        <Bold>FF</Bold> is <Bold>255</Bold>
      </ListItem>
      <ListItem>
        <Bold>80</Bold> is <Bold>128</Bold>
      </ListItem>
      <ListItem>
        <Bold>1A</Bold> is <Bold>26 (or 10%)</Bold>
      </ListItem>
    </List>
    <Heading bold>Visualizing Hex</Heading>
    <Flex stretch>
      <ColorSlice color="#FFFFFF" percent={100} />
      <ColorSlice color="#E6E6E6" percent={90} />
      <ColorSlice color="#CCCCCC" percent={80} />
      <ColorSlice color="#B3B3B3" percent={70} />
      <ColorSlice color="#999999" percent={60} />
      <ColorSlice color="#808080" percent={50} />
      <ColorSlice color="#666666" percent={40} />
      <ColorSlice color="#4D4D4D" percent={30} />
      <ColorSlice color="#333333" percent={20} />
      <ColorSlice color="#1A1A1A" percent={10} />
      <ColorSlice color="#000000" percent={0} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="#FFFFFF" percent={100} />
      <ColorSlice color="#FFCCCC" percent={90} />
      <ColorSlice color="#FF9999" percent={80} />
      <ColorSlice color="#FF6666" percent={70} />
      <ColorSlice color="#FF3333" percent={60} />
      <ColorSlice color="#FF0000" percent={50} />
      <ColorSlice color="#CC0000" percent={40} />
      <ColorSlice color="#990000" percent={30} />
      <ColorSlice color="#660000" percent={20} />
      <ColorSlice color="#330000" percent={10} />
      <ColorSlice color="#000000" percent={0} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="#FFFFFF" percent={100} />
      <ColorSlice color="#CCFFCC" percent={90} />
      <ColorSlice color="#99FF99" percent={80} />
      <ColorSlice color="#66FF66" percent={70} />
      <ColorSlice color="#33FF33" percent={60} />
      <ColorSlice color="#00FF00" percent={50} />
      <ColorSlice color="#00CC00" percent={40} />
      <ColorSlice color="#009900" percent={30} />
      <ColorSlice color="#006600" percent={20} />
      <ColorSlice color="#003300" percent={10} />
      <ColorSlice color="#000000" percent={0} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="#FFFFFF" percent={100} />
      <ColorSlice color="#CCCCFF" percent={90} />
      <ColorSlice color="#9999FF" percent={80} />
      <ColorSlice color="#6666FF" percent={70} />
      <ColorSlice color="#3333FF" percent={60} />
      <ColorSlice color="#0000FF" percent={50} />
      <ColorSlice color="#0000CC" percent={40} />
      <ColorSlice color="#000099" percent={30} />
      <ColorSlice color="#000066" percent={20} />
      <ColorSlice color="#000033" percent={10} />
      <ColorSlice color="#000000" percent={0} />
    </Flex>
  </Flex>
);

export const Terminology = () => (
  <Flex column center>
    <Heading bold>Hue (Color)</Heading>
    <Flex stretch>
      <ColorSlice color="#FF0000" />
      <ColorSlice color="#FF8000" />
      <ColorSlice color="#FFFF00" />
      <ColorSlice color="#80FF00" />
      <ColorSlice color="#00FF00" />
      <ColorSlice color="#00FF80" />
      <ColorSlice color="#00FFFF" />
      <ColorSlice color="#0080FF" />
      <ColorSlice color="#0000FF" />
      <ColorSlice color="#8000FF" />
      <ColorSlice color="#FF00FF" />
      <ColorSlice color="#FF0080" />
    </Flex>
    <Heading bold>Shade (Add Black)</Heading>
    <Flex stretch>
      <ColorSlice color="#FF0000" />
      <ColorSlice color="#E60000" />
      <ColorSlice color="#CC0000" />
      <ColorSlice color="#B30000" />
      <ColorSlice color="#990000" />
      <ColorSlice color="#800000" />
      <ColorSlice color="#660000" />
      <ColorSlice color="#4D0000" />
      <ColorSlice color="#330000" />
      <ColorSlice color="#1A0000" />
      <ColorSlice color="#000000" />
    </Flex>
    <Heading bold>Tint (Add White)</Heading>
    <Flex stretch>
      <ColorSlice color="#FF0000" />
      <ColorSlice color="#FF1A1A" />
      <ColorSlice color="#FF3333" />
      <ColorSlice color="#FF4D4D" />
      <ColorSlice color="#FF6666" />
      <ColorSlice color="#FF8080" />
      <ColorSlice color="#FF9999" />
      <ColorSlice color="#FFB3B3" />
      <ColorSlice color="#FFCCCC" />
      <ColorSlice color="#FFE6E6" />
      <ColorSlice color="#FFFFFF" />
    </Flex>
    <Heading bold>Tone (Add Grey)</Heading>
    <Body>(also known as Saturation)</Body>
    <Flex stretch>
      <ColorSlice color="#FF0000" percent={100} saturation={1} />
      <ColorSlice color="#FF0000" percent={90} saturation={0.9} />
      <ColorSlice color="#FF0000" percent={80} saturation={0.8} />
      <ColorSlice color="#FF0000" percent={70} saturation={0.7} />
      <ColorSlice color="#FF0000" percent={60} saturation={0.6} />
      <ColorSlice color="#FF0000" percent={50} saturation={0.5} />
      <ColorSlice color="#FF0000" percent={40} saturation={0.4} />
      <ColorSlice color="#FF0000" percent={30} saturation={0.3} />
      <ColorSlice color="#FF0000" percent={20} saturation={0.2} />
      <ColorSlice color="#FF0000" percent={10} saturation={0.1} />
      <ColorSlice color="#FF0000" percent={0} saturation={0} />
    </Flex>
  </Flex>
);
