import { Table } from "@mantine/core";

export default function Users() {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
  const rows = elements.map((element) => (
    <tr className=" dark:text-green-500" key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  return (
    <Table className="h-20 w-100 mt-5" fontSize="md">
      <thead>
        <tr>
          <th className=" dark:text-white">Element position</th>
          <th className=" dark:text-white">Element name</th>
          <th className=" dark:text-white">Symbol</th>
          <th className=" dark:text-white">Atomic mass</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
