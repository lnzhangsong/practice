import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Tag, Button, Progress } from "@douyinfe/semi-ui";

interface IProps {
  used: number;
  sum: number;
}

function SideBar(props: IProps) {
  const { used, sum } = props;
  const [rate] = useState(used / sum);

  const nav = useNavigate();

  return (
    <div className="flex flex-col justify-between w-full">
      <header>
        <div className="p-2 m-2 flex justify-around items-center border rounded-lg">
          <div>LOGO</div>
        </div>
      </header>
      <section className="h-full">
        <div className="h-full mx-2 p-2 flex flex-col border rounded-lg space-y-2.5">
          <Button onClick={() =>
nav("home")}>所有文件</Button>
          <Button onClick={() =>
nav("last_used")}>近期使用</Button>
          <Button onClick={() =>
nav("manage")}>同步任务</Button>
          <Button onClick={() =>
nav("analysis")}>用量分析</Button>
        </div>
      </section>
      <footer>
        <div className="p-3 h-20 m-2 flex flex-col justify-between border rounded-lg">
          <div className="flex justify-between">
            <Tag> 使用量 </Tag> {used} / {sum}
          </div>
          <Progress percent={rate * 100} stroke="var(--semi-color-danger)" />
        </div>
      </footer>
    </div>
  );
}

export default SideBar;
