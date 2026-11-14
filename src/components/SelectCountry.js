// Let's imagine your colleague already built this component 😃

import { getCountries } from '@/lib/data-service';

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? '';
    
  return (
    <select
      defaultValue={`${defaultCountry}${flag}`}
      name={name}
      id={id}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
