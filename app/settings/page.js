import { redirect } from 'next/navigation';
import getSession from '../_lib/getSession';
import SettingsPage from './SettingsPage';

export const metadata = {
  title: 'Settings',
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect('/api/auth/signin?callbackUrl=/settings');
  }

  return <SettingsPage user={user} />;
}
