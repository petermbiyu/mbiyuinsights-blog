interface DateProp {
  date: string | Date;
}

const PostDate = ({ date }: DateProp) => {
  return (
    <span>
      {new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}
    </span>
  );
};

export default PostDate;
