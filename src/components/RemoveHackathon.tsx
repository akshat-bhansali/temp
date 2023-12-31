"use client";
import { useRouter } from "next/navigation";
const RemoveHackathon = ({id}:any) => {

  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/deleteHackathon?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic} className="  bg-red-500 p-3 rounded-lg hover:bg-red-700 ml-2">
    delete
  </button>
  )
}

export default RemoveHackathon
