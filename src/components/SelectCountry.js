// Let's imagine your colleague already built this component 😃

import { getCountries } from '@/lib/data-service';

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();

  const selectedCountry = countries.find((c) => c.name === defaultCountry);

  return (
    <select
      key={defaultCountry}
      defaultValue={
        selectedCountry
          ? `${selectedCountry.name}%${selectedCountry.flags.svg}`
          : ''
      }
      name={name}
      id={id}
      className={className}
    >
      <option value="">Select country...</option>

      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flags.svg}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
