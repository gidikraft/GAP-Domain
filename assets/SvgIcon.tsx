import { SvgProps } from "react-native-svg";
import { svgIconPack, SvgIconPackType } from "./SvgIconPack";
import React from 'react';

// import { svgIconPack, SvgIconPackType } from "./svgIconPack";

export type SvgIconProps = Omit<SvgProps, "color"> & {
  name: SvgIconPackType;
};

const SvgIcon = (props: SvgIconProps) => {
  const { name, stroke, ...rest } = props;

  const Icon = svgIconPack[name];
  // const iconSize = theme.iconSizes[size];

  return <Icon {...rest} />;
};

export { SvgIcon };
