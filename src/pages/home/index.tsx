import { useEffect, useState } from "react";
import { useRequest } from "ahooks";
import { Tabs, TabPane } from "@douyinfe/semi-ui";

import PageTable from "./components/PageTable";

import { getList } from "../../api/buncket";

function Home() {
  const { data } = useRequest(getList);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      setList(data.data);
    }
  }, [data]);
  return (
    <>
      <Tabs type="button" className="h-full flex flex-1 flex-col">
        {list.map((item: any) => {
          return (
            <TabPane
              key={item.Name}
              tab={item.Name.substring(0, item.Name.indexOf("-"))}
              itemKey={item.Name + item.CreationDate}
            >
              <PageTable key={item.Name + item.CreationDate} />
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
}

export default Home;
