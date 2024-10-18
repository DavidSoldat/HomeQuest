'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteDialog from './DeleteDialog';
import ModalAgent from './ModalAgent';
import ModalProp from './ModalProp';

export default function ListActions({ agents, item, deleteHandler, desc }) {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    deleteHandler(item.id);
    toast.success(`${desc.toUpperCase()} deleted`);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Ellipsis size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuItem onClick={handleOpen} className="editButton">
            <Pencil size={16} />
            <span>Edit</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleOpenDialog} className="editButton">
            <Trash2 size={16} />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteDialog
        open={dialogOpen}
        handleClose={handleCloseDialog}
        handleDelete={handleDelete}
        property={desc}
      />

      {desc === 'agent' ? (
        <ModalAgent agent={item} open={open} handleClose={handleClose} />
      ) : (
        <ModalProp
          property={item}
          open={open}
          handleClose={handleClose}
          agents={agents}
        />
      )}
    </>
  );
}
