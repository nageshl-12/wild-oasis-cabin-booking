// import SelectCountry from 'starter/components/SelectCountry';
import Image from 'next/image';

export const metadata = {
  title: 'Update profile',
};

export default function Page() {
  const countryFlag = 'pt.jpg';
  const nationality = 'portugal';

  return (
    <div className=" animate-fade-in-up animate-duration-250">
      <h2 className="font-semibold md:text-2xl text-lg text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="md:text-lg text-sm mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form className="bg-primary-900 py-8 px-12 md:text-lg text-sm flex gap-6 flex-col">
        <div className="space-y-2">
          <label>Full name</label>
          <input
            disabled
            className="px-5 md:py-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            disabled
            className="px-5 md:py-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            {/* <Image
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm"
            /> */}
          </div>

          {/* <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultCountry={nationality}
          /> */}
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            className="px-5 md:py-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button className="bg-accent-500 md:px-8 px-5 md:py-4 cursor-pointer py-2 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}
