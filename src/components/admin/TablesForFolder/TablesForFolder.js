import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Button from "components/common/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#00AAF0',
    color: theme.palette.common.white,
    fontSize: '1rem'
  },
  body: {
    fontSize: '1rem'
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
  },
}))(TableRow);

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    width: 'auto',
    // margin: '2rem',
    // padding: '2rem',
    // marginTop: theme.spacing(3),
    height: 'auto',
    maxHeight: 'calc(100vh - 21rem)',
    overflowX: "hidden",
    overflowY: "auto",
  },
  table: {
    minWidth: 700
  },
  profile: {
    width: '2rem'
  }
});

class TablesForFolder extends React.Component {
  render() {
    const { classes, folderList, onDeleteFolder } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <FontAwesomeIcon icon="user-circle" size="2x" color="#fff" />
              </StyledTableCell>
              <StyledTableCell align="center">직원 이름</StyledTableCell>
              <StyledTableCell align="center">폴더 이름</StyledTableCell>
              <StyledTableCell align="center">폴더 권한</StyledTableCell>
              <StyledTableCell align="center">관리</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {folderList.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell align="center"><img className={classes.profile} src={user.profile} alt="profile" /></StyledTableCell>
                <StyledTableCell align="center">
                  {user.u_name}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">{user.f_name}</StyledTableCell>
                <StyledTableCell align="center">{user.permission}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button key='btn-folder-delete' theme='outline' onClick={() => onDeleteFolder(user.id)}>폴더 삭제</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(TablesForFolder);
