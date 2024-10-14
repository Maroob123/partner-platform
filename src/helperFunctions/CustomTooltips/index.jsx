import { Tooltip } from "@mui/material";
import { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export const CustomizedTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) =>({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 'none',
      padding: '0.75rem',
      fontSize: theme.typography.body1.fontSize,
      backgroundColor: theme.palette.common.black,
    },
}));

export const CustomizedTooltipSmall = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) =>({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: '700px',
      padding: '0.75rem',
      fontSize: theme.typography.body1.fontSize,
      backgroundColor: theme.palette.common.black,
    },
  }));