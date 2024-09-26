import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function DeleteDialog({
  open,
  handleClose,
  handleDelete,
  property,
}) {
  return (
    <AlertDialog open={open} onOpenChange={handleClose}>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this {property}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone and will permanently delete the{' '}
            {property}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <button
              className="rounded bg-gray-300 px-4 py-2"
              onClick={handleClose}
            >
              Cancel
            </button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <button
              className="rounded bg-red-600 px-4 py-2 text-white"
              onClick={() => {
                handleDelete();
                handleClose();
              }}
            >
              Delete
            </button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
