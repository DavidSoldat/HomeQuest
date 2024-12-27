import ListActions from '@/app/_components/ListActions';
import {
  deleteProperty,
  getAgents,
  getAllProperties,
} from '@/app/_lib/actions';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

export default async function manageListings() {
  const properties = await getAllProperties();
  const agents = await getAgents();
  return (
    <div className="flex w-full flex-col gap-6 px-4 pb-10 pt-6 md:max-w-6xl lg:mx-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link className="hover:underline" href="/admin">
                Dashboard
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Manage Listings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="font-semibold">Manage listings</h2>
      <div>
        <Table>
          <TableCaption>List of Properties</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>City</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Type</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell className="flex items-center gap-2">
                  {property.city}
                </TableCell>
                <TableCell>{property.address}</TableCell>
                <TableCell>{property.listingType}</TableCell>
                <TableCell>
                  <ListActions
                    item={property}
                    deleteHandler={deleteProperty}
                    desc="property"
                    agents={agents}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
