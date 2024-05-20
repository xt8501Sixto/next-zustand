import Link from "next/link";

export const UsersItem = ({ users }: { users: any }) => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4">{users.nombre}</td>
      <td className="px-6 py-4">{users.documento}</td>
      <td className="px-6 py-4">{users.usuario}</td>
      <td className="px-6 py-4">
        <input
          type="checkbox"
          defaultChecked={users.estado === "A" ? true : false}
        />
      </td>
      <td className="px-6 py-4">{users.roles}</td>
      <td className="px-6 py-4">{users.tipo}</td>
      <td className="px-6 py-4">
        <Link
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Editar
        </Link>
      </td>
    </tr>
  );
};
