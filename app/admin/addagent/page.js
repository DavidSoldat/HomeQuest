import AddAgent from '@/app/_components/AddAgent';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function AddAgents() {
  return (
    <div className="flex w-full flex-col gap-6 px-4 pb-10 pt-6 md:max-w-6xl lg:mx-auto">
      <Link href="/admin" className="flex items-center hover:underline">
        <ChevronLeft size={16} />
        Dashborad
      </Link>
      <h2 className="font-semibold">Add agent</h2>
      <div className="boxShadow max-w-lg rounded-lg border px-4 py-3">
        <AddAgent />
      </div>
    </div>
  );
}
