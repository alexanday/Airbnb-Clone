function Joke(props) {
	return (
		<div>
			<h1>{props.setup}</h1>
			<h3>{props.punchline}</h3>
            <hr/>
		</div>
	);
}

export default Joke;
