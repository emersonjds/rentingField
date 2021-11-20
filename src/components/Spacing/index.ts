import { ViewProps, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import {
    color,
    flex,
    space,
    SpaceProps,
    ColorProps,
    HeightProps,
    FlexboxProps,
    BorderProps,
    BorderRadiusProps,
    WidthProps,
    PositionProps,
} from "styled-system";

type BoxProps =
    | SpaceProps
    | ColorProps
    | HeightProps
    | ViewProps
    | BorderProps
    | BorderRadiusProps
    | FlexboxProps
    | WidthProps
    | PositionProps;

export const Box = styled.View<BoxProps>`
	${color}
	${space}
  ${flex}
	position: relative;
`;

export const Divider = styled.View<BoxProps>`
	border-bottom-width: 1px;
	border-bottom-color: ${color};
	width: 100%;
	${space}
`;

export const BoxFull = styled.View`
	padding: 20px;
	flex: 1;
`;

export const TouchableBox = styled.TouchableOpacity``;

export const HorizontalDivider = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: #D9DBE9;
	width: 100%;
	margin-top: 15px;
	margin-bottom: 15px;
`;