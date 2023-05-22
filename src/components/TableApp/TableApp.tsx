import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { useAuthorContext } from "../../contexts/AuthorContext";

type TableAppProps<T extends Record<string, any>> = {
  rows: T[];
}

export const TableApp = <T extends Record<string, any>>({ rows }: TableAppProps<T>) => {
  const keys = Object.keys(rows[0]) as Array<keyof T>
	const theme = useTheme()

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
						<TableCell key='checkbox'></TableCell>
            {keys.map((key) => (
              <TableCell key={String(key)}>{String(key).toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
							<TableCell key='checkbox'>
								<Checkbox color='secondary'/>
							</TableCell>
              {keys.map((key) => (
                <TableCell key={String(key)}>
                  {String(row[key])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
