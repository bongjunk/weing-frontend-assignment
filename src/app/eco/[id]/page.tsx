import EcoOrder from "@/components/eco/EcoOrder.tsx/EcoOrder";
import EcoProducts from "@/components/eco/EcoProducts/EcoProducts";

interface EcoDetailPageProps {
  params: {
    id: string;
  };
}

export default function EcoDetailPage({ params }: EcoDetailPageProps) {
  return (
    <>
      <EcoOrder id={params.id} />
      <EcoProducts />
    </>
  );
}
