export const Results = () => {
	return (
		<div className="bg-gray-200 w-full h-max m-auto text-center py-8">
			<div className="w-full justify-center items-center">
				<input
					name="countries"
					type="text"
					placeholder="Pesquisar País"
					className="h-10 w-100 text-center rounded-lg text-2xl block m-auto mb-5"
				/>
				<input
					type="button"
					value="Pesquisar"
					className="bg-emerald-500 rounded text-white px-2 block active:bg-emerald-600 m-auto w-40 h-10 hover:bg-emerald-400"
					onClick={() => {
						console.log('oi')
					}}
				/>
			</div>
		</div>
	)
}
