'use client';

import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

export default function ListingModal({ children }) {
  const router = useRouter();
  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent
          aria-describedby={undefined}
          className="h-screen !rounded-none bg-white p-0 md:max-w-6xl lg:mx-auto [&>button]:hidden"
        >
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
