import { Box, Button, Container, Typography, useTheme } from "@mui/material"

type LayoutMainProps = {
	title: string,
	table: React.ReactNode
}

export const LayoutMain = (props: LayoutMainProps) => {
	const { title, table } = props
	const theme = useTheme()

	return (
		<>
		<Box>
			<Container>
				<Typography variant="h3" color={theme.palette.text.secondary}
					sx={{
						fontWeight: "bold",
						textAlign: "center",
						marginTop: "2rem",
					}}
				>{ title }</Typography>
				<Box
					width='100%'
					sx={{
						display: "flex",
						mr: 2,
						mb: 2,
						justifyContent: {
							md: 'flex-end',
							xs: 'center'
						}
					}}
				>
					<Button
						variant="contained"
						color="secondary"
					>+</Button>
				</Box>
				{ table }
			</Container>
		</Box>
		</>
	)
}