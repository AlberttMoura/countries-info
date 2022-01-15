interface FormatedCountryInfoProps {
	name: string
	capital?: [string]
	flag: string
	population?: number
}
export const CountryBox = (country: FormatedCountryInfoProps) => {
	return (
		<div className="bg-white rounded w-40 m-auto text-center h-full">
			<p className="font-bold text-gray-700 text-xl">{country.name}</p>
			<p>{country.capital}</p>
			<img
				className="w-full m-auto"
				src={country.flag}
				alt={country.name + ' flag'}
			/>
			<p>{'Population: ' + country.population}</p>
		</div>
	)
}
