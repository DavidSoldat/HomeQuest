// 'use client';

// import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
// import { useRouter } from 'next/navigation';

// export default function ListingModal({ children }) {
//   const router = useRouter();
//   const handleOpenChange = () => {
//     router.back();
//   };

//   return (
//     <Dialog open={true} onOpenChange={handleOpenChange}>
//       <DialogOverlay>
//         <DialogContent
//           aria-describedby={undefined}
//           className="h-screen !rounded-none bg-white p-0 md:max-w-6xl lg:mx-auto [&>button]:hidden"
//         >
//           {children}
//         </DialogContent>
//       </DialogOverlay>
//     </Dialog>
//   );
// }

'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { MdArrowBackIosNew, MdIosShare } from 'react-icons/md';
import Logo from './Logo';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

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
          className="flex h-screen w-screen flex-col gap-0 overflow-y-scroll !rounded-none bg-white p-0 md:max-w-6xl lg:mx-auto [&>button]:hidden"
        >
          <DialogTitle>
            <VisuallyHidden>Property</VisuallyHidden>
          </DialogTitle>
          <div className="sticky top-0 z-10 flex h-fit w-full items-center justify-between bg-white p-4">
            <DialogTrigger asChild>
              <Button className="flex gap-3 text-sm font-normal leading-6 text-gray-600 hover:underline">
                <MdArrowBackIosNew size={25} /> Back to search
              </Button>
            </DialogTrigger>
            <Logo />
            <Button className="flex gap-1 text-sm font-normal leading-6 text-gray-600 hover:underline">
              <MdIosShare size={20} /> Share
            </Button>
          </div>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
