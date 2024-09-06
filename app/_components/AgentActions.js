'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import ModalComponent from './Modal';
import { editAgent } from '../_lib/actions';
import DeleteAgentDialog from './DeleteAgentDialog';
import toast from 'react-hot-toast';

export default function AgentActions({ agent, deleteAgent }) {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    deleteAgent(agent.id);
    toast.success('Agent deleted');
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

      <DeleteAgentDialog
        open={dialogOpen}
        handleClose={handleCloseDialog}
        handleDelete={handleDelete}
      />

      <ModalComponent agent={agent} open={open} handleClose={handleClose} />
    </>
  );
}
