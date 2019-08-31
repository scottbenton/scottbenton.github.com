import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function useIsEqualOrSmallerThan(breakpoint) {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.down(breakpoint));
}