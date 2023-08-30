import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
// Defining types for component props improves reusability of components by validating received data
import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.gray[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

// To add PropTypes for Typechecking
Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Header;
