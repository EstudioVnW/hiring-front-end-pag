import { useRouter } from "next/navigation";

export default function HandleViewDetails({ id }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/car/${id}`);
  };

  return (
    <button onClick={handleClick}>
      Visualizar
    </button>
  );
}