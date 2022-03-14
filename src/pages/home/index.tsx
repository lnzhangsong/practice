import { useEffect, useState } from "react";
import { useRequest } from "ahooks";
import { Tabs, TabPane } from "@douyinfe/semi-ui";

import promiseRetry from "../../utils/selfPromise";

import PageTable from "./components/PageTable";

import getList from "../../api/buncket";

function Home() {
  const { data } = useRequest(() =>
promiseRetry(getList, 3, "网络错误"));
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      setList(data.data);
    }
  }, [data]);
  return (
    <>
      <Tabs type="button" className="h-full flex flex-1 flex-col">
        {list.map((item: any) =>
(
          <TabPane
            key={item.Name}
            tab={item.Name.substring(0, item.Name.indexOf("-"))}
            itemKey={item.Name + item.CreationDate}
          >
            <PageTable key={item.Name + item.CreationDate} />
          </TabPane>
        ))}
      </Tabs>
    </>
  );
}

export default Home;
