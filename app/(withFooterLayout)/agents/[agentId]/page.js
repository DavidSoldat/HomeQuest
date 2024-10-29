import AgentPageCard from '@/app/_components/AgentPageCard';
import ContactForm from '@/app/_components/ContactForm';
import ShowMore from '@/app/_components/ShowMore';
import { getAgent, getAgents, getAgentsProperties } from '@/app/_lib/actions';
import { formatPrice } from '@/app/_lib/helpers';
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
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const { name } = await getAgent(params.agentId);
  return {
    title: `${name}`,
  };
}

export async function generateStaticParams() {
  const agents = await getAgents();
  const ids = agents.map((agent) => ({
    agentId: String(agent.id),
  }));
  return ids;
}

export default async function Page({ params }) {
  const agent = await getAgent(params.agentId);
  const properties = await getAgentsProperties(agent.id);

  return (
    <div className="h-full w-full px-4 md:max-w-6xl lg:mx-auto">
      <Breadcrumb className="my-3 text-gray-600">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:underline" href="/agents">
              Agents
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{agent.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <AgentPageCard agent={agent} />
      <div className="my-3 flex flex-col gap-3 md:flex-row">
        <div className="flex flex-col gap-3 md:w-3/4">
          <div className="flex flex-col gap-3 rounded-md border border-gray-200 p-5">
            <h1 className="text-xl font-semibold">Get to know {agent.name}</h1>
            <span className="w-fit rounded-md bg-gray-100 px-2">Realtor</span>
            <ShowMore text={agent.bio} maxLength={400} />
          </div>

          <div className="flex flex-col gap-3 rounded-md border border-gray-200 p-5">
            <h2 className="text-lg font-semibold">
              Sold ({properties.length})
            </h2>
            <Table>
              <TableCaption>Sold properits</TableCaption>
              <TableHeader>
                <TableRow className="font-semibold">
                  <TableHead>Address</TableHead>
                  <TableHead>Sold Date</TableHead>
                  <TableHead>Closing Price</TableHead>
                  <TableHead>Represented</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {properties.map((property) => (
                  <TableRow key={property.id}>
                    <TableCell>
                      <a
                        href={`/buy/${property.id}`}
                        className="flex items-center gap-3 text-blue-800 hover:underline"
                      >
                        <div className="relative h-12 w-16">
                          <Image
                            fill
                            src={property.images[0]}
                            alt="property image"
                          />
                        </div>
                        <div>
                          <p>{property.city}</p>
                          <p>{property.address}</p>
                        </div>
                      </a>
                    </TableCell>
                    <TableCell>{property.soldDate || '-'}</TableCell>
                    <TableCell>{formatPrice(property.price)}</TableCell>
                    <TableCell>Buyer</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="sticky top-3 flex h-fit w-full flex-col gap-3 rounded-md border border-gray-200 p-5 md:w-1/4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Contact {agent.name}
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
