import axios from 'axios'
import { useState } from 'react'
import { CountryBox } from './CountryBox'

export const Results = () => {
	const [data, setData] = useState([])

	async function loadCountries() {
		const search = (
			document.getElementsByName('countries')[0] as HTMLInputElement
		).value

		axios
			.get(`https://restcountries.com/v3.1/name/${search}`)
			.then((response) => {
				setData(response.data)
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}

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
						loadCountries()
					}}
				/>
			</div>
			<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 max-w-xl m-auto">
				{data.map((country) => {
					return <CountryBox />
				})}
			</div>
		</div>
	)
}
