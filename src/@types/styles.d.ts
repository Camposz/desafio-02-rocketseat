import 'styled-components';
import { defaultTeheme } from '../styles/themes/default';

type ThemeType = typeof defaultTeheme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
