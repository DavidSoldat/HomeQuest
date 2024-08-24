import { auth } from '@/auth';
import SettingsPage from './SettingsPage';
import { redirect } from 'next/navigation';
import getSession from '../_lib/getSession';

export const metadata = {
  title: 'Settings',
};

export default async function Settings() {
  const session = getSession();
  const user = session?.user;

  if (!user) {
    redirect('/api/auth/signin?callbackUrl=/settings');
  }
  return <SettingsPage user={user} />;
}
