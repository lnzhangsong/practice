import React, { useState, useMemo, useEffect } from "react";
import { Table, Avatar } from "@douyinfe/semi-ui";
import * as dateFns from "date-fns";

const figmaIconUrl =
  "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png";
const columns: any[] = [
  {
    title: "标题",
    dataIndex: "name",
    render: (
      text:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined,
      record: any,
      index: any
    ) => {
      return (
        <div>
          <Avatar
            size="small"
            shape="square"
            src={figmaIconUrl}
            style={{ marginRight: 12 }}
          ></Avatar>
          {text}
        </div>
      );
    },
    filters: [
      {
        text: "Semi Design 设计稿",
        value: "Semi Design 设计稿",
      },
      {
        text: "Semi Pro 设计稿",
        value: "Semi Pro 设计稿",
      },
    ],
    onFilter: (value: any, record: { name: string | any[] }) =>
      record.name.includes(value),
  },
  {
    title: "大小",
    dataIndex: "size",
    sorter: (a: { size: number }, b: { size: number }) =>
      a.size - b.size > 0 ? 1 : -1,
    render: (text: any) => `${text} KB`,
  },
  {
    title: "所有者",
    dataIndex: "owner",
    render: (
      text: {} | null | undefined,
      record: { avatarBg: string | undefined },
      index: any
    ) => {
      return (
        <div>
          <Avatar size="small" style={{ marginRight: 4 }}>
            {typeof text === "string" && text.slice(0, 1)}
          </Avatar>
          {text}
        </div>
      );
    },
  },
  {
    title: "更新日期",
    dataIndex: "updateTime",
    sorter: (a: { updateTime: number }, b: { updateTime: number }) =>
      a.updateTime - b.updateTime > 0 ? 1 : -1,
    render: (value: string | number | Date) => {
      return dateFns.format(new Date(value), "yyyy-MM-dd");
    },
  },
];

const DAY = 24 * 60 * 60 * 1000;

function App() {
  const [dataSource, setData] = useState([]);

  const pagination = useMemo(() => {
    return {
      pageSize: 15,
      pageSizeOpts: [15, 30, 60, 100],
      showQuickJumper: true,
      showSizeChanger: true,
    };
  }, []);
  const rowSelection = useMemo(
    () => ({
      width: 100,
      onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: (record: { name: string }) => ({
        disabled: record.name === "Michael James", // Column configuration not to be checked
        name: record.name,
      }),
    }),
    []
  );

  const scroll = useMemo(() => ({ y: window.innerHeight - 180 }), []);

  const getData = (): any => {
    const data = [];
    for (let i = 0; i < 46; i++) {
      const isSemiDesign = i % 2 === 0;
      const randomNumber = (i * 1000) % 199;
      data.push({
        key: "" + i,
        name: isSemiDesign
          ? `Semi Design 设计稿${i}.fig`
          : `Semi Pro 设计稿${i}.fig`,
        owner: isSemiDesign ? "姜鹏志" : "郝宣",
        size: randomNumber,
        updateTime: new Date().valueOf() + randomNumber * DAY,
        avatarBg: isSemiDesign ? "grey" : "red",
      });
    }
    return data;
  };

  useEffect(() => {
    const data = getData();
    setData(data);
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowSelection={rowSelection}
      scroll={scroll}
      pagination={pagination}
    />
  );
}

export default App;
