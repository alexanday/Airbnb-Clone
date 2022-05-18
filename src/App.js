import "./App.css";
import Navbar from "./components/Navbar";
import Collage from "./components/Collage";
import Card from "./components/Card";
import Joke from "./components/Joke";
import jokesData from "./jokes";
import experienceData from "./data";
console.log(experienceData);

const jokeslist = jokesData.map((jokeNum) => {
	return <Joke setup={jokeNum.setup} punchline={jokeNum.punchline} />;
});

const cardlist = experienceData.map((experience) => {
	return (
		<Card
			key={experience.id}
			{...experience}
		/>
	);
});

function App() {
	return (
		<div className="App">
			<Navbar />
			<Collage />
			<div className="cards-list">{cardlist}</div>
		</div>
	);
}

export default App;
