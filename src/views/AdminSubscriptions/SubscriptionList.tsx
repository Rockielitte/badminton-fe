"use client";

import { useQuery } from "@tanstack/react-query";

type Props = {};

const SubscriptionList = (props: Props) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });

  console.log(data, "kkk");

  return <div>SubscriptionList</div>;
};

export default SubscriptionList;
