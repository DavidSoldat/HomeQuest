'use client';

import { Button } from '@/components/ui/button';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <Button
      onClick={goBack}
      className="mb-4 flex w-full justify-start gap-3 text-sm font-normal leading-6 text-gray-600 hover:underline"
    >
      <MdArrowBackIosNew size={25} /> Back to search
    </Button>
  );
}
