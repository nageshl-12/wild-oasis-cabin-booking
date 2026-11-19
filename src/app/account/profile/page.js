import SelectCountry from '@/components/SelectCountry';
import UpdateProfileForm from '@/components/UpdateProfileForm';
import { auth } from '@/lib/auth';
import { getGuest } from '@/lib/data-service';

export const metadata = {
  title: 'Update profile',
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div className=" animate-fade-in-up animate-duration-250">
      <h2 className="font-semibold md:text-2xl text-lg text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="md:text-lg text-sm mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
