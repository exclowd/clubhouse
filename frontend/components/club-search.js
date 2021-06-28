export default function SearchBar() {
	return (
		<div>
			<input
				className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
				type="search"
				name="search"
				placeholder="Search"
			></input>
		</div>
	);
}