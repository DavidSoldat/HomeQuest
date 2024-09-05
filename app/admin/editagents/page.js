import { getAgents } from '@/app/_lib/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronLeft, Ellipsis, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default async function EditAgents() {
  const agents = await getAgents();
  return (
    <div className="flex w-full flex-col gap-6 px-4 pb-10 pt-6 md:max-w-6xl lg:mx-auto">
      <Link href="/admin" className="flex items-center hover:underline">
        <ChevronLeft size={16} />
        Dashborad
      </Link>
      <h2 className="font-semibold">Edit agents</h2>
      <div>
        <Table>
          <TableCaption>List of Agents</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agents.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell>{agent.id}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={agent.image} alt="agent image" />
                    <AvatarFallback>Avatar</AvatarFallback>
                  </Avatar>
                  Test Test
                </TableCell>
                <TableCell>{agent.email}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Ellipsis size={16} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="flex cursor-pointer gap-2">
                        <Pencil size={16} />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex cursor-pointerg gap-2">
                        <Trash2 size={16} />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
