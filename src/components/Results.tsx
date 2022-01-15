import axios from 'axios'
import { useState } from 'react'
import { CountryBox } from './CountryBox'

export const Results = () => {
	interface CountryInfo {
		name: {
			common: string
		}
		capital: [string]
		flags: {
			png: string
		}
		population: number
	}

	type FormatedCountryInfoProps = {
		name: string
		capital?: [string]
		flag: string
		population?: number
	}

	const [data, setData] = useState<FormatedCountryInfoProps[]>([])

	async function loadCountries() {
		const search = (
			document.getElementsByName('countries')[0] as HTMLInputElement
		).value

		axios
			.get(
				search.trim()
					? `https://restcountries.com/v3.1/name/${search}`
					: 'https://restcountries.com/v3.1/all'
			)
			.then((response) => {
				const data = response.data as [CountryInfo]
				const formatedData = data.map((country) => {
					return {
						name: country.name.common,
						capital: country?.capital,
						flag: country.flags.png,
						population: country?.population,
					}
				})
				setData(formatedData)
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
			<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 max-w-xl m-auto gap-y-4">
				{data.map((country, index) => {
					return (
						<CountryBox
							name={country.name}
							capital={country.capital}
							flag={country.flag}
							population={country.population}
							key={country.name}
						/>
					)
				})}
			</div>
		</div>
	)
}
