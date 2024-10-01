import AddAgent from '@/app/_components/AddAgent';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default function AddAgents() {
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
            <BreadcrumbPage>Add Agent</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="font-semibold">Add agent</h2>
      <div className="boxShadow max-w-lg rounded-lg border px-4 py-3">
        <AddAgent />
      </div>
    </div>
  );
}
