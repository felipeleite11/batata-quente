import styled from 'styled-components'

export const Container = styled.div`
	background-color: #000E;
	font-family: Ubuntu, sans-serif;
	color: #FFF;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	.subject {
		margin: 0;
	}

	.time {
		font-size: 4rem;
	}

	.progress {
		width: 800px;
		margin-bottom: 20px;
	}

	.timeout,
	.over {
		background-color: gold;
		color: #000D;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		width: fit-content;
		font-size: 2rem;
		padding: 14px 20px;
	}

	.button {
		border: 0;
		padding: 14px;
		background-color: #fff;
		font-size: 1rem;
		border-radius: 8px;
		cursor: pointer;
	}
`
