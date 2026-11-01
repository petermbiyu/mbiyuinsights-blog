import Link from "next/link";

const AllPosts = () => {
  return (
    <tbody>
      <tr>
        <td className="border">1</td>
        <td className="border">This is a title</td>
        <td className="border">01/11/2026</td>
        <td className="border">
          <Link href={"/dashboard/edit-post"}>edit</Link>
        </td>
        <td className="border">publish</td>
        <td className="border">delete</td>
      </tr>
      <tr>
        <td className="border">1</td>
        <td className="border">This is a title</td>
        <td className="border">01/11/2026</td>
        <td className="border">edit</td>
        <td className="border">publish</td>
        <td className="border">delete</td>
      </tr>
      <tr>
        <td className="border">1</td>
        <td className="border">This is a title</td>
        <td className="border">01/11/2026</td>
        <td className="border">edit</td>
        <td className="border">publish</td>
        <td className="border">delete</td>
      </tr>
      <tr>
        <td className="border">1</td>
        <td className="border">This is a title</td>
        <td className="border">01/11/2026</td>
        <td className="border">edit</td>
        <td className="border">publish</td>
        <td className="border">delete</td>
      </tr>
    </tbody>
  );
};

export default AllPosts;
